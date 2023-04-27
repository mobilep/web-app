import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ScenarioUserCounter, VideoTile } from '../../atoms';
import { ScenarioTextInput, ScenarioMobileHeaderSection } from '..';
import { TILE_TYPES } from '../../atoms/VideoTile/constants';
import constants from '../../../constants';
import './styles.css';
const { common } = constants;
const { mediaLoadingStates } = common;
const { modes: { EDIT_MODE, CREATE_MODE, PRACTICE_MODE } } = common;

class ScenarioHeaderSection extends Component {

	static propTypes = {
		addText: PropTypes.string,
		addVideoText: PropTypes.string,
		authorDetails: PropTypes.object,
		buttonPrimaryText: PropTypes.string,
		buttonSecondaryText: PropTypes.string,
		canEditVideo: PropTypes.bool,
		changeVideoText: PropTypes.string,
		count: PropTypes.number,
		counterText: PropTypes.string,
		createMode: PropTypes.bool,
		description: PropTypes.string,
		descriptionPlaceholder: PropTypes.string,
		draft: PropTypes.bool,
		fallBackVideoUrl: PropTypes.string,
		header: PropTypes.string,
		match: PropTypes.object,
		mode: PropTypes.string,
		namePlaceholder: PropTypes.string,
		onDescriptionChange: PropTypes.func,
		onDraftClick: PropTypes.func,
		onHeaderChange: PropTypes.func,
		onPrimaryClick: PropTypes.func,
		onSecondaryClick: PropTypes.func,
		onVideoChange: PropTypes.func,
		practiceMode: PropTypes.bool,
		saveDraftText: PropTypes.string,
		scenarioType: PropTypes.string,
		showValidationDescriptionError: PropTypes.bool,
		showValidationNameError: PropTypes.bool,
		thumbnailUrl: PropTypes.string,
		updateDate: PropTypes.string,
		validationDescriptionError: PropTypes.string,
		validationNameError: PropTypes.string,
		videoId: PropTypes.string,
		videoState: PropTypes.string,
		videoUrl: PropTypes.string,
	}

	state = {
		VIDEO_TILE_STATUS: TILE_TYPES.ADD,
	}

	handleHeaderChange = ({ target }) => {
		const { value } = target;
		this.props.onHeaderChange(value);
	}

	handleDescriptionChange = ({ target }) => {
		const { value } = target;
		this.props.onDescriptionChange(value);
	}

	isContentEditable ({ mode } = this.props) {
		return mode === EDIT_MODE || mode === CREATE_MODE;
	}

	handleVideoChange = (fileId) => {
		this.props.onVideoChange(fileId);
	}

	getVideoTileType () {
		const { videoState, videoId } = this.props;
		if (videoId && videoState !== mediaLoadingStates.COMPLETED) {
			return TILE_TYPES.UPLOADING;
		} else if (this.isContentEditable()) {
			return TILE_TYPES.ADD;
		} else {
			return TILE_TYPES.DEFAULT;
		}
	}

	getVideoTileButtonClassName () {
		const { mode, thumbnailUrl } = this.props;
		if ((mode === CREATE_MODE && thumbnailUrl) || mode === EDIT_MODE) return 'ScenarioHeaderSection-video-tile';
		return '';
	}

	render () {
		const {
			mode,
			count,
			counterText,
			description,
			descriptionPlaceholder,
			header,
			namePlaceholder,
			onDraftClick,
			thumbnailUrl,
			videoUrl,
			fallBackVideoUrl,
			draft,
			saveDraftText,
			videoId,
			showValidationNameError,
			showValidationDescriptionError,
			validationNameError,
			validationDescriptionError,
			updateDate,
			authorDetails,
			addVideoText,
			changeVideoText,
			canEditVideo,
		} = this.props;

		let addText;

		if (this.isContentEditable()) {
			if (!videoId) {
				addText = addVideoText;
			} else {
				addText = changeVideoText;
			}
		}
		const plusIcon = mode === CREATE_MODE && !draft;
		const videoTileProps = {
			authorDetails,
			videoId,
			videoUrl,
			fallBackVideoUrl,
			onVideoSend: this.handleVideoChange,
			thumbnailUrl,
			buttonClassName: this.getVideoTileButtonClassName(),
			type: this.getVideoTileType(),
			addText,
			plusIcon,
			canEditVideo,
		};

		if (!videoId && mode !== CREATE_MODE) {
			videoTileProps.withAuthorAvatar = true;
		}

		return (
			<Fragment>
				<ScenarioMobileHeaderSection
					{...this.props}
					canEditVideo={canEditVideo}
					videoTileProps={videoTileProps}
					className='ScenarioHeaderSection-mobile'
					contentEditable={this.isContentEditable()}
					onDescriptionChange={this.handleDescriptionChange}
					onHeaderChange={this.handleHeaderChange}
					onVideoSend={this.handleVideoChange}
					saveDraftText={saveDraftText}
					onDraftClick={onDraftClick}
					updateDate={updateDate}
				/>
				<div className='ScenarioHeaderSection'>
					<div className='ScenarioHeaderSection-content'>
						<div className='ScenarioHeaderSection-header'>
							{this.isContentEditable()
								? <ScenarioTextInput
									showError={showValidationNameError}
									errorText={validationNameError}
									onChange={this.handleHeaderChange}
									value={header}
									placeholder={namePlaceholder}
									name='name'
									className='ScenarioHeaderSection-inputWrapper'
									maxLength={128}
									inputClassName='ScenarioHeaderSection-input-name' />
								: header}
						</div>
						<div className='ScenarioHeaderSection-text'>
							{this.isContentEditable()
								? <ScenarioTextInput
									showError={showValidationDescriptionError}
									errorText={validationDescriptionError}
									onChange={this.handleDescriptionChange}
									value={description}
									placeholder={descriptionPlaceholder}
									className='ScenarioHeaderSection-inputWrapper'
									maxLength={128}
									name='description' />
								: description}
						</div>
						{mode !== PRACTICE_MODE && count
							? <ScenarioUserCounter
								className='ScenarioHeaderSection-counter'
								count={count}
								text={counterText} />
							: null}
					</div>
					<div className='ScenarioHeaderSection-image'>
						<VideoTile {...videoTileProps} />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withRouter(ScenarioHeaderSection);
