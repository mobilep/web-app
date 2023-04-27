import { connect } from 'react-redux';
import { VideoStatesManager } from '../../renderless-components';
import { videosInfo } from '../../redux/reducers';

const mapStateToProps = ({ videosInfo }) => ({
	videosInfo,
});

const mapDispatchToProps = (dispatch) => ({
	onVideoStateUpdate: (payload) => dispatch(videosInfo.updateVideo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoStatesManager);
