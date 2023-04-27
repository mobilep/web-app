import ACTIONS from '../actionTypes';

const userInfo = (state = {}, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.USER__SIGN_IN__REQUEST:
			return {
				...state,
				fetching: true,
				signInError: false,
			};
		case ACTIONS.USER__SIGN_IN__REQUEST_SUCCESS:
		case ACTIONS.USER__GET_INFO__REQUEST_SUCCESS:
			return {
				...state,
				...payload,
				fetching: false,
				signInError: false,
				signedIn: true,
			};
		case ACTIONS.USER__SIGN_IN__REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				signInError: true,
			};
		case ACTIONS.USER__SIGN_OUT:
			return {
				signedIn: false,
			};
		case ACTIONS.USER__GET_INFO__REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				accessToken: null,
				signedIn: false,
			};
		/* TODO: Remove or uncomment when we will know more about this functionality
		case ACTIONS.USER__DELETE_SELF__REQUEST_SUCCESS:
			return {
				signedIn: false,
			};
		case ACTIONS.USER__DELETE_SELF__REQUEST_ERROR:
			return {
				...state,
			};
		*/
		case ACTIONS.USER__FORGOT_PASSWORD__REQUEST:
		case ACTIONS.USER__CREATE_PASSWORD__REQUEST:
			return {
				...state,
				fetching: true,
			};
		case ACTIONS.USER__RESET_PASSWORD__REQUEST:
			return {
				...state,
				resetPasswordError: false,
				fetching: true,
			};
		case ACTIONS.USER__LOCATION__UPDATE:
			return {
				...state,
				nextUrl: payload.nextUrl,
				fetching: false,
			};
		case ACTIONS.USER__CHANGE_AVATAR_REQUEST:
			return {
				...state,
				fetching: true,
				changeAvatarError: false,
			};
		case ACTIONS.USER__CHANGE_AVATAR_REQUEST_SUCCESS:
			return {
				...state,
				...payload,
				fetching: false,
				changeAvatarError: false,
			};
		case ACTIONS.USER__CHANGE_AVATAR_REQUEST_ERROR:
			return {
				...state,
				fetching: false,
				changeAvatarError: true,
			};
		case ACTIONS.USER__RESET_PASSWORD__REQUEST_SUCCESS:
			return {
				...state,
				resetPasswordError: false,
				fetching: false,
			};
		case ACTIONS.USER__RESET_PASSWORD__REQUEST_ERROR:
			return {
				...state,
				resetPasswordError: true,
				fetching: false,
			};
		default:
			return state;
	}
};

userInfo.signIn = (payload) => ({
	type: ACTIONS.USER__SIGN_IN__REQUEST,
	payload,
});

userInfo.signInSuccess = (payload) => ({
	type: ACTIONS.USER__SIGN_IN__REQUEST_SUCCESS,
	payload,
});

userInfo.signInError = () => ({
	type: ACTIONS.USER__SIGN_IN__REQUEST_ERROR,
});

userInfo.signOut = () => ({
	type: ACTIONS.USER__SIGN_OUT,
});

userInfo.getUserInfo = (payload) => ({
	type: ACTIONS.USER__GET_INFO__REQUEST,
	payload,
});
userInfo.loadUserInfo = (payload) => ({
	type: ACTIONS.USER__LOAD_INFO__REQUEST,
	payload,
});

userInfo.getUserInfoSuccess = (payload) => ({
	type: ACTIONS.USER__GET_INFO__REQUEST_SUCCESS,
	payload,
});

userInfo.getUserInfoError = () => ({
	type: ACTIONS.USER__GET_INFO__REQUEST_ERROR,
});

/*
	userInfo.deleteUser = (payload) => ({
		type: ACTIONS.USER__DELETE_SELF__REQUEST,
		payload,
	});

	userInfo.deleteUserSuccess = () => ({
		type: ACTIONS.USER__DELETE_SELF__REQUEST_SUCCESS,
	});

	userInfo.deleteUserError = () => ({
		type: ACTIONS.USER__DELETE_SELF__REQUEST_ERROR,
	});
*/
userInfo.forgotPassword = (payload) => ({
	type: ACTIONS.USER__FORGOT_PASSWORD__REQUEST,
	payload,
});

userInfo.forgotPasswordSuccess = (payload) => ({
	type: ACTIONS.USER__FORGOT_PASSWORD__REQUEST_SUCCESS,
	payload,
});

userInfo.forgotPasswordError = (payload) => ({
	type: ACTIONS.USER__FORGOT_PASSWORD__REQUEST_ERROR,
	payload,
});

userInfo.resetPassword = (payload) => ({
	type: ACTIONS.USER__RESET_PASSWORD__REQUEST,
	payload,
});

userInfo.resetPasswordSuccess = (payload) => ({
	type: ACTIONS.USER__RESET_PASSWORD__REQUEST_SUCCESS,
	payload,
});

userInfo.resetPasswordError = () => ({
	type: ACTIONS.USER__RESET_PASSWORD__REQUEST_ERROR,
});

userInfo.createPassword = (payload) => ({
	type: ACTIONS.USER__CREATE_PASSWORD__REQUEST,
	payload,
});

userInfo.locationUpdate = (payload) => ({
	type: ACTIONS.USER__LOCATION__UPDATE,
	payload,
});

userInfo.changeAvatar = (payload) => ({
	type: ACTIONS.USER__CHANGE_AVATAR_REQUEST,
	payload,
});

userInfo.changeAvatarSuccess = (payload) => {
	return ({
		type: ACTIONS.USER__CHANGE_AVATAR_REQUEST_SUCCESS,
		payload,
	});
};

userInfo.changeAvatarError = () => ({
	type: ACTIONS.USER__CHANGE_AVATAR_REQUEST_ERROR,
});

export default userInfo;
