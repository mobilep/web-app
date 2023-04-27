import { Component } from 'react';
import PropTypes from 'prop-types';
import { withFireBaseContext } from '../../utils';
import constants from '../../constants';
const { common } = constants;
const { S3_ASSETS_URL, mediaLoadingStates: { CHECKING, PROCESSING, COMPLETED } } = common;

class VideoStatesManager extends Component {
	static propTypes = {
		fireBaseDB: PropTypes.object,
		onVideoStateUpdate: PropTypes.func,
		videosInfo: PropTypes.object,
	}
	subscribeToScenariosVideosState (videosInfo = {}) {
		const videosList = Object.keys(videosInfo);
		videosList.forEach((videoId) => {
			if (!videosInfo[videoId].state) {
				this.subscribeToVideoStateById(videoId);
			}
		});
	}

	getThumbnailUrlByVideoId (thumbPath) {
		return `${S3_ASSETS_URL}/${thumbPath}`;
	}

	getDashListByVideoId (playPathDASH) {
		return `${S3_ASSETS_URL}/${playPathDASH}.mpd`;
	}

	getPlaylistByVideoId (playPath) {
		return `${S3_ASSETS_URL}/${playPath}.m3u8`;
	}

	subscribeToVideoStateById (videoId) {
		const { fireBaseDB } = this.props;
		this.props.onVideoStateUpdate({ videoId, state: CHECKING });
		fireBaseDB.ref(`videos/${videoId}`).on('value', (snapshot) => {
			if (!snapshot.val()) return;
			const { state, playPathDASH, thumbPathDASH, playPathHLS } = snapshot.val();
			const thumb = this.getThumbnailUrlByVideoId(thumbPathDASH);
			const playList = this.getPlaylistByVideoId(playPathHLS);
			const dashList = this.getDashListByVideoId(playPathDASH);
			this.props.onVideoStateUpdate({ ...snapshot.val(), videoId, state, thumb, playList, dashList });
			if (state === COMPLETED && playPathDASH && playPathHLS) {
				this.props.onVideoStateUpdate({ ...snapshot.val(), videoId, state, thumb, playList, dashList });
				return this.unSubscribeToVideoStateById(videoId);
			} else {
				this.props.onVideoStateUpdate({ videoId, state: PROCESSING });
			}
		});
	}

	unSubscribeToVideoStateById (videoId) {
		const { fireBaseDB } = this.props;
		fireBaseDB.ref(`videos/${videoId}`).off();
	}

	componentWillUnmount () {
		const { videosInfo } = this.props;
		const videosList = Object.keys(videosInfo);
		videosList.forEach((videoId) => this.unSubscribeToVideoStateById(videoId));
	}

	componentDidMount () {
		const { videosInfo } = this.props;
		this.subscribeToScenariosVideosState(videosInfo);
	}

	componentDidUpdate ({ videosInfo }) {
		if (videosInfo !== this.props.videosInfo) {
			this.subscribeToScenariosVideosState(this.props.videosInfo);
		}
	}

	render () {
		return null;
	}
}

export default withFireBaseContext(VideoStatesManager);
