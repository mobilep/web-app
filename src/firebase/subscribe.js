import firebase from 'firebase/app';
import 'firebase/database';
import { inboxInfo } from '../redux/reducers';
import commonConstants from '../constants/common';

const { chatFbFolders } = commonConstants;
const EVENTS = commonConstants.firebase.EVENTS;

const onChatChanges = (inboxes, eventType, dispatch) => {
	const isPrivateInbox = inboxes[0].inboxId.includes(chatFbFolders.INBOX_CHAT);
	if (eventType === EVENTS.child_added && isPrivateInbox) {
		dispatch(inboxInfo.getNewInbox(inboxes));
	} else {
		dispatch(inboxInfo.onMessagesReceived(inboxes));
	}
};

const getPaths = ({ value, currentPath, accumulator = [], eventType }) => {
	return Object.entries(value).reduce((accumulator, [key, value]) => {

		// TODO: Make this more robust.
		// Message IDs always start with `-`, but this could change.
		const isMessageObject = Object.keys(value).some((key) => key.startsWith('-'));

		if (isMessageObject) {
			const messages = Object.entries(value).map(([messageId, message]) => ({ messageId, ...message }));
			const inboxId = key === 'messages' ? currentPath : `${currentPath}/${key}`;
			const _id = key === 'messages' ? currentPath.match(/\w+$/)[0] : key;
			accumulator.push({ inboxId, messages, eventType, _id });
			return accumulator;
		} else {
			return getPaths({ value, currentPath: `${currentPath}/${key}`, accumulator, eventType });
		}

	}, accumulator);
};

const handleSnapshotValue = (path, dispatch) => (eventType) => (snapshot) => {
	const snapshotValue = snapshot.val();
	if (!snapshotValue) return;

	const currentPath = path.includes(snapshot.key) ? path : `${path}/${snapshot.key}`;
	const chats = getPaths({ value: snapshotValue, currentPath, accumulator: [], eventType });

	onChatChanges(chats, eventType, dispatch);
};

const getFbPath = (prefix, userId) => {
	return `${prefix}/${userId}`;
};

export default (store) => {
	const db = firebase.database();
	let hasInitialized = false;
	let hasSubscribed = false;
	let currentIsUserSignedInValue;

	store.subscribe(() => {
		// TODO: Use RXJS here, as store is actually an observable, then unsubscribe.
		const state = store.getState();
		const dispatch = store.dispatch;
		const previousIsUserSignedInValue = currentIsUserSignedInValue;

		currentIsUserSignedInValue = state.userInfo.signedIn;

		if (currentIsUserSignedInValue !== previousIsUserSignedInValue) {
			// user just signed out
			if (!currentIsUserSignedInValue) {
				hasSubscribed = false;
				hasInitialized = false;
			}
		}
		// do not subscribe to firebase again if user is not signed in
		if (!currentIsUserSignedInValue) return;
		// Wait for the application to load before fetching the inboxList.
		if (!state.appInfo.loading && !hasInitialized) {
			hasInitialized = true;
			store.dispatch(inboxInfo.getInboxList());
		}

		// Once the application has loaded, the inboxList can be populated.
		if (state.inboxInfo.inboxList.length && !hasSubscribed) {
			hasSubscribed = true;
			[chatFbFolders.SCENARIO_CHAT, chatFbFolders.INBOX_CHAT].forEach((chatType) => {
				let initialised = false;
				const path = getFbPath(chatType, state.userInfo._id);

				const ref = db.ref(path);
				const updateHandler = handleSnapshotValue(path, dispatch);

				ref.on(EVENTS.child_added, (snapshot) => {
					if (!initialised) return;
					updateHandler(EVENTS.child_added)(snapshot);
				});
				ref.on(EVENTS.child_changed, (snapshot) => {
					if (!initialised) return;
					updateHandler(EVENTS.child_changed)(snapshot);
				});
				ref.once(EVENTS.value, (snapshot) => {
					updateHandler(EVENTS.value)(snapshot);
					initialised = true;
				});
			});
		}
	});
	return db;
};
