import { appInfo } from '../../../redux/reducers';

export const mapDispatchToProps = (dispatch) => {
	return {
		onVideoDialogOpen: (isOpen) => dispatch(appInfo.updateVideoPlayState(isOpen)),
	};
};
