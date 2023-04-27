import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import VideoTile from '../../atoms/VideoTile';
import Button from '../../atoms/Button';
import AddBestPracticeButton from '../../molecules/AddBestPracticeButton';
import DeleteBestPracticeButton from '../../molecules/DeleteBestPracticeButton';
import { SwitchIcon } from '../../../icons';
import { TILE_TYPES } from '../../atoms/VideoTile/constants';
import constants from '../../../constants';
import { LanguageContext } from '../../../utils';
import { WithUploadRecordVideo } from '../../../HOC';
import './styles.css';
import { VideoTileCardWrapper } from '../../atoms';
const { common } = constants;
const { mediaLoadingStates: { COMPLETED } } = common;

const AddBestPractice = WithUploadRecordVideo && WithUploadRecordVideo((props) => <AddBestPracticeButton {...props} />);

export default class BestPracticeCard extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		count: PropTypes.number,
		createOrEditMode: PropTypes.bool,
		fallBackVideoUrl: PropTypes.string,
		header: PropTypes.string,
		index: PropTypes.number,
		onLeftArrowClick: PropTypes.func,
		onRightArrowClick: PropTypes.func,
		onVideoAdd: PropTypes.func,
		onVideoRemove: PropTypes.func,
		thumbnailUrl: PropTypes.string,
		videoDuration: PropTypes.number,
		videoId: PropTypes.string,
		videoState: PropTypes.string,
		videoUrl: PropTypes.string,
	}

	handleLeftClick = () => {
		this.props.onLeftArrowClick();
	}

	handleRightClick = () => {
		this.props.onRightArrowClick();
	}

	handleVideoRemove = () => {
		const { onVideoRemove, videoId } = this.props;
		onVideoRemove(videoId);
	}

	getVideoTileType () {
		const { videoState, videoId, createOrEditMode, count } = this.props;
		if (videoId && videoState !== COMPLETED) {
			return TILE_TYPES.UPLOADING;
		} else if (createOrEditMode && count === 0) {
			return TILE_TYPES.ADD;
		} else {
			return TILE_TYPES.DEFAULT;
		}
	}

	shouldRenderControls ({ createOrEditMode, count } = this.props) {
		return createOrEditMode ? !!count : false;
	}

	render () {
		const {
			count,
			fallBackVideoUrl,
			header,
			index,
			onVideoAdd,
			thumbnailUrl,
			videoUrl,
			videoDuration,
		} = this.props;
		const { scenarios } = this.context;

		const type = this.getVideoTileType();
		const showPagination = count > 1;
		const videoDialogProps = {
			withDescription: true,
			errorText: scenarios.bestPracticeError,
			placeholder: scenarios.bestPracticePlaceholder,
		};

		return (
			<Fragment>
				<div className='BestPracticCard'>
					<div className='BestPracticeCard-image'>
						{type === TILE_TYPES.ADD
							?	<AddBestPractice
								{...videoDialogProps}
								label={scenarios.addBestPracticeExample}
								onSend={onVideoAdd}
								fileType='video'
							/>
							:	<VideoTileCardWrapper description={header} duration={videoDuration}>
								<VideoTile
									uploadVideoDialogProps={ videoDialogProps }
									onVideoSend={onVideoAdd}
									thumbnailUrl={thumbnailUrl}
									videoUrl={videoUrl}
									fallBackVideoUrl={fallBackVideoUrl}
									descriptionText='TRY DESCRIPTION'
									type={type} />
							</VideoTileCardWrapper>
						}
						{showPagination &&
							(<div className='BestPracticeCard-switcher'>
								<Button
									className='BestPracticeCard-button BestPracticeCard-button-left'
									onClick={this.handleLeftClick}>
									<SwitchIcon />
								</Button>
								<div className='BestPracticeCard-range'>
									{index} {scenarios.bestPracticeCountSeparator} {count}
								</div>
								<Button className='BestPracticeCard-button BestPracticeCard-button-right'
									onClick={this.handleRightClick}>
									<SwitchIcon />
								</Button>
							</div>)
						}
					</div>
				</div>
				{
					this.shouldRenderControls() &&
						(<div className='BestPracticeCard-controls'>
							<AddBestPractice
								{...videoDialogProps}
								label={scenarios.addBestPractice}
								onSend={onVideoAdd}
								fileType='video'
							/>
							<DeleteBestPracticeButton onClick={this.handleVideoRemove} />
						</div>)
				}
			</Fragment>
		);
	}

}
