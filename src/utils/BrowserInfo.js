import userAgent from 'ua-parser-js';
import constants from '../constants';

const { osName } = constants.common;

const getBrowserInfo = (parserFn) =>
	(userAgent) => {
		const { browser, engine, os = {} } = parserFn(userAgent);
		const isAndroid = os.name === osName.ANDROID;
		const isIos = os.name === osName.IOS;
		const isAndroidOrIos = isAndroid || isIos;
		return {
			browser,
			engine,
			os,
			isAndroid,
			isIos,
			isAndroidOrIos,
		};
	};

export const browserInfo = getBrowserInfo(userAgent)(navigator.userAgent);

export const isFullscreenBusy = () => document.fullscreenElement || document.webkitFullscreenElement;
