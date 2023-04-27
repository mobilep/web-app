import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import {
	ProgressBar,
	VideoTile,
	BeforeSendPreview,
	AudioPlayer,
	FileIcon,
} from '../../atoms';
import { mediaPreviewTypes } from '../../../constants/common';

export default class MessageBoxMediaPreview extends Component {

	static propTypes = {
		media: PropTypes.object,
		onMediaPreviewDelete: PropTypes.func,
		uploadProgress: PropTypes.number,
	}

	getProgressBar () {
		if (!this.props.uploadProgress) return null;

		return (<div className='MessageBoxMediaPreview-uploadProgress'>
			<ProgressBar value={this.props.uploadProgress} />
		</div>);
	}

	getMediaPreview () {
		const { media } = this.props;

		switch (media.type) {
			case mediaPreviewTypes.AUDIO:
				return this.getAudioPreview();
			case mediaPreviewTypes.IMAGE:
				return this.getImgPreview();
			case mediaPreviewTypes.FILE:
				return this.getFilePreview();
			case mediaPreviewTypes.VIDEO_PASTED:
				return this.getPastedVideoPreview();
			case mediaPreviewTypes.VIDEO:
				return this.getVideoPreview();
			default:
				return null;
		}
	}

	getAudioPreview () {
		const { duration, src } = this.props.media;
		const playerOptions = { duration };

		return (
			<AudioPlayer src={src}	options={playerOptions}	/>
		);
	}

	getPastedVideoPreview () {
		const { src, dashList, playList } = this.props.media;

		return (
			<VideoTile thumbnailUrl={src} videoUrl={dashList} fallBackVideoUrl={playList} />
		);
	}

	getVideoPreview () {
		const { src } = this.props.media;

		return (
			<VideoTile className='MessageBoxMediaPreview-video' videoUrl={src} />
		);
	}

	getFilePreview () {
		const { name } = this.props.media;

		return (
			<div className='MessageBoxMediaPreview-Content'>
				<div className='MessageBoxMediaPreview-imgWrapper'>
					<FileIcon className='MessageBoxMediaPreview-img' fileName={name} />
				</div>
				<div className='MessageBoxMediaPreview-name'>{name}</div>
			</div>
		);
	}

	getImgPreview () {
		const { name, src } = this.props.media;

		return (
			<div className='MessageBoxMediaPreview-Content'>
				<div className='MessageBoxMediaPreview-imgWrapper'>
					<img className='MessageBoxMediaPreview-img' src={src} alt='' />
				</div>
				<div className='MessageBoxMediaPreview-name'>{name}</div>
			</div>
		);
	}

	render () {
		if (!this.props.media) return null;

		return (
			<div className='MessageBoxMediaPreview'>
				{this.getProgressBar()}

				<BeforeSendPreview onDelete={this.props.onMediaPreviewDelete}>
					{this.getMediaPreview()}
				</BeforeSendPreview>
			</div>
		);
	}
}
