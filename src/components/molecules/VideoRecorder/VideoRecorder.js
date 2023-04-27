import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ButtonIcon, RecordButton, TimerDisplay, ViewLoader } from '../..';
import { browserInfo, recordingFeatures } from '../../../utils';
import constants from '../../../constants';
import { SwitchCameraIcon } from '../../../icons';
import './styles.css';

const defaultState = {
	streamReady: false,
	isRecording: false,
	error: null,
	deviceIndex: 0,
	highQuality: false,
};

const { recording } = constants.common;

export default class VideoRecorder extends Component {

	state = defaultState;
	videoRef = createRef();
	timerDisplayRef = createRef();
	videoDevices = [];
	stream;
	recorder;
	recordData = [];
	timer = null;
	currentDuration = 0;

	currentVideo () {
		return this.videoRef.current;
	}

	currentTimerDisplay () {
		return this.timerDisplayRef.current;
	}

	componentDidMount () {
		window.navigator.mediaDevices
			.enumerateDevices()
			.then((devices) => {
				this.videoDevices = devices.filter((d) => d.kind === 'videoinput');
				this.videoDevices.sort((c1) => {
					return (c1 && c1.label && c1.label.includes('front')) ? -1 : 1;
				});
				return this.afterDeviceReady();
			})
			.catch((error) => {
				this.props.onError(error);
			});
	}

	componentWillUnmount () {
		this.resetAll();
	}

	afterDeviceReady () {
		const { deviceIndex, highQuality } = this.state;
		const deviceId = this.videoDevices[deviceIndex] ? this.videoDevices[deviceIndex].deviceId : null;

		window.navigator.mediaDevices
			.getUserMedia(recordingFeatures.makeConstraints(deviceId, highQuality))
			.then((stream) => {
				this.stream = stream;
				this.afterStreamReady();
				this.createRecorder();
			}).catch((error) => {
				this.props.onError(error);
			});
	}

	afterStreamReady () {
		const track = this.stream.getVideoTracks()[0];
		const settings = track.getSettings();
		this.props.onStreamSettings(settings);
		this.currentVideo().srcObject = this.stream;
		this.setState({ ...this.state, streamReady: true });
	}

	dataHandler = (event) => {
		this.recordData.push(event.data);
	};

	createRecorder () {
		const recorderOptions = recordingFeatures.makeRecorderOptions(this.state.highQuality);
		this.recorder = new MediaRecorder(this.stream, recorderOptions);
		this.recorder.ondataavailable = this.dataHandler;
	}

	toggleTimer () {
		if (this.timer) {
			clearInterval(this.timer);
		} else {
			this.timer = setInterval(() => {
				this.currentDuration += recording.TIME_SLICE;
				this.currentTimerDisplay().setPassed(this.currentDuration);
				if (this.currentDuration >= recording.MAX_LENGTH) {
					this.handleStopRecording();
				}
			}, recording.TIME_SLICE);
		}
	}

	resetAll () {
		if (this.stream) {
			this.stream.getTracks().forEach((track) => track.stop());
			this.stream = null;
		}
		if (this.timer) {
			clearInterval(this.timer);
		}
		if (this.recorder) {
			this.recorder = null;
		}
		this.recordData = [];
	}

	handleStartRecording = async () => {
		if (browserInfo.isAndroid) await recordingFeatures.lockOrientation();
		this.setState({ isRecording: true });
		this.recorder.start(recording.TIME_SLICE);
		this.toggleTimer();
	}

	handleStopRecording = () => {
		const { onFileReady } = this.props;
		this.toggleTimer();
		this.recorder.stop();
		if (browserInfo.isAndroid) recordingFeatures.unlockOrientation();
		const image = recordingFeatures.makeFrameShot(this.currentVideo());
		const file = new Blob(this.recordData, { type: recording.CODECS });
		this.setState({ isRecording: false });
		onFileReady(file, image);
	}

	handleSwitchCamera = () => {
		let deviceIndex = this.state.deviceIndex;
		if (deviceIndex + 1 >= this.videoDevices.length) {
			deviceIndex = 0;
		} else {
			deviceIndex++;
		}
		this.setState({ streamReady: false, deviceIndex }, () => {
			this.resetAll();
			this.afterDeviceReady();
		});
	}

	handleSwitchQuality = () => {
		const highQuality = this.state.highQuality;
		this.setState({ streamReady: false, highQuality: !highQuality }, () => {
			this.resetAll();
			this.afterDeviceReady();
		});
	}

	getClassName () {
		return classNames({
			'VideoRecorder-container': true,
			'VideoRecorder-mobile': browserInfo.isAndroid,
		});
	}

	renderPanel (streamReady, isRecording, highQuality) {
		if (!streamReady) return null;
		return (
			<div className='VideoRecorder-panel'>
				<TimerDisplay ref={this.timerDisplayRef} />
				{
					!isRecording && <RecordButton onClick={this.handleStartRecording} />
				}
				{
					isRecording && <RecordButton className='recording' onClick={this.handleStopRecording} />
				}
				{this.renderSwitchQuality(isRecording, highQuality)}
			</div>
		);
	}

	renderSwitchQuality (isRecording, highQuality) {
		if (!isRecording || isRecording) return null; // @TODO: Remove isRecording after feature requested! (later)
		return (
			<button onClick={this.handleSwitchQuality}
				className={classNames({ 'SwitchQuality-button': true, enabled: highQuality })}>HQ</button>
		);
	}

	renderSwitchCamera (streamReady, isRecording) {
		if (!streamReady || isRecording || this.videoDevices.length < 2) return null;
		return (
			<ButtonIcon className='SwitchCamera-button'
				icon={<SwitchCameraIcon />}
				onClick={this.handleSwitchCamera} />
		);
	}

	render () {
		const { streamReady, isRecording, highQuality } = this.state;
		return (
			<div className={this.getClassName()}>
				<video ref={this.videoRef} autoPlay muted />
				{this.renderSwitchCamera(streamReady, isRecording)}
				{
					!streamReady && <ViewLoader />
				}
				{this.renderPanel(streamReady, isRecording, highQuality)}
			</div>
		);
	}

}

VideoRecorder.defaultProps = {
	onError: () => {},
	onFileReady: () => {},
	onStreamSettings: () => {},
};

VideoRecorder.propTypes = {
	onError: PropTypes.func,
	onFileReady: PropTypes.func,
	onStreamSettings: PropTypes.func,
};
