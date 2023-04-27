import constants from '../constants';
import { browserInfo } from './BrowserInfo';
const { recording } = constants.common;

const recordingFeatures = {

	isRecorderSupported () {
		return typeof window.MediaRecorder !== 'undefined';
	},

	mediaErrorRecognizer (error) {
		if (!error || !error.name) return 'unknownError';
		switch (error.name) {
			case 'OverconstrainedError':
			case 'ConstraintNotSatisfiedError': return 'constraintsError';
			case 'NotAllowedError':
			case 'PermissionDeniedError': return 'permissionError';
			case 'NotReadableError':
			case 'TrackStartError': return 'deviceBusyError';
			case 'NotFoundError':
			case 'DevicesNotFoundError': return 'notFoundError';
			default: return 'unknownError';
		}
	},

	makeConstraints (deviceId, isHigh) {
		const constraints = isHigh ? recording.CONSTRAINTS.hq : recording.CONSTRAINTS.mq;
		if (deviceId) {
			constraints.video.deviceId = deviceId;
		} else {
			delete constraints.video.deviceId;
		}
		return constraints;
	},

	makeRecorderOptions (isHigh) {
		const recorderOptions = browserInfo.isAndroid ? {} : { mimeType: recording.CODECS };
		if (isHigh) {
			recorderOptions.videobitspersecond = browserInfo.isAndroid ? 2000000 : 3000000;
		} else {
			recorderOptions.videobitspersecond = 1500000;
		}
		return recorderOptions;
	},

	makeFrameShot (video) {
		const c = document.createElement('canvas');
		const ctx = c.getContext('2d');
		const { width, height } = video.getBoundingClientRect();
		c.width = width;
		c.height = height;
		ctx.drawImage(video, 0, 0, width, height);
		return c.toDataURL();
	},

	async lockOrientation () {
		// Added additional try/catch blocks to functions below as it can behave too unpredictable in different browsers
		try {
			const screen = window.screen;
			const lockCall = screen.lockOrientation ||
				screen.mozLockOrientation ||
				screen.msLockOrientation ||
				(screen.orientation && screen.orientation.lock);
			const currentType = screen.orientation.type;
			return await lockCall.call(screen.orientation, currentType);
		} catch (err) {
			console.warn(err);
		}
	},

	unlockOrientation () {
		try {
			const screen = window.screen;
			const unlockCall = screen.unlockOrientation ||
				screen.mozUnlockOrientation ||
				screen.msUnlockOrientation ||
				(screen.orientation && screen.orientation.unlock);
			return unlockCall.call(screen.orientation);
		} catch (err) {
			console.warn(err);
		}
	},
};

export default recordingFeatures;
