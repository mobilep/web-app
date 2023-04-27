import ACTIONS from '../actionTypes';

const userListInfo = (state = {}, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.USER_LIST__GET_INFO_REQUEST:
			return {
				...state,
				fetching: true,
				getInboxUserListError: false,
			};
		case ACTIONS.USER_LIST__GET_INFO_REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				getInboxUserListError: true,
			};
		case ACTIONS.USER_LIST__GET_INFO_REQUEST_SUCCESS:
			return {
				...state,
				companyUserList: [...[...payload].sort((prevItem, item) => {
					if (prevItem.firstName.toLowerCase() > item.firstName.toLowerCase()) {
						return 1;
					}
					if (prevItem.firstName.toLowerCase() < item.firstName.toLowerCase()) {
						return -1;
					}
					return 0;
				})],
				fetching: false,
				getInboxUserListError: false,
			};
		case ACTIONS.USER__SIGN_OUT:
			return {};
		default:
			return state;
	}
};

userListInfo.getCompanyUserList = (payload) => ({
	type: ACTIONS.USER_LIST__GET_INFO_REQUEST,
	payload,
});

userListInfo.getCompanyUserListSuccess = (payload) => ({
	type: ACTIONS.USER_LIST__GET_INFO_REQUEST_SUCCESS,
	payload,
});

userListInfo.getCompanyUserListError = (payload) => ({
	type: ACTIONS.USER_LIST__GET_INFO_REQUEST_ERROR,
	payload,
});

export default userListInfo;
