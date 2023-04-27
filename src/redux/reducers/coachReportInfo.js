import ACTIONS from '../actionTypes';

const initialState = {
	filters: {},
	overAllReport: null,
	userResponsivenessReport: null,
	userScoreReport: null,
	userScenarioReport: null,
};

const coachReportInfo = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case ACTIONS.COACH__GET_OVERALL_REPORT_SUCCESS:
			return {
				...state,
				overAllReport: payload,
			};
		case ACTIONS.COACH__SET_FILTERS: {
			return {
				...state,
				filters: payload,
				overAllReport: null,
				usersScoreReport: null,
				usersResponsivenessReport: null,
				userResponsivenessReport: null,
				userScoreReport: null,
				userScenarioReport: null,
			};
		}
		case ACTIONS.COACH__GET_USERS_SCORE_SUCCESS: {
			return {
				...state,
				usersScoreReport: payload,
			};
		}
		case ACTIONS.COACH__GET_USERS_RESPONSIVENESS_SUCCESS: {
			return {
				...state,
				usersResponsivenessReport: payload,
			};
		}
		case ACTIONS.COACH__GET_USER_RESPONSIVENESS_SUCCESS: {
			return {
				...state,
				userResponsivenessReport: payload,
			};
		}
		case ACTIONS.COACH__GET_USER_SCORE_SUCCESS: {
			return {
				...state,
				userScoreReport: payload,
			};
		}
		case ACTIONS.COACH__GET_USER_SCENARIO_SCORE_SUCCESS: {
			return {
				...state,
				userScenarioReport: payload,
			};
		}
		case ACTIONS.COACH__RESET_REPORT_DATA: {
			return { ...initialState };
		}
		default:
			return state;
	}
};

coachReportInfo.resetData = () => ({
	type: ACTIONS.COACH__RESET_REPORT_DATA,
});

coachReportInfo.setFilters = (payload) => ({
	type: ACTIONS.COACH__SET_FILTERS,
	payload,
});

// GET OVERALL REPORT
coachReportInfo.getOverallReport = () => ({
	type: ACTIONS.COACH__GET_OVERALL_REPORT_REQUEST,
});

coachReportInfo.getOverallReportSuccess = (payload) => ({
	type: ACTIONS.COACH__GET_OVERALL_REPORT_SUCCESS,
	payload,
});

coachReportInfo.getOverallReportFailure = () => ({
	type: ACTIONS.COACH__GET_OVERALL_REPORT_FAILURE,
});

// GET USERS SCORE
coachReportInfo.getUsersScore = () => ({
	type: ACTIONS.COACH__GET_USERS_SCORE_REQUEST,
});

coachReportInfo.getUsersScoreSuccess = (payload) => ({
	type: ACTIONS.COACH__GET_USERS_SCORE_SUCCESS,
	payload,
});

coachReportInfo.getUsersScoreFailure = () => ({
	type: ACTIONS.COACH__GET_USERS_SCORE_FAILURE,
});

// GET USER SCORE
coachReportInfo.getUserScore = (payload) => ({
	type: ACTIONS.COACH__GET_USER_SCORE_REQUEST,
	payload,
});

coachReportInfo.getUserScoreSuccess = (payload) => ({
	type: ACTIONS.COACH__GET_USER_SCORE_SUCCESS,
	payload,
});

coachReportInfo.getUserScoreFailure = () => ({
	type: ACTIONS.COACH__GET_USER_SCORE_FAILURE,
});

// GET USER SCENARIO SCORE
coachReportInfo.getUserScenarioScore = (payload) => ({
	type: ACTIONS.COACH__GET_USER_SCENARIO_SCORE_REQUEST,
	payload,
});

coachReportInfo.getUserScenarioScoreSuccess = (payload) => ({
	type: ACTIONS.COACH__GET_USER_SCENARIO_SCORE_SUCCESS,
	payload,
});

coachReportInfo.getUserScenarioScoreFailure = () => ({
	type: ACTIONS.COACH__GET_USER_SCENARIO_SCORE_FAILURE,
});

// GET USERS RESPONSIVENESS
coachReportInfo.getUsersResponsiveness = () => ({
	type: ACTIONS.COACH__GET_USERS_RESPONSIVENESS_REQUEST,
});

coachReportInfo.getUsersResponsivenessSuccess = (payload) => ({
	type: ACTIONS.COACH__GET_USERS_RESPONSIVENESS_SUCCESS,
	payload,
});

coachReportInfo.getUsersResponsivenessFailure = () => ({
	type: ACTIONS.COACH__GET_USER_RESPONSIVENESS_FAILURE,
});

// GET USER RESPONSIVENESS
coachReportInfo.getUserResponsiveness = (payload) => ({
	type: ACTIONS.COACH__GET_USER_RESPONSIVENESS_REQUEST,
	payload,
});

coachReportInfo.getUserResponsivenessSuccess = (payload) => ({
	type: ACTIONS.COACH__GET_USER_RESPONSIVENESS_SUCCESS,
	payload,
});

coachReportInfo.getUserResponsivenessFailure = () => ({
	type: ACTIONS.COACH__GET_USER_RESPONSIVENESS_FAILURE,
});

export default coachReportInfo;
