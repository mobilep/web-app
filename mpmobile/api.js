// don't use hardcoded, please move to environment variables when have time
const API_URL = 'https://dev-api.mobilepractice.io/api/v4';

export function registerDevice(deviceToken, accessToken) {
	const url = `${API_URL}/user/device`;
	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': accessToken,
		},
		body: JSON.stringify({
			token: deviceToken
		})
	});
}

export function deregisterDevice(deviceToken, accessToken) {
	const url = `${API_URL}/user/device/${deviceToken}`;
	return fetch(url, {
		method: 'DELETE',
		headers: {
			'Authorization': accessToken,
		}
	})
}

