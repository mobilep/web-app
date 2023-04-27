import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Linking,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { WebView } from 'react-native-webview';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import urlParser from 'url';
import { deregisterDevice, registerDevice } from './api';

const BASE_URL = 'https://dev-web.mobilepractice.io';
// const BASE_URL = 'http://192.168.2.19:3000';

const App = () => {
	const [url, setUrl] = useState(BASE_URL);
	const webViewRef = useRef(null);

	useEffect(() => {
		Linking.addEventListener('url', handleUrlEvent);
		return () => Linking.removeEventListener('url', handleUrlEvent);
	}, []);

	useEffect(() => {
		PushNotificationIOS.getInitialNotification().then((notification) => {
			if (notification) {
				// manage logic of proper routing after notification tapped here
				// for example setUrl to '/inbox/chat/:id' if notification lock-key is INBOX_MESSAGE etc.
				notification.finish(PushNotificationIOS.FetchResult.NewData);
			}
		});
	}, []);

	const handleUrlEvent = (event) => {
		const {url} = event;
		if (!url) return;
		const urlObj = urlParser.parse(url);
		if (!urlObj.protocol) return;
		const urlToSet = urlObj.protocol.includes('http') ? url : `${BASE_URL}/${url.replace(/.*?:\/\//g, '')}`;
		webViewRef.current.stopLoading();
		setUrl(urlToSet);
	};

	const handleMessage = (event) => {
		const msgString = event.nativeEvent.data;
		let msg;
		try {
			msg = JSON.parse(msgString);
		} catch (e) {
			console.log('Incorrect message format');
			return;
		}

		if (msg.type && msg.type === 'login') {
			const accessToken = msg.data.accessToken;
			if (!accessToken) return;

			PushNotificationIOS.addEventListener('register', function handler (deviceToken) {
				registerDevice(deviceToken, accessToken).then(() => console.log('Device registered'));
				PushNotificationIOS.removeEventListener('register', handler);
			});
			PushNotificationIOS.requestPermissions().then(data => console.log(data));
		}

		// @TODO: Use some kind of storage instead of getting device token via another permissions request!!
		if (msg.type && msg.type === 'logout') {
			const accessToken = msg.data.accessToken;
			if (!accessToken) return;

			PushNotificationIOS.addEventListener('register', function handler (deviceToken) {
				deregisterDevice(deviceToken, accessToken).then(() => console.log('Device deregistered'));
				PushNotificationIOS.removeEventListener('register', handler);
			});
			PushNotificationIOS.requestPermissions().then(data => console.log(data));
		}
	};

	const handleLoadEnd = () => setTimeout(() => SplashScreen.hide(), 400);

	return (
		<View style={{flex:1, justifyContent: 'flex-start', alignItems: 'stretch'}}>
		  <WebView
			  ref={webViewRef}
			  allowsFullscreenVideo
			  source={{ uri: url }}
			  onLoadEnd={handleLoadEnd}
			  onMessage={handleMessage}
		  />
		</View>
	);
};

export default App;
