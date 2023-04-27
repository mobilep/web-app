import { connect } from 'react-redux';
import ImageStatesManager from '../../renderless-components/ImageStatesManager';
import { imagesInfo } from '../../redux/reducers';

const mapStateToProps = ({ imagesInfo }) => ({
	imagesInfo,
});

const mapDispatchToProps = (dispatch) => ({
	onImageStateUpdate: (payload) => dispatch(imagesInfo.updateImage(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageStatesManager);
