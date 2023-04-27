import constants from '../../constants';
import { storeHelpers } from '../../helpers';
import { httpApi } from '../../utils';

const { api4 } = constants.common;

const getList = async (companyId) => {
	const headers = storeHelpers.getAuthHeaders();

	const res = await httpApi.get(`${api4}/company/${companyId}/chat`, headers);
	return await res.json();
};

const getOne = async (companyId, chatId) => {
	const headers = storeHelpers.getAuthHeaders();

	const res = await httpApi.get(`${api4}/company/${companyId}/chat/${chatId}`, headers);
	return await res.json();
};

const create = async ({ companyId, recipients, title }) => {
	const headers = storeHelpers.getAuthHeaders();

	const res = await httpApi.post(`${api4}/company/${companyId}/chat`, { recipients, title }, headers);
	return await res.json();
};

const updateOne = async ({ companyId, chatId, body }) => {
	const headers = storeHelpers.getAuthHeaders();

	const res = await httpApi.patch(`${api4}/company/${companyId}/chat/${chatId}`, body, headers);
	return await res.json();
};

const deleteOne = ({ companyId, chatId }) => {
	const headers = storeHelpers.getAuthHeaders();

	return httpApi.delete(`${api4}/company/${companyId}/chat/${chatId}`, headers);
};

const sendMessage = ({ companyId, chatId, message }) => {
	const headers = storeHelpers.getAuthHeaders();

	return httpApi.post(`${api4}/company/${companyId}/chat/${chatId}`, message, headers);
};

const deleteMessage = ({ companyId, chatId, messageId }) => {
	const headers = storeHelpers.getAuthHeaders();

	return httpApi
		.delete(`${api4}/company/${companyId}/chat/${chatId}/message/${messageId}`, headers)
		.then((res) => ({ res, messageId }));
};

const updateChatMembers = ({ companyId, chatId, users }) => {
	const headers = storeHelpers.getAuthHeaders();

	return httpApi
		.patch(`${api4}/company/${companyId}/chat/${chatId}/user`, { users }, headers)
		.then((res) => res.json());
};

export const chatApi = {
	getList,
	getOne,
	create,
	updateOne,
	deleteOne,
	sendMessage,
	deleteMessage,
	updateChatMembers,
};
