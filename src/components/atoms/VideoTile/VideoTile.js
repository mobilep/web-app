import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { WithPlayVideo, WithUploadRecordVideo } from '../../../HOC';
import { Button, Spinner } from '../../atoms';
import { PlayIcon, CirclePlusIcon } from '../../../icons';
import { TILE_TYPES } from './constants';

import './styles.css';

export const VideoTileProps = {
	addText: PropTypes.string,
	authorDetails: PropTypes.object,
	buttonClassName: PropTypes.string,
	canEditVideo: PropTypes.bool,
	className: PropTypes.string,
	fallBackVideoUrl: PropTypes.string,
	onCancelButtonClick: PropTypes.func,
	onPlayButtonClick: PropTypes.func,
	onVideoSend: PropTypes.func,
	plusIcon: PropTypes.bool,
	thumbnailUrl: PropTypes.string,
	type: PropTypes.oneOf([TILE_TYPES.UPLOADING, TILE_TYPES.ADD, TILE_TYPES.DEFAULT]),
	uploadVideoDialogProps: PropTypes.object,
	uploadingProgress: PropTypes.number,
	videoId: PropTypes.string,
	videoUrl: PropTypes.string,
	withAuthorAvatar: PropTypes.bool,
};

// FIXME: This needs a more robust solution.
const MAX_RETRY_ATTEMPTS = 10;
const RETRY_INTERVAL = 2500;

const UploadFileButton = WithUploadRecordVideo((props) => <Button {...props} />);
const PlayVideoButton = WithPlayVideo((props) => <Button {...props} />);

export default class VideoTile extends Component {

	static propTypes = VideoTileProps;

	static defaultProps = {
		plusIcon: true,
		onVideoSend: () => {},
		thumbnailUrl: '',
		type: TILE_TYPES.DEFAULT,
		uploadVideoDialogProps: {},
	};

	static TILE_TYPES = TILE_TYPES;

	state = {
		thumbnailBlobUrl: false,
	}

	componentDidMount () {
		this._isMounted = true;
		this.setImage(this.props.thumbnailUrl);
	}

	componentDidUpdate ({ thumbnailUrl, type }) {
		if (
			this.props.thumbnailUrl !== thumbnailUrl ||
			(type === TILE_TYPES.UPLOADING && type !== this.props.type)
		) {
			clearTimeout(this.thumbnailSetTimer);
			this.setImage(this.props.thumbnailUrl);
		}
	}

	componentWillUnmount () {
		this._isMounted = false;
	}

	getAddVideoTile = ({
		addText,
		buttonClassName,
		onVideoSend,
		uploadVideoDialogProps,
		withAuthorAvatar,
		authorDetails,
		plusIcon,
		canEditVideo,
	}) => (
		<UploadFileButton
			{...uploadVideoDialogProps}
			onSend={onVideoSend}
			disabled={!canEditVideo}
			fileType='video'
			className={`VideoTile-addButton ${buttonClassName}`}
		>
			{withAuthorAvatar && !authorDetails.thumbnail
				? <span className='VideoTile-userInitials'>{authorDetails.initials}</span>
				: plusIcon && <CirclePlusIcon className='VideoTile-addIcon' />}
			{addText ? <span className='VideoTile-addText'>{addText}</span> : null}
		</UploadFileButton>
	);

	getClassName = ({ className }) => (
		classNames('VideoTile', className)
	)

	getContent = (props, state) => {
		// FIXME: This needs a more robust solution. Related to 403 image errors.
		if (props.thumbnailUrl && !state.thumbnailBlobUrl) return this.getUploadingVideoTile(props);

		switch (props.type) {
			case TILE_TYPES.UPLOADING:
				return this.getUploadingVideoTile(props);
			case TILE_TYPES.ADD:
				return this.getAddVideoTile(props);
			case TILE_TYPES.DEFAULT:
			default:
				return this.getDefaultVideoTile(props);
		}
	};

	getDefaultVideoTile = ({ fallBackVideoUrl, videoUrl }) => (
		<PlayVideoButton className='VideoTile-playButton' videoUrl={videoUrl} fallBackVideoUrl={fallBackVideoUrl}>
			<PlayIcon className='VideoTile-playIcon' />
		</PlayVideoButton>
	);

	getUploadingVideoTile = () => (
		<Button className='VideoTile-spinnerButton' >
			<Spinner className='VideoTile-spinnerIcon' />
		</Button>
	);

	// Deals with an issue where AWS S3 returns 403 after an image URL has been returned.
	setImage = async (thumbnailUrl, attempt = 1, { type } = this.props) => {
		if (!thumbnailUrl || attempt > MAX_RETRY_ATTEMPTS || !this._isMounted || type === TILE_TYPES.UPLOADING) return;

		// We don't want to check the cache if we failed on the first attempt.
		const options = attempt > 1 ? { headers: { 'Cache-Control': 'reload' } } : {};

		try {
			const response = await fetch(thumbnailUrl, options);
			if (response.ok) {
				const imageBlob = await response.blob();
				if (this._isMounted) this.setState({ thumbnailBlobUrl: URL.createObjectURL(imageBlob) });
			} else if (response.status === 403) {
				this.thumbnailSetTimer = setTimeout(() => this.setImage(thumbnailUrl, ++attempt), RETRY_INTERVAL);
			} else {
				throw Error(response.statusText);
			}
		} catch (e) {
			// Try to fall back to image URL in case of an error.
			if (this._isMounted) this.setState({ thumbnailBlobUrl: thumbnailUrl });
		}
	}

	getAuthorAvatar ({ authorDetails, type } = this.props) {
		let content = type === TILE_TYPES.ADD
			? this.getAddVideoTile(this.props)
			: <span className='VideoTile-userInitials'>{authorDetails.initials}</span>;

		if (!authorDetails.thumbnail) {
			return (
				<div className='VideoTile-authorDetails' style={{ background: `#${authorDetails.avatarColor}` }}>
					{content}
				</div>
			);
		}
		const style = { backgroundImage: `url(${authorDetails.thumbnail})` };
		content = type === TILE_TYPES.ADD
			? this.getAddVideoTile(this.props)
			: null;
		return (
			<div className='VideoTile-authorDetails' style={style}>
				{content}
			</div>
		);
	}

	render () {
		const { type, withAuthorAvatar } = this.props;
		if (withAuthorAvatar) return this.getAuthorAvatar();
		const { thumbnailBlobUrl } = this.state;

		const isBackgroundImageAvailable = type !== TILE_TYPES.UPLOADING && thumbnailBlobUrl;

		const videoMessageStyle = {
			backgroundImage: isBackgroundImageAvailable ? `url(${thumbnailBlobUrl})` : null,
		};

		return (
			<div
				className={this.getClassName(this.props)}
				style={videoMessageStyle}
			>
				{this.getContent(this.props, this.state)}
			</div>
		);
	}
}
