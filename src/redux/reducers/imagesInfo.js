import ACTIONS from '../actionTypes';

const mapImageData = (data) => ({
	id: data.imageId,
	url: data.dashList,
	fallBackUrl: data.playList,
	thumbnailUrl: data.thumb,
	state: data.state,
});

const imagesInfo = (state = {}, {
	type,
	payload,
}) => {
	switch (type) {
		/* eslint-disable no-case-declarations */
		case ACTIONS.IMAGES__ADD_AVATAR_IMAGE:
			const { avatarId, avatar_lg, avatar_md, avatar_sm } = payload;

			if (!avatarId) return state;

			return {
				...state,
				[avatarId]: {
					avatar_lg,
					avatar_md,
					avatar_sm,
					state: null,
				},
			};
		case ACTIONS.IMAGES__ADD_IMAGES:
			const nextState = { ...state };
			payload.forEach((image) => {
				if (image.imageId) {
					nextState[image.imageId] = mapImageData(image);
				}
			});
			return nextState;
		case ACTIONS.IMAGES__UPDATE_IMAGE:
			const { imageId } = payload;
			return {
				...state,
				[imageId]: {
					...state[imageId],
					state: payload.state,
				},
			};

		case ACTIONS.USER__SIGN_OUT:
			return {};
		default:
			return state;
	}
};

imagesInfo.addImages = (payload) => ({
	type: ACTIONS.IMAGES__ADD_IMAGES,
	payload,
});

imagesInfo.addAvatarImage = (payload) => ({
	type: ACTIONS.IMAGES__ADD_AVATAR_IMAGE,
	payload,
});

imagesInfo.updateImage = (payload) => ({
	type: ACTIONS.IMAGES__UPDATE_IMAGE,
	payload,
});

export default imagesInfo;
