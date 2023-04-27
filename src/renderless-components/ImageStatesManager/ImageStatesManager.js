import { Component } from 'react';
import PropTypes from 'prop-types';
import { withFireBaseContext } from '../../utils';
import constants from '../../constants';
const { common } = constants;
const { mediaLoadingStates: { COMPLETED, CHECKING } } = common;

class ImageStatesManager extends Component {
	static propTypes = {
		fireBaseDB: PropTypes.object,
		imagesInfo: PropTypes.object,
		onImageStateUpdate: PropTypes.func,
	}

	componentWillUnmount () {
		const { imagesInfo } = this.props;
		const imagesList = Object.keys(imagesInfo);
		imagesList.forEach((imageId) => this.unSubscribeToImageStateById(imageId));
	}

	componentDidMount () {
		const { imagesInfo } = this.props;
		this.subscribeToImagesState(imagesInfo);
	}
	componentDidUpdate ({ imagesInfo }) {
		try {
			const prevImagesKeys = JSON.stringify(Object.keys(imagesInfo));
			const imagesKeys = JSON.stringify(Object.keys(this.props.imagesInfo));

			if (prevImagesKeys !== imagesKeys) {
				this.subscribeToImagesState(this.props.imagesInfo);
			}
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error);
		}
	}

	subscribeToImagesState (imagesInfo = {}) {
		const imagesList = Object.keys(imagesInfo);
		imagesList.forEach((imageId) => {
			if (!imagesInfo[imageId].state) {
				this.subscribeToImageStateById(imageId);
			}
		});
	}

	subscribeToImageStateById (imageId) {
		const { fireBaseDB } = this.props;

		this.props.onImageStateUpdate({ imageId, state: CHECKING });
		fireBaseDB.ref(`images/${imageId}`).on('value', (snapshot) => {
			const value = snapshot.val();
			if (!value) return;

			if (value.state === COMPLETED) {
				this.props.onImageStateUpdate(value);
				this.unSubscribeToImageStateById(imageId);
			}
		});
	}

	unSubscribeToImageStateById (imageId) {
		const { fireBaseDB } = this.props;
		fireBaseDB.ref(`images/${imageId}`).off();
	}

	render () {
		return null;
	}
}

export default withFireBaseContext(ImageStatesManager);
