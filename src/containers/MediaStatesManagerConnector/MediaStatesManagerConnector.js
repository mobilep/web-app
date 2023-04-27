import { connect } from 'react-redux';
import { mediaInfo } from '../../redux/reducers';
import { MediaStatesManager } from '../../renderless-components';

const mapStateToProps = ({ mediaInfo }) => ({
	mediaInfo,
});

const mapDispatchToProps = (dispatch) => ({
	onMediaStateUpdate: (payload) => dispatch(mediaInfo.updateMedia(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaStatesManager);
