import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { DialogWithPlayer } from '../components/molecules';

const getDisplayName = (comp = {}) =>
	comp.displayName || comp.name || 'Component';

const WithPlayVideo = (WrappedComponent) => {

	class WithPlayVideo extends Component {

		static propTypes = {
			fallBackVideoUrl: PropTypes.string,
			videoUrl: PropTypes.string,
		}

		state = {}

		handleShowDialog = () => {
			const { videoUrl } = this.props;
			this.setState({ videoUrl });
		}

		handleDialogClose = () =>
			this.setState({ videoUrl: null })

		render () {
			const { videoUrl } = this.state;
			const { fallBackVideoUrl } = this.props;
			return (
				<Fragment>
					<DialogWithPlayer
						videoUrl={videoUrl}
						fallBackVideoUrl={fallBackVideoUrl}
						onClose={this.handleDialogClose}
					/>
					<WrappedComponent
						{...this.props}
						onClick={this.handleShowDialog}
					/>
				</Fragment>
			);
		}
	}
	WithPlayVideo.displayName = `WithPlayVideo(${getDisplayName(WrappedComponent)})`;
	return WithPlayVideo;
};

export default WithPlayVideo;
