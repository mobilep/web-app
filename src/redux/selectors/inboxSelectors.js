import { createSelector } from 'reselect';
import constants from '../../constants';
import { getPracticeState, enrichMessages } from './commonMethods';
import { getGroupChatName } from '../../helpers/getGroupChatName';

const { UNREAD } = constants.common.inboxStatuses;

const getInboxList = (state) => state.inboxInfo.inboxList;
const getActiveInbox = (state) => state.inboxInfo.activeInbox;
const getUserInfo = (state) => state.userInfo;

export const getNumberOfUnreadInboxes = createSelector(
	[getInboxList],
	(inboxList) => inboxList.filter(filterReadInboxes).length,
);

export const getActiveInboxSelector = createSelector(
	[getActiveInbox, getUserInfo],
	(activeInbox, userInfo) => {
		if (!activeInbox) return activeInbox;

		if (isPrivateGroupInbox(activeInbox)) {
			return {
				...activeInbox,
				groupChatName: activeInbox.users ? getGroupChatName(activeInbox) : null,
			};
		}

		if (activeInbox._coach) {
			const isCoach = activeInbox._coach._id === userInfo._id;
			const inboxState = getPracticeState(activeInbox);
			const messages = enrichMessages({ messages: activeInbox.messages, inboxState, isCoach });
			return {
				...activeInbox,
				messages,
				state: inboxState,
			};
		}

		return activeInbox;
	}
);

function isPrivateGroupInbox (inbox) {
	return !inbox._coach && inbox.users;
}

function filterReadInboxes ({ status, _scenario }) {
	return !_scenario && status === UNREAD;
}
