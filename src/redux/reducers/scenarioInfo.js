import ACTIONS from '../actionTypes';
import { matchId } from '../../helpers/arrayHelpers';

const editScenarioById = (payload, state) => {
	const { _id: scenarioId } = payload;
	const scenarioList = [...state.scenarioList];
	const indexToEdit = scenarioList.findIndex(matchId(scenarioId));
	scenarioList[indexToEdit] = {
		...scenarioList[indexToEdit],
		...payload,
	};
	return scenarioList;
};

const updateScenarioAfterEvaluation = (scenarioId, state) => {
	return state.scenarioList.map((scenario) => {
		if (scenario._id === scenarioId) {
			scenario.practiceStatus.evaluated += 1;
			const allPracticesEvaluated = scenario.practiceStatus.evaluated === scenario.practiceStatus.total;

			if (allPracticesEvaluated && scenario.reminderIsVisible) {
				scenario.reminderIsVisible = false;
			}
		}

		return scenario;
	});
};

const scenarioInfo = (state = { scenarioList: [] }, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.SCENARIO__GET_LIST_REQUEST:
			return {
				...state,
				fetching: true,
				scenarioListError: false,
			};
		case ACTIONS.SCENARIO__GET_LIST_REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				scenarioListError: true,
			};
		case ACTIONS.SCENARIO__GET_LIST_REQUEST_SUCCESS:
			return {
				...state,
				fetching: false,
				scenarioListError: false,
				scenarioList: [...payload],
			};
		case ACTIONS.SCENARIO__GET_REQUEST_SUCCESS:
			return {
				...state,
				scenarioList: editScenarioById(payload, state),
				currentScenarioContentFetching: false,
			};
		case ACTIONS.SCENARIO__GET_INBOX_DATA_REQUEST:
		case ACTIONS.SCENARIO__EDIT_REQUEST:
		case ACTIONS.SCENARIO__CREATE_REQUEST:
		case ACTIONS.SCENARIO__GET_REQUEST:
			return {
				...state,
				currentScenarioContentFetching: true,
			};
		case ACTIONS.SCENARIO__CREATE_REQUEST_SUCCESS:
			return {
				...state,
				scenarioList: [payload, ...state.scenarioList],
				createdScenario: { ...payload },
				currentScenarioContentFetching: false,
			};
		case ACTIONS.SCENARIO__EDIT_REQUEST_SUCCESS:
			return {
				...state,
				scenarioList: editScenarioById(payload, state),
				currentScenarioContentFetching: false,
			};
		case ACTIONS.SCENARIO__DELETE_REQUEST_SUCCESS:
			return {
				...state,
				scenarioList: state.scenarioList.filter(({ _id }) => _id !== payload),
			};
		case ACTIONS.SCENARIO__GET_INBOX_DATA_REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				getInboxDataError: true,
			};
		case ACTIONS.SCENARIO__GET_INBOX_DATA_REQUEST_SUCCESS:
			return {
				...state,
				inboxData: [...[...payload].sort((prevItem, item) => {
					return new Date(item._inbox.updatedAt).getTime() -
						new Date(prevItem._inbox.updatedAt).getTime();
				})],
				currentScenarioContentFetching: false,
			};
		case ACTIONS.SCENARIO__EVALUATE_REQUEST_SUCCESS:
			return {
				...state,
				scenarioList: updateScenarioAfterEvaluation(payload._scenario._id, state),
				evaluatedInbox: { ...payload },
			};
		case ACTIONS.SCENARIO__SEND_REMINDER_REQUEST_SUCCESS:
			return {
				...state,
				scenarioList: editScenarioById(payload, state),
				reminderSentScenarioId: payload._id,
			};
		case ACTIONS.SCENARIO__REMINDER_SENT_RESET:
			return {
				...state,
				reminderSentScenarioId: null,
			};
		case ACTIONS.SCENARIO__REMINDER_UPDATE_REQUEST_SUCCESS:
			return {
				...state,
				scenarioList: editScenarioById(payload, state),
			};
		case ACTIONS.USER__SIGN_OUT:
			return {
				scenarioList: [],
			};
		default:
			return state;
	}
};

scenarioInfo.getScenarioList = (payload) => ({
	type: ACTIONS.SCENARIO__GET_LIST_REQUEST,
	payload,
});

scenarioInfo.getScenarioListSuccess = (payload) => ({
	type: ACTIONS.SCENARIO__GET_LIST_REQUEST_SUCCESS,
	payload,
});

scenarioInfo.getScenarioListError = (payload) => ({
	type: ACTIONS.SCENARIO__GET_LIST_REQUEST_ERROR,
	payload,
});

scenarioInfo.getScenario = (payload) => ({
	type: ACTIONS.SCENARIO__GET_REQUEST,
	payload,
});

scenarioInfo.getScenarioSuccess = (payload) => ({
	type: ACTIONS.SCENARIO__GET_REQUEST_SUCCESS,
	payload,
});

scenarioInfo.getScenarioError = (payload) => ({
	type: ACTIONS.SCENARIO__GET_REQUEST_ERROR,
	payload,
});

scenarioInfo.deleteScenario = (payload) => ({
	type: ACTIONS.SCENARIO__DELETE_REQUEST,
	payload,
});

scenarioInfo.deleteScenariotSuccess = (payload) => ({
	type: ACTIONS.SCENARIO__DELETE_REQUEST_SUCCESS,
	payload,
});

scenarioInfo.deleteScenarioError = () => ({
	type: ACTIONS.SCENARIO__DELETE_REQUEST_ERROR,
});

scenarioInfo.createScenario = (payload) => ({
	type: ACTIONS.SCENARIO__CREATE_REQUEST,
	payload,
});

scenarioInfo.createScenarioSuccess = (payload) => ({
	type: ACTIONS.SCENARIO__CREATE_REQUEST_SUCCESS,
	payload,
});

scenarioInfo.createScenarioError = () => ({
	type: ACTIONS.SCENARIO__CREATE_REQUEST_ERROR,
});

scenarioInfo.editScenario = (payload) => ({
	type: ACTIONS.SCENARIO__EDIT_REQUEST,
	payload,
});

scenarioInfo.editScenarioSuccess = (payload) => ({
	type: ACTIONS.SCENARIO__EDIT_REQUEST_SUCCESS,
	payload,
});

scenarioInfo.editScenarioError = () => ({
	type: ACTIONS.SCENARIO__EDIT_REQUEST_ERROR,
});

scenarioInfo.evaluateScenario = (payload) => ({
	type: ACTIONS.SCENARIO__EVALUATE_REQUEST,
	payload,
});

scenarioInfo.evaluateScenarioSuccess = (payload) => ({
	type: ACTIONS.SCENARIO__EVALUATE_REQUEST_SUCCESS,
	payload,
});

scenarioInfo.evaluateScenarioError = (payload) => ({
	type: ACTIONS.SCENARIO__EVALUATE_REQUEST_ERROR,
	payload,
});

scenarioInfo.getInboxData = (payload) => ({
	type: ACTIONS.SCENARIO__GET_INBOX_DATA_REQUEST,
	payload,
});

scenarioInfo.getInboxDataSuccess = (payload) => ({
	type: ACTIONS.SCENARIO__GET_INBOX_DATA_REQUEST_SUCCESS,
	payload,
});

scenarioInfo.getInboxDataError = () => ({
	type: ACTIONS.SCENARIO__GET_INBOX_DATA_REQUEST_ERROR,
});

scenarioInfo.sendReminder = (payload) => ({
	type: ACTIONS.SCENARIO__SEND_REMINDER_REQUEST,
	payload,
});

scenarioInfo.sendReminderSuccess = (payload) => ({
	type: ACTIONS.SCENARIO__SEND_REMINDER_REQUEST_SUCCESS,
	payload,
});

scenarioInfo.sendReminderError = () => ({
	type: ACTIONS.SCENARIO__SEND_REMINDER_REQUEST_ERROR,
});

scenarioInfo.resetSentReminder = () => ({
	type: ACTIONS.SCENARIO__REMINDER_SENT_RESET,
});

scenarioInfo.updateReminder = (payload) => ({
	type: ACTIONS.SCENARIO__REMINDER_UPDATE_REQUEST,
	payload,
});

scenarioInfo.updateReminderError = () => ({
	type: ACTIONS.SCENARIO__REMINDER_UPDATE_REQUEST_ERROR,
});

scenarioInfo.updateReminderSuccess = (payload) => ({
	type: ACTIONS.SCENARIO__REMINDER_UPDATE_REQUEST_SUCCESS,
	payload,
});

export default scenarioInfo;
