import React, { PureComponent, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
	Dialog,
	RecordStopOverlay,
	VideoRecorder,
	RecordPlayer,
	DragAndDropFileItem,
	ErrorSubmit,
	ScenarioTextInput,
	Button,
} from '../..';
import { httpApi, LanguageContext, recordingFeatures, browserInfo, isFullscreenBusy } from '../../../utils';
import constants from '../../../constants';
import './styles.css';
import { calculateProgress } from '../../../utils/calculateProgress';
import { getVideoMetadata } from '../../../utils/fileService';

const { common } = constants;
const { Consumer: LanguageConsumer } = LanguageContext;

const convertBytesToMB = (bytes) => {
	return (bytes / 1048576).toFixed(1);
};

const defaultState = {
	description: '',
	fileReady: false,
	isUploading: false,
	progress: 0,
	error: null,
	isReplay: false,
};

export class VideoRecorderDialog extends PureComponent {

	dialogRef = this.props.forwardedRef || React.createRef();
	contentRef = React.createRef();
	file = null;
	xhr = null;
	image = '';

	state = defaultState;

	componentDidMount () {
		if (!browserInfo.isAndroid) return;
		if ('requestFullscreen' in this.contentRef.current) {
			setTimeout(() => this.contentRef.current.requestFullscreen());
		} else if ('webkitRequestFullScreen' in this.contentRef.current) {
			setTimeout(() => this.contentRef.current.webkitRequestFullScreen());
		}
		document.onfullscreenchange = document.onwebkitfullscreenchange = () => {
			if (!isFullscreenBusy() && !this.file) {
				this.handleClose();
			}
		};
	}

	currentDialog () {
		return this.dialogRef.current;
	}

	handleError = (error) => {
		this.setState({ error });
	}

	handleFileReady = (file, image) => {
		this.file = file;
		this.image = image;
		this.setState({ fileReady: true });
	}

	handleFileCancel = () => {
		if (this.xhr) {
			this.xhr.abort();
			this.xhr = null;
		}
	}

	handleFileCancelWithRecord = () => {
		this.handleFileCancel();
		this.handleRecordAgain();
	}

	handleReplay = () => {
		this.setState({ isReplay: true });
	}

	handleReplayBack = () => {
		this.setState({ isReplay: false });
	}

	handleRecordAgain = () => {
		this.file = null;
		this.setState(defaultState);
	}

	handleClose = () => {
		this.handleFileCancel();
		this.setState({
			showSaveVideoOption: false,
			description: '',
		}, () => this.props.onClose());
	}

	handleSaveVideo = () => {
		const { description } = this.state;
		this.handleSendVideo(description);
	}

	handleSendVideo = async (description = '') => {
		const { authorization, onSend } = this.props;
		if (this.file) {
			const { duration } = await getVideoMetadata(this.file);
			const uploadProgress = (e) => {
				if (e.lengthComputable) {
					this.setState({
						...this.state,
						progress: calculateProgress(e.loaded, e.total),
					});
				}
			};

			const uploadFile = async (response) => {
				if (!response.url) throw new Error('Server error');
				const { xhr, promise } = httpApi.upload(response.url, this.file, response.fileID, uploadProgress);
				this.xhr = xhr;
				return await promise;
			};

			const { USER_ACCESS_TOKEN } = common.localStorageKeys;
			try {
				this.setState({
					isUploading: true,
				});
				const response = await httpApi.post(`${common.api}/upload`, {
					filename: `Video.mp4`, // 'mp4' for testing purposes, later we need to allow .webm on back-end!
					ContentType: this.file.type,
				}, { Authorization: authorization || localStorage.getItem(USER_ACCESS_TOKEN) });
				const preSignedURL = await response.json();
				const fileID = await uploadFile(preSignedURL);
				this.xhr = null;
				onSend(fileID, description, duration);
				this.currentDialog().close();
			} catch (error) {
				this.setState({
					isUploading: false,
					error,
				});
			}
		}
	}

	handleSend = () => {
		const { withDescription } = this.props;
		if (withDescription) {
			if (isFullscreenBusy()) {
				document.exitFullscreen();
			}
			this.currentDialog().style = {};
			return this.setState({
				showSaveVideoOption: true,
			});
		} else {
			return this.handleSendVideo();
		}
	}

	handleStreamSettings = ({ width, aspectRatio }) => {
		const maxWidth = window.innerWidth * 0.7;
		const dialogWidth = width > maxWidth ? maxWidth : width;
		const dialogHeight = Math.round((dialogWidth / aspectRatio) + 60);
		this.currentDialog().style.width = `${Math.round(dialogWidth)}px`;
		this.currentDialog().style.height = `${dialogHeight}px`;
	}

	renderError ({ error }, texts) {
		if (!error) return null;
		const errorKey = recordingFeatures.mediaErrorRecognizer(error);
		return (
			<ErrorSubmit
				buttonLabel={texts.retry}
				title={texts[errorKey].title}
				message={texts[errorKey].message}
				onButtonClick={this.handleRecordAgain}
			/>
		);
	}

	renderRecorder ({ fileReady, isReplay, isUploading, error }) {
		if (isUploading || fileReady || isReplay || error) return null;
		return (
			<VideoRecorder
				onError={this.handleError}
				onStreamSettings={this.handleStreamSettings}
				onFileReady={this.handleFileReady}
			/>
		);
	}

	renderPlayer ({ fileReady, isReplay, isUploading, error }, texts) {
		if (isUploading || !fileReady || !isReplay || error) return null;
		return (
			<RecordPlayer
				buttonText={texts.next}
				file={this.file}
				onBack={this.handleReplayBack}
			/>
		);
	}

	renderOverlay ({ fileReady, isReplay, isUploading, error }, texts) {
		if (isUploading || !fileReady || isReplay || error) return null;
		const { withDescription } = this.props;
		const { replay, recordAgain, send, next } = texts;
		const sendTextLabel = withDescription ? next : send;
		return (
			<RecordStopOverlay
				image={this.image}
				onReplay={this.handleReplay}
				onRecordAgain={this.handleRecordAgain}
				onSend={this.handleSend}
				texts={{ replay, recordAgain, send: sendTextLabel }}
			/>
		);
	}

	handleDescriptionChange = ({ target }) => {
		this.setState({
			description: target.value,
		});
	}

	renderSaveVideoOverlay (commonContent, content) {
		const { withDescription } = this.props;
		const { description, isUploading, progress } = this.state;
		const isButtonDisabled = isUploading || (withDescription ? !description.trim() || !this.file : !this.file);
		return (
			<div className='VideoRecorderDialog-saveVideoOverlay'>
				<DragAndDropFileItem
					withCancelOption={false}
					progress={progress}
					name='Video.webm'
					size={convertBytesToMB(this.file.size)}
				/>
				{withDescription &&
					<div className='DragAndDropDescriptionInfo'>
						<span className='DragAndDrop-bestPracticeNote'>
							{content.bestPracticeNote}
						</span>
						<ScenarioTextInput
							maxLength={32}
							name='bestpractice'
							showError
							required
							value={description}
							onChange={this.handleDescriptionChange}
							errorText={content.errorText}
							className='DragAndDrop-inputWrapper'
							inputClassName='DragAndDrop-textInput'
							placeholder={content.bestPractice}
						/>
						<div className='DragAndDrop-btnRow'>
							<Button
								color='grey'
								onClick={() => this.currentDialog().close()}
								primary
							>
								{commonContent.cancel}
							</Button>

							<Button
								onClick={this.handleSaveVideo}
								disabled={isButtonDisabled}
								primary
							>
								{commonContent.save}
							</Button>
						</div>
					</div>
				}
			</div>
		);
	}

	renderUploadProgress ({ isUploading, progress, error }) {
		if (!isUploading || error) return null;
		return (
			<DragAndDropFileItem
				onCancel={this.handleFileCancelWithRecord}
				progress={progress}
				name='Video.webm'
				size={convertBytesToMB(this.file.size)}
			/>
		);
	}

	getClassName ({ showSaveVideoOption } = this.state) {
		return classNames({
			VideoRecorderDialog: true,
			'VideoRecorderDialog-mobile': browserInfo.isAndroid,
			'VideoRecorderDialog-saveVideoOption': showSaveVideoOption,
		});
	}

	render () {
		const { showSaveVideoOption } = this.state;
		return (
			<LanguageConsumer>
				{
					({ recording, common, dragAndDrop }) => (
						<Dialog className={this.getClassName()}
							ref={this.dialogRef}
							onClose={this.handleClose}>
							{/* This div is needed to avoid issues with fullscreen! */}
							<div ref={this.contentRef} className='VideoRecorderDialog-content'>
								{
									(() => {
										if (showSaveVideoOption) {
											return this.renderSaveVideoOverlay(common, dragAndDrop);
										}
										return (
											<Fragment>
												{this.renderError(this.state, recording)}
												{this.renderRecorder(this.state)}
												{this.renderPlayer(this.state, recording)}
												{this.renderOverlay(this.state, recording)}
												{this.renderUploadProgress(this.state)}
											</Fragment>
										);
									})()
								}
							</div>
						</Dialog>
					)
				}
			</LanguageConsumer>
		);
	}

}

VideoRecorderDialog.defaultProps = {
	authorization: '',
	forwardedRef: null,
	onCancel: () => {},
	onClose: () => {},
	onSend: () => {},
};

VideoRecorderDialog.propTypes = {
	authorization: PropTypes.string,
	forwardedRef: PropTypes.any,
	onCancel: PropTypes.func,
	onClose: PropTypes.func,
	onSend: PropTypes.func,
	withDescription: PropTypes.bool,
};

/* eslint-disable-next-line react/no-multi-comp */
const _VideoRecorderDialog = (props, ref) => <VideoRecorderDialog {...props} forwardedRef={ref} />;
_VideoRecorderDialog.displayName = 'VideoRecorderDialog';

export default React.forwardRef(_VideoRecorderDialog);
