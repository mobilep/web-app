import ACTIONS from '../actionTypes';

const appInfo = (state = {}, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.APP__LOAD_STATE__UPDATE:
			return {
				...state,
				loading: payload.loading,
			};
		case ACTIONS.APP__VIDEO_DIALOG_OPEN__UPDATE:
			return {
				...state,
				videoPlaying: payload.playing,
			};
		default:
			return state;
	}
};
appInfo.updateLoadState = (loading) => ({
	type: ACTIONS.APP__LOAD_STATE__UPDATE,
	payload: {
		loading,
	},
});

appInfo.updateVideoPlayState = (playing) => ({
	type: ACTIONS.APP__VIDEO_DIALOG_OPEN__UPDATE,
	payload: {
		playing,
	},
});
export default appInfo;
