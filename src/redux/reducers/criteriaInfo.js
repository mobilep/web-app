import ACTIONS from '../actionTypes';

const criteriaInfo = (state = {}, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.CRITERIA__GET_LIST__REQUEST:
			return {
				...state,
				fetching: true,
				criteriaListError: false,
			};
		case ACTIONS.CRITERIA__GET_LIST__REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				criteriaListError: true,
			};
		case ACTIONS.CRITERIA__GET_LIST__REQUEST_SUCCESS:
			return {
				...state,
				fetching: false,
				criteriaListError: false,
				criteriaList: [...payload],
			};
		case ACTIONS.CRITERIA_CREATE_ITEM:
			return {
				...state,
				criteriaList: [...state.criteriaList, payload],
			};
		case ACTIONS.USER__SIGN_OUT:
			return {};
		default:
			return state;
	}
};

criteriaInfo.CreateCriteriaItem = (payload) => ({
	type: ACTIONS.CRITERIA_CREATE_ITEM,
	payload,
});
criteriaInfo.getCriteriaList = () => ({
	type: ACTIONS.CRITERIA__GET_LIST__REQUEST,
});

criteriaInfo.getCriteriaListSuccess = (payload) => ({
	type: ACTIONS.CRITERIA__GET_LIST__REQUEST_SUCCESS,
	payload,
});

export default criteriaInfo;
