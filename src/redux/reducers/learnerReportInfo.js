import '../../typedefs'; // JSDOC TYPES
import ACTIONS from '../actionTypes';

const initialState = {
	coachesList: [],
	filters: {},
	coachesLoaded: false,
	scenarioReportsHash: {},
};

/**
 * @param {{ type: string; payload: any; }} action
 */
const learnerReportInfo = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTIONS.LEARNER__GET_COACHES_SUCCESS:
			return {
				...state,
				coachesList: payload,
				coachesLoaded: true,
			};
		case ACTIONS.LEARNER__GET_COACHES_FAILURE:
			return {
				...state,
				coachesLoaded: true,
			};
		case ACTIONS.LEARNER__GET_OVERALL_REPORT_SUCCESS:
			return {
				...state,
				overallReport: payload,
			};
		case ACTIONS.LEARNER__SET_FILTERS:
			return {
				...state,
				filters: {
					...state.filters,
					...payload,
				},
			};
		case ACTIONS.LEARNER__GET_SCENARIO_REPORT_SUCCESS:
			return {
				...state,
				scenarioReportsHash: {
					...state.scenarioReportsHash,
					[payload.scenarioId]: payload,
				},
			};
		case 	ACTIONS.LEARNER__RESET_REPORT_DATA:
			return { ...initialState };
		default:
			return state;
	}
};

learnerReportInfo.getCoachesList = () => ({
	type: ACTIONS.LEARNER__GET_COACHES_REQUEST,
});

/**
 * @param {PlainUser[]} payload
 */
learnerReportInfo.getCoachesListSuccess = (payload) => ({
	type: ACTIONS.LEARNER__GET_COACHES_SUCCESS,
	payload,
});

learnerReportInfo.getCoachesListFailure = () => ({
	type: ACTIONS.LEARNER__GET_COACHES_FAILURE,
});

learnerReportInfo.getOverallReport = (payload) => ({
	type: ACTIONS.LEARNER__GET_OVERALL_REPORT_REQUEST,
	payload,
});

learnerReportInfo.getOverallReportSuccess = (payload) => ({
	type: ACTIONS.LEARNER__GET_OVERALL_REPORT_SUCCESS,
	payload,
});

learnerReportInfo.getOverallReportFailure = () => ({
	type: ACTIONS.LEARNER__GET_OVERALL_REPORT_FAILURE,
});

learnerReportInfo.getScenarioReport = (payload) => ({
	type: ACTIONS.LEARNER__GET_SCENARIO_REPORT_REQUEST,
	payload,
});

learnerReportInfo.getScenarioReportSuccess = (payload) => ({
	type: ACTIONS.LEARNER__GET_SCENARIO_REPORT_SUCCESS,
	payload,
});

learnerReportInfo.getScenarioReportFailure = () => ({
	type: ACTIONS.LEARNER__GET_SCENARIO_REPORT_FAILURE,
});

learnerReportInfo.setFilters = (payload) => ({
	type: ACTIONS.LEARNER__SET_FILTERS,
	payload,
});

learnerReportInfo.resetData = () => ({
	type: ACTIONS.LEARNER__RESET_REPORT_DATA,
});

export default learnerReportInfo;
