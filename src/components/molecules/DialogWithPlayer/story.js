import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { VideoTile } from '../../atoms';
import DialogWithPlayer from './DialogWithPlayer';

class _DialogWithPlayer extends Component {

	static propTypes = {
		streamUrl: PropTypes.string,
		thumbnailUrl: PropTypes.string,
	}

	static defaultProps = {}

	handleVideoTileClick = () =>
		this.setState({ streamUrl: 'https://s3-eu-west-1.amazonaws.com/mobilepractice-video/MPEG-DASH/4e0b9b96-2679-446b-827c-11556ca55d11/playlist.mpd' })

	handleDialogClose = () =>
		this.setState({ streamUrl: null })

	render () {
		const { thumbnailUrl } = this.props;
		const { streamUrl } = this.state || {};
		return (
			<div>
				<DialogWithPlayer streamUrl={streamUrl} onClose={this.handleDialogClose} />
				<VideoTile onPlayButtonClick={this.handleVideoTileClick} thumbnailUrl={thumbnailUrl} />
			</div>
		);
	}

}

storiesOf('2. Molecules / DialogWithPlayer', module)
	.add('DialogWithPlayer', () => {
		const thumbnailUrl = 'http://via.placeholder.com/350x150/00423b';
		// eslint-disable-next-line
		return <_DialogWithPlayer {...{ thumbnailUrl }} />;
	});
