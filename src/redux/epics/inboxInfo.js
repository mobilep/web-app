import { ofType } from 'redux-observable';
import { map, switchMap, merge, delay, withLatestFrom, catchError } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import ACTIONS from '../actionTypes';
import constants from '../../constants';
import { httpApi } from '../../utils';
import { inboxInfo, videosInfo, imagesInfo, mediaInfo, scenarioInfo } from '../reducers';
import { combineLatest, EMPTY, forkJoin } from 'rxjs';
import { db as dbRef, chatsSubscriptionsService } from '../../index';
import { getLastElementInArray } from '../../helpers/arrayHelpers';
import { messageMapper, storeHelpers, getMessageBody } from '../../helpers';
import { chatSubType } from '../../constants/common';
import { chatApi } from '../api/chatApi';
const { routes } = constants;
const { api, api4, inboxStatuses, chatFbFolders, firebase } = constants.common;
const EVENTS = firebase.EVENTS;

const getScenarioListFetch = (Authorization, companyId) => {
	return httpApi.get(`${api}/company/${companyId}/scenario`, { Authorization })
		.then((res) => res.json());
};

const getInboxListFetch = (Authorization, companyId) => {
	return httpApi
		.get(`${api4}/company/${companyId}/inbox`, { Authorization })
		.then((res) => res.json());
};

const createInbox = (Authorization, companyId, recipientId) => {
	return httpApi.post(
		`${api}/company/${companyId}/inbox`,
		{ _recipient: recipientId },
		{ Authorization }
	).then((res) => res.json());
};

const fetchInbox = (Authorization, companyId, inboxId) => {
	return httpApi.get(`${api4}/company/${companyId}/inbox/${inboxId}`, { Authorization })
		.then((res) => res.json());
};

const updateInbox = (Authorization, companyId, inboxId, body) => {
	return httpApi.patch(`${api4}/company/${companyId}/inbox/${inboxId}`, body, { Authorization })
		.then((res) => res.json());
};

const saveAsBestPracticeVideoFetch = (Authorization, companyId, scenarioId, body) => {
	return httpApi
		.post(
			`${api4}/company/${companyId}/scenario/${scenarioId}/examples`,
			body,
			{ Authorization }
		)
		.then((res) => res.json());
};

const sendMessage = (Authorization, companyId, inboxId, message, type) => {
	const body = getMessageBody(message, type);
	return httpApi.post(`${api4}/company/${companyId}/inbox/${inboxId}`, body, { Authorization });
};

const sendScenarioMessage = (Authorization, companyId, scenarioId, activeInboxId, inboxId, message, type) => {
	const body = getMessageBody(message, type);
	return httpApi.post(
		`${api4}/company/${companyId}/scenario/${scenarioId}/practice/${activeInboxId}/inbox/${inboxId}`,
		body,
		{ Authorization }
	);
};

const deleteMessage = ({ accessToken: Authorization, companyId, inboxId, messageId }) => {
	return httpApi.delete(`${api4}/company/${companyId}/inbox/${inboxId}/message/${messageId}`, { Authorization })
		.then((res) => ({ res, messageId }));
};

const deleteChat = ({ accessToken: Authorization, companyId, inboxId }) => {
	return httpApi.delete(`${api}/company/${companyId}/inbox/${inboxId}`, { Authorization });
};

const getScenarioById = (scenarios = [], scenarioId) => {
	return scenarios.find(({ _id } = {}) => _id === scenarioId);
};

const createInboxInfoAction = (res) => {
	if (res.error) {
		return inboxInfo.getInboxListError(res);
	}
	return inboxInfo.getInboxListSuccess(res);
};

export const createInboxEpic = (action$, store) => {
	return action$.ofType(ACTIONS.INBOX__CREATE__REQUEST).pipe(
		switchMap((action) => {
			const { payload: { recipients, title } } = action;
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			if (!accessToken) return EMPTY;

			return recipients.length === 1
				? createInbox(accessToken, companyId, recipients[0])
				: chatApi.create({ companyId, recipients, title });
		}),
		switchMap((res) => {
			if (res.err) {
				return inboxInfo.createInboxError(res);
			} else {
				const view = res.users ? 'group-chat' : 'chat';
				const nextUrl = `${routes.INBOX}/${view}/${res._id}`;
				if (res.users) chatsSubscriptionsService.subscribe(res.chatId);
				return of(
					inboxInfo.createInboxSuccess(res),
					inboxInfo.setActiveInbox(res),
					inboxInfo.locationUpdate({ nextUrl }),
				).pipe(
					merge(of(inboxInfo.locationUpdate({ nextUrl: '' })).pipe(delay(10))),
				);
			}
		}),
	);
};
/* Format is "inbox/:userId/:inboxId" */
const parseInboxIdfromString = (inboxIdString) => inboxIdString.split('/')[2];

/* Format is "chats/:userId/:scenarioId/:practiceId/:inboxId" */
const parseInboxIdFromScenarioPath = (inboxIdString) => inboxIdString.split('/')[3];
/* Format is "inbox/:userId/:inboxId" */
const parseChatTypeFromString = (inboxIdString) => inboxIdString.split('/')[0];

export const getNewInboxEpic = (action$, store) => {
	return action$.ofType(ACTIONS.INBOX__GET_NEW__REQUEST).pipe(
		switchMap(({ payload: [payload] }) => {

			let inboxId;
			const chatType = parseChatTypeFromString(payload.inboxId);

			if (chatType === chatFbFolders.SCENARIO_CHAT) {
				inboxId = parseInboxIdFromScenarioPath(payload.inboxId);
			} else {
				inboxId = payload._id;
			}
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			if (!accessToken) return EMPTY;
			return forkJoin(of(payload), fetchInbox(accessToken, companyId, inboxId), of(chatType));
		}),
		switchMap(([payload, res]) => {
			if (res.error) return inboxInfo.getNewInboxError();
			const currentUserId = storeHelpers.getCurrentUserId(store);
			const getNewInboxSuccess = inboxInfo
				.getNewInboxSuccess({ ...res, currentUserId, messages: payload.messages });
			return of(getNewInboxSuccess);
		}),
		withLatestFrom(action$.ofType(ACTIONS.INBOX__MESSAGES__SET)),
		map(([getNewInboxSuccessData, onMessagesReceivedData]) => {
			try {
				const newInboxId = getNewInboxSuccessData.payload._id;
				const messagesRecievedInboxId = onMessagesReceivedData.payload[0].inboxId;
				const chatType = parseChatTypeFromString(messagesRecievedInboxId);
				if (chatType === chatFbFolders.SCENARIO_CHAT) {
					const inboxId = parseInboxIdfromString(messagesRecievedInboxId);
					if (newInboxId === inboxId) {
						return {
							...getNewInboxSuccessData,
							payload: {
								...getNewInboxSuccessData.payload,
								messages: [...onMessagesReceivedData.payload[0].messages],
							},
						};
					}
				}
				return getNewInboxSuccessData;
			} catch (e) {
				return getNewInboxSuccessData;
			}
		})
	);
};

export const getInboxListEpic = (action$, store) => {
	return action$.ofType(ACTIONS.INBOX__GET_LIST__REQUEST).pipe(
		switchMap(() => {
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			if (!accessToken) return EMPTY;

			return getInboxListFetch(accessToken, companyId);
		}),
		map((inboxes) => {
			const currentUserId = storeHelpers.getCurrentUserId(store);
			const inboxList = inboxes.map((inbox) => ({ currentUserId, ...inbox }));
			const mpChatPaths = inboxList
				.filter(({ chatId = '' }) => chatId.includes(chatFbFolders.GROUP_CHAT))
				.map(({ chatId }) => chatId);

			// Subscribe for group chats messages
			mpChatPaths.forEach((path) => {
				chatsSubscriptionsService.subscribe(path);
			});
			return createInboxInfoAction(inboxList);
		}),
	);
};

export const getActiveInboxEpic = (action$, store) => {
	return action$.ofType(ACTIONS.INBOX__GET__REQUEST).pipe(
		switchMap((action) => {
			const { payload: { inboxId, chatType } } = action;
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			if (!accessToken) return EMPTY;

			return chatType === chatSubType.GROUP_CHAT
				?	chatApi.getOne(companyId, inboxId)
				:	fetchInbox(accessToken, companyId, inboxId);
		}),
		switchMap((res) => {
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			const currentUserId = storeHelpers.getCurrentUserId(store);
			const coachId = res._coach && res._coach._id;
			const amICoach = currentUserId === coachId;
			const inbox$ = of(res);
			const scenarios$ = amICoach
				? fromPromise(getScenarioListFetch(accessToken, companyId))
				: of(null);

			return combineLatest(inbox$, scenarios$);
		}),
		switchMap(([inbox, scenarios]) => {
			if (inbox.error) {
				return forkJoin(
					of(inbox),
					of(null),
				);
			} else {
				let activeInbox = inbox;
				if (scenarios) {
					const scenarioId = inbox._scenario._id;
					const relatedScenario = getScenarioById(scenarios, scenarioId);
					const messages = (store.value.inboxInfo.inboxList
						.find((inboxItem) => activeInbox._id === inboxItem._inbox
							? inboxItem._inbox._id
							: inboxItem._id) || {})
						.messages || [];

					activeInbox = {
						...inbox,
						relatedScenario,
						messages,
					};
				}
				let path = inbox.inboxId;
				if (inbox._scenario && inbox._inbox) {
					path = inbox._inbox.inboxId;
				}

				if (inbox.chatId) {
					path = inbox.chatId;
				}

				return forkJoin(
					of(activeInbox),
					fromPromise(dbRef.ref(path).once(EVENTS.value))
						.pipe(catchError((error) => of({ error })))
				);

			}
		}),
		switchMap(([inbox, messagesSnapshot]) => {
			if (inbox.error) return of(inboxInfo.getInboxError(inbox));
			if (messagesSnapshot.error) return of(inboxInfo.getInboxSuccess(), inboxInfo.setActiveInbox(inbox));
			const messages = messageMapper.mapMessagesSnapshot(
				isGroupChat(inbox) ? messagesSnapshot.val().messages : messagesSnapshot.val()
			);
			inbox.messages = messages;
			return of(inboxInfo.getInboxSuccess(), inboxInfo.setActiveInbox(inbox));
		})
	);
};

function getLastMessageId (messages) {
	const lastMessage = getLastElementInArray(messages);

	return lastMessage ? lastMessage.messageId : null;
}

export const setActiveInboxEpic = (action$) => {
	return action$.ofType(ACTIONS.INBOX__ACTIVE__SET).pipe(
		map((action) => {
			const { payload } = action;

			const lastReadMessage = getLastMessageId(payload.messages || []);
			const chatType = isGroupChat(payload) ? chatSubType.GROUP_CHAT : chatSubType.CHAT;

			return inboxInfo.updateLastRead({ lastReadMessage, chatType });
		}),
	);
};

export const sendMessageEpic = (action$, store) => {
	return action$.ofType(ACTIONS.INBOX__SEND_MESSAGE__REQUEST).pipe(
		switchMap((action) => {
			const { payload: { chatType, content, type } } = action;
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			const inboxId = storeHelpers.getInboxId(store);
			if (!accessToken) return EMPTY;
			const inboxScenarioId = storeHelpers.getInboxScenarioId(store);

			if (chatType === chatSubType.GROUP_CHAT) {
				return forkJoin(
					chatApi.sendMessage({	companyId, chatId: inboxId, message: getMessageBody(content, type) }),
					of(false)
				);
			}

			if (inboxScenarioId) {
				const activeInboxId = storeHelpers.getActiveInboxId(store);
				return forkJoin(sendScenarioMessage(
					accessToken,
					companyId,
					inboxScenarioId,
					activeInboxId,
					inboxId,
					content,
					type
				), of(true));
			} else {
				return forkJoin(
					sendMessage(accessToken, companyId, inboxId, content, type),
					of(false),
				);
			}
		}),
		switchMap(([res, isScenarioChat]) => {
			const actions = res.ok
				? [inboxInfo.sendMessageSuccess()]
				: [
					inboxInfo.sendMessageError(res),
					inboxInfo.getInboxList({ refetch: true }),
				];
			if (isScenarioChat && !res.ok) {
				actions.push(scenarioInfo.getScenarioList());
			}

			return of(...actions);
		})
	);
};

export const deleteMessageEpic = (action$, store) => {
	return action$.ofType(ACTIONS.INBOX__DELETE_MESSAGE__REQUEST).pipe(
		switchMap((action) => {
			const { messageId, chatType } = action.payload;
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			const inboxId = storeHelpers.getInboxId(store);

			if (!accessToken) return EMPTY;

			if (chatType === chatSubType.GROUP_CHAT) {
				return chatApi.deleteMessage({ companyId, chatId: inboxId, messageId });
			}

			return deleteMessage({ accessToken, companyId, inboxId, messageId });
		}),
		switchMap((res, messageId) => {
			const action = res.error
				? inboxInfo.deleteMessageError(res)
				: inboxInfo.deleteMessageSuccess(res, messageId);
			return of(action, inboxInfo.getInboxList({ refetch: true }));
		})
	);
};

export const deleteChatEpic = (action$, store) => {
	return action$.ofType(ACTIONS.INBOX__DELETE_CHAT_REQUEST).pipe(
		switchMap((action) => {
			const { chatType } = action.payload;
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			const inboxId = storeHelpers.getInboxId(store);

			if (!accessToken) return EMPTY;

			const deleteCall = chatType === chatSubType.GROUP_CHAT
				? chatApi.deleteOne({ companyId, chatId: inboxId })
				: deleteChat({ accessToken, companyId, inboxId });

			return forkJoin(of(inboxId), deleteCall);
		}),
		switchMap(([inboxId, res]) => {
			const action = res.error
				? inboxInfo.deleteChatError(res)
				: inboxInfo.deleteChatSuccess(inboxId);
			return of(action);
		})
	);
};

export const setMessageEpic = (action$, store) => {
	return action$.ofType(ACTIONS.INBOX__MESSAGES__SET).pipe(
		switchMap(({ payload }) => {
			const inboxId = storeHelpers.getActiveInboxId(store);
			const groupedMediaMessages = messageMapper.mapAndGroupNewMediaMessages(payload, store);

			// check by firebase path includes inboxId due to path complicated structure
			const activeInboxPayload = payload.find((inbox) => inbox.inboxId.includes(inboxId));

			if (activeInboxPayload) {
				const lastMessage = activeInboxPayload.messages[activeInboxPayload.messages.length - 1];
				const updateBody = { lastReadMessage: lastMessage.messageId, chatType: chatSubType.CHAT };

				if (activeInboxPayload.inboxId.includes(chatFbFolders.GROUP_CHAT)) {
					updateBody.chatType = chatSubType.GROUP_CHAT;
				}

				return of([groupedMediaMessages, updateBody]);
			}

			return of([groupedMediaMessages, null]);
		}),
		switchMap(([{ myVideoMessages, myImageMessages, myAudioMessages }, updateActionPayload]) => {
			const mediaActions = [
				videosInfo.addVideos(myVideoMessages),
				imagesInfo.addImages(myImageMessages),
				mediaInfo.addMedia(myAudioMessages),
			];

			if (updateActionPayload) {
				return of(...mediaActions,	inboxInfo.updateLastRead(updateActionPayload));
			}

			return of(...mediaActions);
		}),
	);
};

export const saveBestPracticeVideoEpic = (action$, state$) => action$.pipe(
	ofType(ACTIONS.INBOX__SAVE_BEST_PRACTICE_VIDEO__REQUEST),
	switchMap(({ payload }) => {
		const accessToken = storeHelpers.getAccessToken(state$);
		const companyId = storeHelpers.getCompanyId(state$);
		const { name, videoId, duration, inboxId: _practice } = payload;
		const body = {	name,	videoId,	duration,	_practice	};
		return saveAsBestPracticeVideoFetch(accessToken, companyId, payload.scenarioId, body);
	}),
	switchMap((res) => {
		if (res.error) {
			return of(
				inboxInfo.saveBestPracticeVideoError({ error: true }),
				inboxInfo.saveBestPracticeVideoError({ error: false }), // Reset error state
			);
		}
		return of(scenarioInfo.editScenarioSuccess(res));
	}),
);

export const updateChatDataEpic = (action$, state$) => {
	return action$.ofType(ACTIONS.INBOX__UPDATE_CHAT_DATA).pipe(
		switchMap(({ payload }) => {
			const companyId = storeHelpers.getCompanyId(state$);
			const chatId = storeHelpers.getActiveInboxId(state$);

			return chatApi.updateOne({ companyId, chatId, body: payload });
		}),
		map((res) => {
			return res.error
				? inboxInfo.updateInboxError()
				: inboxInfo.updateChatDataSuccess(res);
		})
	);
};

export const updateLastReadEpic = (action$, state$) => {
	return action$.ofType(ACTIONS.INBOX__UPDATE_LAST_READ).pipe(
		switchMap(({ payload }) => {
			const accessToken = storeHelpers.getAccessToken(state$);
			const companyId = storeHelpers.getCompanyId(state$);
			const activeInbox = storeHelpers.getActiveInbox(state$);
			const chatId = activeInbox._inbox ? activeInbox._inbox._id : activeInbox._id;

			const updatedInboxProps = {
				status: inboxStatuses.READ,
				lastReadMessage: payload.lastReadMessage,
			};

			if (payload.chatType === chatSubType.GROUP_CHAT) {
				return chatApi.updateOne({ companyId, chatId, body: updatedInboxProps });
			}

			return updateInbox(accessToken, companyId, chatId, updatedInboxProps);
		}),
		map((res) => {
			return res.error
				? inboxInfo.updateInboxError(res)
				: inboxInfo.updateInboxSuccess(res);
		}),
	);
};

function isGroupChat (inbox) {
	return !!inbox._moderator;
}
