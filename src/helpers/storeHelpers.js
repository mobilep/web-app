import { getJwtToken } from './storageHelpers';

const getCompanyId = (store) => {
	const state = store.value;
	return state.userInfo && state.userInfo._company;
};

const getAuthHeaders = () => {
	return { Authorization: getJwtToken() };
};

const getCurrentUserId = (store) => {
	const state = store.value;
	return state.userInfo && state.userInfo._id;
};

const getAccessToken = (store) => {
	const state = store.value;
	return state.userInfo && state.userInfo.accessToken;
};

const getInboxScenarioId = (store) => {
	const state = store.value;
	return state.inboxInfo.activeInbox._scenario && state.inboxInfo.activeInbox._scenario._id;
};

const getInboxId = (store) => {
	const state = store.value;
	if (state.inboxInfo.activeInbox._inbox) {
		return state.inboxInfo.activeInbox._inbox._id;
	}
	return state.inboxInfo && state.inboxInfo.activeInbox && state.inboxInfo.activeInbox._id;
};

const getActiveInboxId = (store) => {
	const state = store.value;
	return state.inboxInfo && state.inboxInfo.activeInbox && state.inboxInfo.activeInbox._id;
};

const getActiveInbox = (store) => {
	const state = store.value;
	const activeChat = state.inboxInfo && state.inboxInfo.activeInbox;

	return activeChat._inbox || activeChat;
};

export default {
	getCompanyId,
	getAuthHeaders,
	getCurrentUserId,
	getAccessToken,
	getInboxScenarioId,
	getInboxId,
	getActiveInboxId,
	getActiveInbox,
};
