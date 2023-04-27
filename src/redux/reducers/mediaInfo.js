import ACTIONS from '../actionTypes';

const mapMediaData = (data) => ({
	id: data.id,
	state: data.state,
});

const mediaInfo = (state = {}, {
	type,
	payload,
}) => {
	switch (type) {
		case ACTIONS.MEDIA__ADD_MEDIA:
			if (Array.isArray(payload)) {
				const nextState = { ...state };
				payload.forEach((media) => {
					if (media.id) {
						nextState[media.id] = mapMediaData(media);
					}
				});
				return nextState;
			}
			break;
			/* eslint-disable no-case-declarations */
		case ACTIONS.MEDIA__UPDATE_MEDIA:
			const { id } = payload;
			return {
				...state,
				[id]: {
					...state[id],
					state: payload.state,
				},
			};

		case ACTIONS.USER__SIGN_OUT:
			return {};
		default:
			return state;
	}
};

mediaInfo.addMedia = (payload) => ({
	type: ACTIONS.MEDIA__ADD_MEDIA,
	payload,
});

mediaInfo.updateMedia = (payload) => ({
	type: ACTIONS.MEDIA__UPDATE_MEDIA,
	payload,
});

export default mediaInfo;
