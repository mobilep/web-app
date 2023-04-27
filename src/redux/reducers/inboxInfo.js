/* eslint-disable */
import ACTIONS from '../actionTypes';
import constants from '../../constants';
import { practiceStates } from '../../constants/common';
const { inboxStatuses, chatType } = constants.common;

const getNumberOfUnreadMessages = (messages, inbox) => {
	const lastReadMessage = inbox.lastReadMessage !== undefined ? inbox.lastReadMessage : inbox._inbox.lastReadMessage;
	const numberOfReadMessages = messages
		.findIndex(({messageId}) => messageId === lastReadMessage) + 1;

	return messages.length - numberOfReadMessages;
};

/* Format is "inbox/:userId/:inboxId" */
const parseInboxIdfromString = (inboxIdString) => inboxIdString.split('/')[2];
/* Format is "inbox/:userId/:inboxId" */
const parseChatTypeFromString = (inboxIdString) => inboxIdString.split('/')[0];
const findInboxCb = (inboxId) =>
	({ _scenario, _id, _inbox }) =>
		(_scenario && _inbox && _inbox._id) ? _inbox._id === inboxId : _id === inboxId;

const findInboxIndexById = (inboxList, inboxId) =>
	inboxList.findIndex(findInboxCb(inboxId));

const inboxInfo = (state = { inboxList: [] }, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.INBOX__DELETE_MESSAGE__REQUEST:
		case ACTIONS.INBOX__DELETE_MESSAGE__REQUEST_ERROR:
			return state;
		case ACTIONS.INBOX__DELETE_MESSAGE__REQUEST_SUCCESS:
			const { messageId } = payload;
			const activeInbox = { ...state.activeInbox };
			const messages = (activeInbox.messages || [])
				.filter((msg = {}) => messageId !== msg.messageId);
			activeInbox.messages = messages;
			return {
				...state,
				activeInbox,
			}
		case ACTIONS.INBOX__MESSAGES__SET: {
			return payload.reduce((state, payload) => {
				const inboxId = payload._id;
				const inboxList = [...state.inboxList];
				let activeInbox = { ...state.activeInbox };
				const messages = [...payload.messages];
				const currentIndex = findInboxIndexById(inboxList, inboxId);
				// This inboxId has not been matched.
				if (currentIndex < 0) {
					return state;
				};

				const isActiveInboxMessage = inboxId === activeInbox._id ||
					(activeInbox._inbox && inboxId === activeInbox._inbox._id);

				if (isActiveInboxMessage) {
					// Set messages to the active/current inbox.
					activeInbox = {
						...activeInbox,
						messages,
						unreadMessagesCount: 0,
					};
				}

				// Update the inbox list.
				const prevMessages = inboxList[currentIndex].messages;
				const isUpdate = !!prevMessages;
				const prevMessagesCount= isUpdate && prevMessages.length;
				const messageCount= payload.messages.length - 1;

				inboxList[currentIndex] = {
					...inboxList[currentIndex],
					messages,
					message: messages[messages.length - 1],
				};

				if (isUpdate) {
					const isNewMessage = (
						(payload.messages.length > prevMessagesCount) &&
						(state.inboxList[0].currentUserId !== payload.messages[messageCount]._user) &&
						!isActiveInboxMessage
					);

					const status = isNewMessage ? inboxStatuses.UNREAD : inboxList[currentIndex].status;
					const unreadMessagesCount = isActiveInboxMessage ? 0 : getNumberOfUnreadMessages(payload.messages, inboxList[currentIndex]);

					inboxList[currentIndex] = {
						...inboxList[currentIndex],
						status,
						unreadMessagesCount,
					};
				}

				return {
					...state,
					activeInbox,
					inboxList,
				};
			}, state);
		}
		case ACTIONS.INBOX__SEND_MESSAGE__REQUEST_SUCCESS:
			return state;
		case ACTIONS.INBOX__SEND_MESSAGE__REQUEST_ERROR:
			return {
				...state,
				inboxError: true
			}
		case ACTIONS.INBOX__CREATE__REQUEST:
			return {
				...state,
				fetchingInbox: true,
				inboxError: false,
			};
		case ACTIONS.INBOX__CREATE__REQUEST_ERROR:
			return {
				...state,
				fetchingInbox: false,
				inboxError: true,
			};
		case ACTIONS.INBOX__CREATE__REQUEST_SUCCESS:
			return {
				...state,
				inboxList: [
					{ ...payload,
					status: 'read'
				},
					...state.inboxList,
				],
				inboxError: false,
			};
		case ACTIONS.INBOX__UPDATE__REQUEST:
			return {
				...state,
				inboxError: false,
			};
		case ACTIONS.INBOX__UPDATE__REQUEST_ERROR:
			return {
				...state,
				inboxError: true,
			};
		case ACTIONS.INBOX__UPDATE__REQUEST_SUCCESS:
			if (findInboxIndexById(state.inboxList, payload._id) === -1) return { ...state };
			return {
				...state,
				inboxList: [
					...state.inboxList.slice(0, findInboxIndexById(state.inboxList, payload._id)),
					{
						...state.inboxList.find(findInboxCb(payload._id)),
						status: payload.status,
						lastReadMessage: payload.lastReadMessage,
						_inbox: (() => {
							const obj = { ...state.inboxList.find(findInboxCb(payload._id)) };

							if (payload.type === chatType.PRACTICE) {
								return { ...obj._inbox, status: payload.status };
							}
						})(),
					},
					...state.inboxList.slice(findInboxIndexById(state.inboxList, payload._id) + 1),
				],
				fetchingInbox: false,
				inboxError: false,
			};
		case ACTIONS.INBOX__UPDATE_CHAT_DATA_SUCCESS: {
      return {
				...state,
				inboxList: state.inboxList.map((inbox) => {
					if (inbox._id === payload._id) return payload;
					return inbox;
				}),
				activeInbox: {
					...state.activeInbox,
					...payload,
				},
			}
		}
		case ACTIONS.INBOX__GET__REQUEST:
			return {
				...state,
				fetchingInbox: true,
				inboxError: false,
			};
		case ACTIONS.INBOX__GET__REQUEST_ERROR:
			return {
				...state,
				fetchingInbox: false,
				inboxError: true,
			};
		case ACTIONS.INBOX__GET__REQUEST_SUCCESS:
			return {
				...state,
				fetchingInbox: false,
				inboxError: false,
			};
		case ACTIONS.INBOX__GET_NEW__REQUEST:
		case ACTIONS.INBOX__GET_NEW__REQUEST_ERROR:
			return state;
		case ACTIONS.INBOX__GET_NEW__REQUEST_SUCCESS: {
			const inboxId = (payload._inbox && payload._inbox._id) || payload._id;
			const index = findInboxIndexById(state.inboxList, inboxId);
			const inboxList = [...state.inboxList];
			let activeInbox = state.activeInbox;

			const isActiveInboxMessage = inboxId === activeInbox._id ||
				(activeInbox._inbox && inboxId === activeInbox._inbox._id);

			if (isActiveInboxMessage) {
				// Set messages to the active/current inbox.
				activeInbox = {
					...activeInbox,
					messages: payload.messages,
				};
			}

			// This prevents duplicates, which occur when an empty inbox is created.
			if (index >= 0) {
				inboxList.splice(index, 1);
			}
			return {
				...state,
				activeInbox,
				inboxList: [
					payload,
					...inboxList,
				],
			};
		}
		case ACTIONS.INBOX__ACTIVE__SET: {
			return {
				...state,
				activeInbox: {
					...payload,
				},
			};
		}
		case ACTIONS.INBOX__GET_LIST__REQUEST:
			return {
				...state,
				fetching: !(payload || {}).refetch,
				inboxListError: false,
			};
		case ACTIONS.INBOX__GET_LIST__REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				inboxListError: true,
			};
		case ACTIONS.INBOX__GET_LIST__REQUEST_SUCCESS:
			const inboxMessagesMap = (state.inboxList || []).reduce((acc, current) => {
				acc[current._id] = current.messages;
				return acc;
			}, {})
			const nextInboxList = (payload || []).map((item = {}) => ({
				...item,
				unreadMessagesCount: item._inbox ? item._inbox.unreadMessagesCount : item.unreadMessagesCount,
				messages: inboxMessagesMap[item._id]
			}));

			return {
				...state,
				// TODO: rewrite sorting algorithm
				inboxList: [...[...nextInboxList].sort((prevItem, item) => {
					if (prevItem._inbox && item._inbox) {
						return new Date(item._inbox.updatedAt).getTime() -
						new Date(prevItem._inbox.updatedAt).getTime();
					}
					if (prevItem._inbox && !item._inbox) {
						return new Date(item.updatedAt).getTime() -
						new Date(prevItem._inbox.updatedAt).getTime();
					}
					if (!prevItem._inbox && item._inbox) {
						return new Date(item._inbox.updatedAt).getTime() -
						new Date(prevItem.updatedAt).getTime();
					}
					if (!prevItem._inbox && !item._inbox) {
						return new Date(item.updatedAt).getTime() -
						new Date(prevItem.updatedAt).getTime();
					}
					return 0;
				})],
				fetching: false,
				inboxListError: false,
			};
		case ACTIONS.INBOX__DELETE_CHAT_REQUEST_SUCCESS:
			return {
				...state,
				inboxList: [
					...state.inboxList.filter((item) => item._id !== payload),
				],
			};
		case ACTIONS.USER__SIGN_OUT:
			return {
				inboxList: [],
			};
		case ACTIONS.INBOX__CLEAN__ACTIVE_INBOX:
			return {
				...state,
				activeInbox: {},
			};
		case ACTIONS.INBOX__LOCATION__UPDATE:
			return {
				...state,
				nextUrl: payload.nextUrl,
			};
		case ACTIONS.INBOX__SAVE_BEST_PRACTICE_VIDEO__REQUEST_ERROR:
			return {
				...state,
				saveBestPracticeVideoError: payload.error,
			};
		case ACTIONS.INBOX__EVALUATE_SUCCESS:
			const index = state.inboxList.findIndex(({_id}) => _id === payload.inboxId);
			const inboxList = [...state.inboxList];
			inboxList[index] = {
				...inboxList[index],
				state: practiceStates.COMPLETED,
			}

			return {
				...state,
        inboxList,
			}
		default:
			return state;
	}
};

inboxInfo.deleteMessage = (payload) => ({
	type: ACTIONS.INBOX__DELETE_MESSAGE__REQUEST,
	payload,
});

inboxInfo.deleteMessageSuccess = (payload) => ({
	type: ACTIONS.INBOX__DELETE_MESSAGE__REQUEST_SUCCESS,
	payload,
});

inboxInfo.deleteMessageError = (payload) => ({
	type: ACTIONS.INBOX__DELETE_MESSAGE__REQUEST_ERROR,
	payload,
});

inboxInfo.sendMessage = (payload) => ({
	type: ACTIONS.INBOX__SEND_MESSAGE__REQUEST,
	payload,
});

inboxInfo.sendMessageSuccess = (payload) => ({
	type: ACTIONS.INBOX__SEND_MESSAGE__REQUEST_SUCCESS,
	payload,
});

inboxInfo.sendMessageError = (payload) => ({
	type: ACTIONS.INBOX__SEND_MESSAGE__REQUEST_ERROR,
	payload,
});

inboxInfo.updateInbox = (payload) => ({
	type: ACTIONS.INBOX__UPDATE__REQUEST,
	payload,
});

inboxInfo.updateInboxSuccess = (payload) => ({
	type: ACTIONS.INBOX__UPDATE__REQUEST_SUCCESS,
	payload,
});

inboxInfo.updateInboxError = (payload) => ({
	type: ACTIONS.INBOX__UPDATE__REQUEST_ERROR,
	payload,
});

inboxInfo.createInbox = (payload) => ({
	type: ACTIONS.INBOX__CREATE__REQUEST,
	payload,
});

inboxInfo.createInboxSuccess = (payload) => ({
	type: ACTIONS.INBOX__CREATE__REQUEST_SUCCESS,
	payload,
});

inboxInfo.createInboxError = (payload) => ({
	type: ACTIONS.INBOX__CREATE__REQUEST_ERROR,
	payload,
});

inboxInfo.getNewInbox = (payload) => ({
	type: ACTIONS.INBOX__GET_NEW__REQUEST,
	payload,
});

inboxInfo.getNewInboxError = () => ({
	type: ACTIONS.INBOX__GET_NEW__REQUEST_ERROR,
});

inboxInfo.getNewInboxSuccess = (payload) => ({
	type: ACTIONS.INBOX__GET_NEW__REQUEST_SUCCESS,
	payload,
});

inboxInfo.getInbox = (payload) => ({
	type: ACTIONS.INBOX__GET__REQUEST,
	payload,
});

inboxInfo.getInboxSuccess = () => ({
	type: ACTIONS.INBOX__GET__REQUEST_SUCCESS,
});

inboxInfo.getInboxError = (payload) => ({
	type: ACTIONS.INBOX__GET__REQUEST_ERROR,
	payload,
});

inboxInfo.setActiveInbox = (payload) => ({
	type: ACTIONS.INBOX__ACTIVE__SET,
	payload,
});

inboxInfo.getInboxList = (payload) => ({
	type: ACTIONS.INBOX__GET_LIST__REQUEST,
	payload,
});

inboxInfo.getInboxListSuccess = (payload) => ({
	type: ACTIONS.INBOX__GET_LIST__REQUEST_SUCCESS,
	payload,
});

inboxInfo.getInboxListError = (payload) => ({
	type: ACTIONS.INBOX__GET_LIST__REQUEST_ERROR,
	payload,
});

inboxInfo.onMessagesReceived = (payload) => ({
	type: ACTIONS.INBOX__MESSAGES__SET,
	payload,
});

inboxInfo.updateLastRead = (payload) => ({
	type: ACTIONS.INBOX__UPDATE_LAST_READ,
	payload,
})

inboxInfo.deleteChat = (payload) => ({
	type: ACTIONS.INBOX__DELETE_CHAT_REQUEST,
	payload,
});

inboxInfo.deleteChatSuccess = (payload) => ({
	type: ACTIONS.INBOX__DELETE_CHAT_REQUEST_SUCCESS,
	payload,
});

inboxInfo.deleteChatError = (payload) => ({
	type: ACTIONS.INBOX__DELETE_CHAT_REQUEST_ERROR,
	payload,
});

inboxInfo.cleanActiveInbox = () => ({
	type: ACTIONS.INBOX__CLEAN__ACTIVE_INBOX,
});

inboxInfo.locationUpdate = (payload) => ({
	type: ACTIONS.INBOX__LOCATION__UPDATE,
	payload,
});

inboxInfo.saveBestPracticeVideo = (payload) => ({
	type: ACTIONS.INBOX__SAVE_BEST_PRACTICE_VIDEO__REQUEST,
	payload,
});

inboxInfo.saveBestPracticeVideoError = (payload) => ({
	type: ACTIONS.INBOX__SAVE_BEST_PRACTICE_VIDEO__REQUEST_ERROR,
	payload,
});

inboxInfo.inboxEvaluateSuccess = (payload) => ({
	type: ACTIONS.INBOX__EVALUATE_SUCCESS,
	payload,
});

inboxInfo.updateChatData = (payload) => ({
	type: ACTIONS.INBOX__UPDATE_CHAT_DATA,
	payload,
});

inboxInfo.updateChatDataSuccess = (payload) => ({
	type: ACTIONS.INBOX__UPDATE_CHAT_DATA_SUCCESS,
	payload,
});

export default inboxInfo;
