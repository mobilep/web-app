import ACTIONS from '../actionTypes';

const filterDeletedGroups = (item) => {
	return item._users.length > 0;
};

const teamInfo = (state = { teamList: [] }, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.TEAM__CREATE_REQUEST:
			return {
				...state,
				fetching: true,
				createTeamError: false,
				createTeamSuccess: false,
			};
		case ACTIONS.TEAM__CREATE_REQUEST_SUCCESS:
			return {
				...state,
				teamList: [
					{ ...payload },
					...state.teamList,
				],
				fetching: false,
				createTeamError: false,
				createTeamSuccess: true,
			};
		case ACTIONS.TEAM__CREATE_REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				createTeamError: { ...payload },
				createTeamSuccess: false,
			};
		case ACTIONS.TEAM__GET_TEAM_REQUEST:
			return {
				...state,
				fetching: true,
				getTeamError: false,
			};
		case ACTIONS.TEAM__GET_TEAM_REQUEST_SUCCESS:
			return {
				...state,
				fetching: false,
				getTeamError: false,
				teamData: { ...payload },
			};
		case ACTIONS.TEAM__GET_TEAM_REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				getTeamError: true,
			};
		case ACTIONS.TEAM__GET_TEAM_LIST_REQUEST:
			return {
				...state,
				fetching: true,
				getTeamListError: false,
			};
		case ACTIONS.TEAM__GET_TEAM_LIST_REQUEST_SUCCESS:
			return {
				...state,
				fetching: false,
				getTeamListError: false,
				teamList: [...payload.filter(filterDeletedGroups)],
			};
		case ACTIONS.TEAM__GET_TEAM_LIST_REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				getTeamListError: true,
			};
		case ACTIONS.TEAM__DELETE_REQUEST:
			return {
				...state,
				fetching: true,
				deleteTeamError: false,
			};
		case ACTIONS.TEAM__DELETE_REQUEST_SUCCESS:
			return {
				...state,
				fetching: false,
				deleteTeamError: false,
				...payload,
				teamList: [
					...state.teamList.filter((item) => payload._id !== item._id),
				],
			};
		case ACTIONS.TEAM__DELETE_REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				deleteTeamError: true,
			};
		case ACTIONS.TEAM__UPDATE_REQUEST:
			return {
				...state,
				fetching: true,
				updateTeamError: false,
				updateTeamSuccess: false,
			};
		case ACTIONS.TEAM__UPDATE_REQUEST_SUCCESS:
			return {
				...state,
				fetching: false,
				updateTeamError: false,
				updateTeamSuccess: true,
				teamList: [
					...state.teamList.slice(0, state.teamList.findIndex((item) => {
						return item._id === payload._id;
					})),
					{ ...payload },
					...state.teamList.slice(state.teamList.findIndex((item) => {
						return item._id === payload._id;
					}) + 1),
				],
			};
		case ACTIONS.TEAM__UPDATE_REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				updateTeamError: true,
				updateTeamSuccess: false,
			};
		case ACTIONS.USER__SIGN_OUT:
			return {
				teamList: [],
			};
		default:
			return state;
	}
};

teamInfo.createTeam = (payload) => ({
	type: ACTIONS.TEAM__CREATE_REQUEST,
	payload,
});

teamInfo.createTeamSuccess = (payload) => ({
	type: ACTIONS.TEAM__CREATE_REQUEST_SUCCESS,
	payload,
});

teamInfo.createTeamError = (payload) => ({
	type: ACTIONS.TEAM__CREATE_REQUEST_ERROR,
	payload,
});

teamInfo.getTeam = (payload) => ({
	type: ACTIONS.TEAM__GET_TEAM_REQUEST,
	payload,
});

teamInfo.getTeamSuccess = (payload) => ({
	type: ACTIONS.TEAM__GET_TEAM_REQUEST_SUCCESS,
	payload,
});

teamInfo.getTeamError = (payload) => ({
	type: ACTIONS.TEAM__GET_TEAM_REQUEST_ERROR,
	payload,
});

teamInfo.getTeamList = (payload) => ({
	type: ACTIONS.TEAM__GET_TEAM_LIST_REQUEST,
	payload,
});

teamInfo.getTeamListSuccess = (payload) => ({
	type: ACTIONS.TEAM__GET_TEAM_LIST_REQUEST_SUCCESS,
	payload,
});

teamInfo.getTeamListError = (payload) => ({
	type: ACTIONS.TEAM__GET_TEAM_LIST_REQUEST_ERROR,
	payload,
});

teamInfo.deleteTeam = (payload) => ({
	type: ACTIONS.TEAM__DELETE_REQUEST,
	payload,
});

teamInfo.deleteTeamSuccess = (payload) => ({
	type: ACTIONS.TEAM__DELETE_REQUEST_SUCCESS,
	payload,
});

teamInfo.deleteTeamError = (payload) => ({
	type: ACTIONS.TEAM__DELETE_REQUEST_ERROR,
	payload,
});

teamInfo.updateTeam = (payload) => ({
	type: ACTIONS.TEAM__UPDATE_REQUEST,
	payload,
});

teamInfo.updateTeamSuccess = (payload) => ({
	type: ACTIONS.TEAM__UPDATE_REQUEST_SUCCESS,
	payload,
});

teamInfo.updateTeamError = (payload) => ({
	type: ACTIONS.TEAM__UPDATE_REQUEST_ERROR,
	payload,
});

export default teamInfo;
