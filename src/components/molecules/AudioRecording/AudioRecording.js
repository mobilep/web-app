import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';
import { Button, RecordAudioButton, ErrorDialog } from '../../atoms';
import { formatSecondsWithMinutes } from '../../../utils/time';
import { LanguageContext, recordingFeatures } from '../../../utils';

const { Consumer: LanguageConsumer } = LanguageContext;

export default class AudioRecording extends Component {
	recording = null;
	audioChunks = [];
	audioStream = null;
	errorDialogRef = React.createRef();
	durationTimer = null;
	isCanceled = false;

	state = {
		durationInSeconds: 0,
		error: null,
	}

	static propTypes = {
		className: PropTypes.string,
		onCancel: PropTypes.func,
		onSave: PropTypes.func,
	}

	static defaultProps = {}

	getClassName (className) {
		return classNames('AudioRecording', className);
	}

	componentDidMount () {
		this.startRecording();
	}

	incrementDuration = () => {
		this.setState({ durationInSeconds: this.state.durationInSeconds + 1 });
	}

	startRecording () {
		navigator.mediaDevices.getUserMedia({ audio: true })
			.then(this.onAudioStreamStarted)
			.catch(this.onAudioStreamError);
	}

	onAudioStreamStarted = (audioStream) => {
		this.audioStream = audioStream;
		this.recording = new MediaRecorder(audioStream, { mimeType: 'audio/webm' });

		this.recording.addEventListener('dataavailable', (e) => this.audioChunks.push(e.data));
		this.recording.addEventListener('stop', this.onRecordingFinish);

		this.recording.start();
		this.durationTimer = setInterval(this.incrementDuration, 1000);
	}

	onRecordingFinish = () => {
		if (this.isCanceled) return null;
		clearInterval(this.durationTimer);

		this.props.onSave(this.audioChunks, this.state.durationInSeconds);
		this.clearTracks();
	}

	onAudioStreamError = (error) => {
		this.setState({ error });

		this.errorDialogRef.current.showModal();
	}

	handleStop = () => {
		this.recording.stop();
	}

	handleCancel = () => {
		this.isCanceled = true;
		clearInterval(this.durationTimer);
		this.clearTracks();
		this.props.onCancel();
	}

	clearTracks () {
		this.audioStream.getTracks().forEach((track) => track.stop());
	}

	getValidationDialog (text) {
		const errorKey = recordingFeatures.mediaErrorRecognizer(this.state.error);
		const dialogProps = {
			header: text[errorKey].title,
			textContent: text[errorKey].messageAudio || text[errorKey].message,
			buttonLabel: text.retry,
		};

		return (
			<ErrorDialog
				ref={this.errorDialogRef}
				onClose={this.props.onCancel}
				{...dialogProps}
			/>
		);
	}

	render () {
		const { className } = this.props;
		const { durationInSeconds } = this.state;

		return (
			<LanguageConsumer>
				{
					({ common, recording }) => (
						<Fragment>
							{this.getValidationDialog(recording)}
							<div className={this.getClassName(className)}>
								<RecordAudioButton />
								<div className='AudioRecording-time'>
									{formatSecondsWithMinutes(durationInSeconds)}
								</div>

								{/* Cancel Button */}
								<Button	className='Button-text AudioRecording-cancelBtn'	onClick={this.handleCancel}>
									{common.cancel}
								</Button>

								{/* Save Button */}
								<Button	className='Button-text'	onClick={this.handleStop}>
									{common.done}
								</Button>
							</div>
						</Fragment>
					)
				}
			</LanguageConsumer>
		);
	}
}
