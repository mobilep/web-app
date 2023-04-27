import firebase from 'firebase/app';
import 'firebase/database';
import { inboxInfo } from '../redux/reducers';
import commonConstants from '../constants/common';
import { messageMapper } from '../helpers';

const EVENTS = commonConstants.firebase.EVENTS;

class ChatsSubscriptionManager {
	subscriptions = new Map();

	constructor (store) {
		this.db = firebase.database();
		this.dispatch = store.dispatch;
	}

	subscribe (path) {
		if (!this.subscriptions.has(path)) {
			const ref = this.db.ref(path);

			this.subscriptions.set(path, ref);
			this.listenForEvent(ref);
		}
	}

	listenForEvent (ref) {
		ref.on(EVENTS.value, ((snapshot) => {
			const messages = snapshot.val().messages;

			if (messages) {
				this.onMessages(messages, snapshot.key);
			}
		}));
	}

	onMessages (messages, chatId) {
		const messagesWithMeta = {
			inboxId: `mpchat/${chatId}`,
			messages: messageMapper.mapMessagesSnapshot(messages),
			_id: chatId,
		};

		this.dispatch(inboxInfo.onMessagesReceived([messagesWithMeta]));
	}

	unsubscribe (path) {
		const subscription = this.subscriptions.get(path);

		if (subscription) {
			subscription.off();
			this.subscriptions.delete(path);
		}
	}

	reset () {
		this.subscriptions.forEach(((subscription) => {
			subscription.off();
		}));
		this.subscriptions.clear();
	}
}

export default ChatsSubscriptionManager;
