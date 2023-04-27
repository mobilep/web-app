// Check if application is currently runnings inside of react-native webview
export function isRNApp () {
	return Boolean(window.ReactNativeWebView);
}

// Send event message to be handled inside of react native app
export function sendRNMessage (type, data) {
	if (!isRNApp()) return;

	const msgForMobileApp = {
		type,
		data,
	};

	try {
		const msg = JSON.stringify(msgForMobileApp);
		window.ReactNativeWebView.postMessage(msg);
	} catch (err) {
		console.error('Unable to send message to mobile app');
	}
}

