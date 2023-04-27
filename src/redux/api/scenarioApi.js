import constants from '../../constants';
import { storeHelpers } from '../../helpers';
import { httpApi } from '../../utils';

const { api4 } = constants.common;

const sendReminder = ({ companyId, scenarioId, message }) => {
	const headers = storeHelpers.getAuthHeaders();

	return httpApi
		.post(
			`${api4}/company/${companyId}/scenario/${scenarioId}/reminder`,
			message,
			headers,
		);
};

const updateReminderState = ({ companyId, scenarioId, reminderIsVisible }) => {
	const headers = storeHelpers.getAuthHeaders();

	return httpApi
		.patch(
			`${api4}/company/${companyId}/scenario/${scenarioId}/reminder`,
			{ reminderIsVisible },
			headers,
		);
};

const getOne = ({ companyId, scenarioId }) => {
	const headers = storeHelpers.getAuthHeaders();

	return httpApi.get(`${api4}/company/${companyId}/scenario/${scenarioId}`, headers);
};

export const scenarioApi = {
	sendReminder,
	updateReminderState,
	getOne,
};
