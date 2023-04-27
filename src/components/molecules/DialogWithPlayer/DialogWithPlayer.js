import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dialog, PlayerBase } from '../../atoms';

import './styles.css';

export default class DialogWithPlayer extends Component {

	static propTypes = {
		fallBackVideoUrl: PropTypes.string,
		onClose: PropTypes.func,
		onVideoDialogOpen: PropTypes.func,
		videoUrl: PropTypes.string,
	}

	static defaultProps = {
		onClose: () => {},
		onVideoDialogOpen: () => {},
	}

	dialogRef = React.createRef();

	componentDidUpdate (prevProps) {
		const { videoUrl } = this.props;
		if (videoUrl && videoUrl !== prevProps.videoUrl) {
			this.dialogRef.current.showModal();
		}

		this.checkVideoDialogOpen();
	}

	checkVideoDialogOpen () {
		const { onVideoDialogOpen } = this.props;
		if (this.dialogRef.current.open) {
			onVideoDialogOpen(true);
		} else onVideoDialogOpen(false);
	}

	static defaultProps = {}

	render () {
		const { fallBackVideoUrl, videoUrl, onClose } = this.props;
		const shouldRenderPlayer = !!videoUrl;
		return (
			<Dialog className={'DialogWithPlayer'} onClose={onClose} ref={this.dialogRef}>
				<div className='DialogWithPlayer-header'>
					Video player
				</div>
				{ shouldRenderPlayer &&
					<PlayerBase
						className='DialogWithPlayer-playerBase'
						streamUrl={videoUrl}
						fallBackStreamUrl={fallBackVideoUrl}
					/>}
			</Dialog>
		);
	}

}
