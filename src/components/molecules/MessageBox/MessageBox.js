import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
	AddVideoButton,
	SendButton,
	RecordAudioButton,
	ErrorDialog,
	AddFileButton,
} from '../../atoms';
import { AudioRecording, MessageBoxMediaPreview } from '../';
import { WithUpload, WithUploadRecordVideo } from '../../../HOC';

import constants from '../../../constants';
import { keyMap } from './constants';

import './styles.css';
import { calculateProgress } from '../../../utils/calculateProgress';
import { uploadImageForMessage, uploadFileForMessage, getVideoMetadata } from '../../../utils/fileService';
import { LanguageContext, browserInfo } from '../../../utils';
import { PdfIcon, ImageIcon, VideoCameraIcon } from '../../../icons';
import { FILE_TYPE } from '../../../constants/files';
import { messageTypes } from '../../../constants/common';
import { MediaPreviewDataFactory } from './MediaPreviewDataFactory';

const { Consumer: LanguageConsumer } = LanguageContext;
const { common } = constants;

const UploadRecordVideoButton = (WithUpload && WithUploadRecordVideo(AddVideoButton)) || AddVideoButton ;

export default class MessageBox extends PureComponent {
	errorDialogRef = React.createRef();

	state = {
		messageContent: '',
		imgFile: null,
		uploadProgress: null,
		audioRecordingActive: false,
		audioFile: null,
		attachmentFile: null,
		videoFile: null,
	}

	componentDidMount () {
		document.addEventListener('keypress', this.handleKeyPress);
	}

	componentWillUnmount () {
		document.removeEventListener('keypress', this.handleKeyPress);
	}

	componentDidUpdate (prevProps, prevState) {
		const { messageContent } = this.state;
		if (messageContent.includes(common.copyPasteID)) {
			let pastedMedia = messageContent.split(common.copyPasteID)[1];
			try {
				pastedMedia = JSON.parse(pastedMedia);
				/* eslint-disable react/no-did-update-set-state */
				this.setState({
					pastedMedia,
					messageContent: prevState.messageContent,
				});
			} catch (e) {
				/* eslint-disable react/no-did-update-set-state */
				return this.setState({ messageContent });
			}
		}
	}

	setMessageContent (messageContent) {
		this.setState({ messageContent });
	}

	handleKeyPress = (event) => {
		const { key, shiftKey } = event;

		if (key.toLowerCase() === keyMap.ENTER && !shiftKey) {
			event.preventDefault();
			this.handleSend();
		}
	}

	getClassName (className) {
		return classNames('MessageBox', className);
	}

	handleMessageChange = (event) => {
		const { value } = event.target;
		this.setState({ messageContent: value });
	}

	handleKeyDown = (event) => {
		const { key } = event;
		const { messageContent } = this.state;
		if (key.toLowerCase() === keyMap.BACKSPACE && messageContent === '') {
			this.setState({ pastedMedia: null });
		}
	}

	getMessageText () {
		return this.state.messageContent.trim();
	}

	sendImgMsg = ({ imageId, imageName }) => {
		const text = this.getMessageText();

		this.props.onMessageSend({ imageId, imageName, text }, messageTypes.IMAGE);
		this.setState({ imgFile: null, uploadProgress: null, messageContent: '' });
	}

	sendAudioMsg = ({ fileId: audioId }) => {
		const text = this.getMessageText();

		this.props.onMessageSend({ audioId, text }, messageTypes.AUDIO);
		this.setState({ audioFile: null, uploadProgress: null, messageContent: '' });
	}

	sendFileMsg = ({ fileId, fileName, originalName = this.state.attachmentFile.name }) => {
		const text = this.getMessageText();

		this.props.onMessageSend({ fileId, fileName, originalName, text }, messageTypes.FILE);
		this.setState({ attachmentFile: null, uploadProgress: null, messageContent: '' });
	}

	sendVideoMsg = (videoId, description, duration) => {
		const text = this.getMessageText();

		this.props.onMessageSend({ videoId, duration, text }, messageTypes.VIDEO);
		this.setState({ videoFile: null, uploadProgress: null, messageContent: '' });
	}

	sendMediaMessage () {
		const { imgFile, audioFile, attachmentFile, videoFile	} = this.state;
		this.setState({ uploadProgress: 1 });

		if (imgFile) {
			return uploadImageForMessage(imgFile, this.handleUploadProgress)
				.then(this.sendImgMsg);
		}

		if (audioFile) {
			return uploadFileForMessage(audioFile, this.handleUploadProgress)
				.then(this.sendAudioMsg);
		}

		if (attachmentFile) {
			return uploadFileForMessage(attachmentFile, this.handleUploadProgress)
				.then(this.sendFileMsg);
		}

		if (videoFile) {
			return uploadFileForMessage(videoFile, this.handleUploadProgress)
				.then(({ fileId }) => this.onVideoUploadFinish(fileId, videoFile));
		}
	}

	sendPastedMessage () {
		const {	pastedMedia	} = this.state;

		if (pastedMedia && pastedMedia.imageId) {
			const { imageId, photoName, imageName } = pastedMedia;
			this.sendImgMsg({ imageId, imageName: photoName || imageName });
		}

		if (pastedMedia && pastedMedia.audioId) {
			const { audioId: fileId } = pastedMedia;
			this.sendAudioMsg({ fileId });
		}

		if (pastedMedia && pastedMedia.fileId) {
			const { fileId, fileName, originalName } = pastedMedia;
			this.sendFileMsg({ fileId, fileName, originalName });
		}

		if (pastedMedia && pastedMedia.videoId) {
			const { duration, videoId } = pastedMedia;
			this.sendVideoMsg(videoId, null, duration);
		}

		this.setState({ pastedMedia: null });
	}

	isMediaMessage () {
		const {	imgFile, audioFile, attachmentFile, videoFile } = this.state;
		return !!imgFile || !!audioFile || !!attachmentFile || !!videoFile;
	}

	handleSend = () => {
		const { onMessageSend } = this.props;
		const {	pastedMedia, uploadProgress	} = this.state;

		if (uploadProgress) return;

		if (this.isMediaMessage()) {
			this.sendMediaMessage().catch(this.handleMediaSendError);
		} else	if (pastedMedia) {
			this.sendPastedMessage();
		} else	if (this.getMessageText()) {
			onMessageSend(this.getMessageText());
			this.setState({ messageContent: '' });
		}
	}

	handleMediaSendError = () => {
		this.errorDialogRef.current.showModal();
		this.setState({ uploadProgress: 0 });
	}

	handleUploadProgress = ({ loaded, total }) => {
		const uploadProgress = calculateProgress(loaded, total);

		this.setState({ uploadProgress });
	}

	handleImageSelect = (imgFile) => {
		this.setState({	imgFile });
	}

	handleFileSelect = (attachmentFile) => {
		this.setState({ attachmentFile });
	}

	handleAudioRecordingStateToggle = () => {
		this.setState({ audioRecordingActive: !this.state.audioRecordingActive });
	}

	handleVideoSelected = (videoFile) => {
		this.setState({ videoFile });
	}

	/**
	 * @param {string} fileId
	 * @param {File} videoFile
	 */
	onVideoUploadFinish (fileId, videoFile) {
		getVideoMetadata(videoFile)
			.then(({ duration }) => this.sendVideoMsg(fileId, null, duration));
	}

	handleAudioRecordingSave = (audioChunks, duration) => {
		this.handleAudioRecordingStateToggle();
		const audioFile = new Blob(audioChunks, { type: 'audio/wav' });
		audioFile.name = 'file.wav';
		audioFile.duration = duration;
		this.setState({ audioFile });
	}

	getMediaPreview () {
		const { audioFile, uploadProgress, imgFile, pastedMedia, attachmentFile, videoFile } = this.state;
		const mediaPreviewData = new MediaPreviewDataFactory({
			audioFile, imgFile, pastedMedia, attachmentFile, videoFile,
		});

		return (<MessageBoxMediaPreview
			uploadProgress={uploadProgress}
			media={ mediaPreviewData }
			onMediaPreviewDelete={this.handleMediaPreviewDelete}
		/>);
	}

	handleMediaPreviewDelete = () => {
		this.setState({ audioFile: null, imgFile: null, pastedMedia: null, attachmentFile: null, videoFile: null });
	}

	render () {
		const {	messageContent, pastedMedia,	audioRecordingActive,	uploadProgress } = this.state;
		const {	className, placeholder } = this.props;
		const uploadedMediaPreviewState = this.isMediaMessage();
		const previewState = uploadedMediaPreviewState || !!pastedMedia;

		return (
			<LanguageConsumer>
				{
					({ mediaUpload }) => (
						<div className={this.getClassName(className)}>
							<ErrorDialog
								ref={this.errorDialogRef}
								header={mediaUpload.uploadFailed}
								buttonLabel={mediaUpload.tryAgain}
							/>

							{/* Preview */}
							{previewState && this.getMediaPreview()}

							{/* MessageBox */}
							<div className='MessageBox-boxWrapper'>
								{audioRecordingActive &&
									<AudioRecording
										className='MessageBox-audioRecording'
										onCancel={this.handleAudioRecordingStateToggle}
										onSave={this.handleAudioRecordingSave}
									/>
								}
								<div className='MessageBox-mainArea'>
									<textarea
										disabled={uploadProgress}
										value={messageContent}
										className='MessageBox-textArea'
										onChange={this.handleMessageChange}
										onKeyDown={this.handleKeyDown}
										placeholder={placeholder}
										rows={1}
									/>
								</div>

								{/* CONTROLS */}
								<div className='MessageBox-controlArea'>
									{browserInfo.isIos
										? <AddFileButton
											disabled={previewState}
											onFileSelected={this.handleVideoSelected}
											type={FILE_TYPE.VIDEO}
											icon={<VideoCameraIcon />}
										/>
										: <UploadRecordVideoButton
											disabled={previewState}
											fileType={FILE_TYPE.VIDEO}
											onSend={this.sendVideoMsg}
										/>
									}

									<AddFileButton
										disabled={previewState}
										onFileSelected={this.handleImageSelect}
										type={FILE_TYPE.IMAGE}
										icon={<ImageIcon />}
									/>

									<RecordAudioButton
										disabled={previewState}
										onClick={this.handleAudioRecordingStateToggle}
									/>

									<AddFileButton
										disabled={previewState}
										onFileSelected={this.handleFileSelect}
										type={FILE_TYPE.FILE}
										icon={<PdfIcon />}
									/>
									<SendButton
										disabled={!!uploadProgress}
										className='MessageBox-sendButton'
										onClick={this.handleSend}
									/>
								</div>
							</div>
						</div>
					)
				}
			</LanguageConsumer>
		);
	}
}

MessageBox.defaultProps = {
	onMessageSend: () => {},
	placeholder: '',
};

MessageBox.propTypes = {
	className: PropTypes.string,
	onMessageSend: PropTypes.func,
	placeholder: PropTypes.string,
};
