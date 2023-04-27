import constants from '../constants';
import { sendRNMessage } from './mobileAppHelpers';

const { USER_ACCESS_TOKEN, FIREBASE_ACCESS_TOKEN } = constants.common.localStorageKeys;

export function getJwtToken () {
	return localStorage.getItem(USER_ACCESS_TOKEN);
}

export const saveAccessToken = (accessToken) => {
	localStorage.setItem(USER_ACCESS_TOKEN, accessToken);
	if (accessToken) sendRNMessage('login', { accessToken });
};

export const removeAccessToken = () => {
	const accessToken = localStorage.getItem(USER_ACCESS_TOKEN);
	if (accessToken) sendRNMessage('logout', { accessToken });
	localStorage.removeItem(USER_ACCESS_TOKEN);
};

export const saveFirebaseToken = (firebaseToken) => localStorage.setItem(FIREBASE_ACCESS_TOKEN, firebaseToken);
export const removeFirebaseToken = () => localStorage.removeItem(FIREBASE_ACCESS_TOKEN);
