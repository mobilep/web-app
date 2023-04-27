import ACTIONS from '../actionTypes';

const mapVideoData = (data) => ({
	id: data.videoId,
	url: data.dashList,
	fallBackUrl: data.playList,
	thumbnailUrl: data.thumb,
	state: data.state,
});

const videosInfo = (state = {}, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.VIDEOS__ADD_VIDEOS:
			if (Array.isArray(payload)) {
				const nextState = { ...state };
				payload.forEach((video) => {
					if (video.videoId) {
						nextState[video.videoId] = mapVideoData(video);
					}
				});
				return nextState;
			} else {
				if (payload.videoId) {
					return {
						...state,
						[payload.videoId]: mapVideoData(payload),
					};
				}
				return state;
			}
			/* eslint-disable no-case-declarations */
		case ACTIONS.VIDEOS__UPDATE_VIDEO:
			const nextState = { ...state };

			nextState[payload.videoId] = {
				...mapVideoData(payload),
			};
			return nextState;
		case ACTIONS.USER__SIGN_OUT:
			return {};
		default:
			return state;
	}
};

videosInfo.addVideos = (payload) => ({
	type: ACTIONS.VIDEOS__ADD_VIDEOS,
	payload,
});

videosInfo.updateVideo = (payload) => ({
	type: ACTIONS.VIDEOS__UPDATE_VIDEO,
	payload,
});

export default videosInfo;
