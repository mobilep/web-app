const ACCEPT = 'application/json';
const CONTENT_TYPE = 'application/json';
const DEFAULT_HEADERS = {
	Accept: ACCEPT,
	'Content-Type': CONTENT_TYPE,
};

const httpApi = {

	get (url, customHeaders = {}) {
		return fetch(url, {
			method: 'GET',
			headers: {
				...DEFAULT_HEADERS,
				...customHeaders,
			},
		});
	},

	delete (url, customHeaders = {}) {
		return fetch(url, {
			method: 'DELETE',
			headers: {
				...DEFAULT_HEADERS,
				...customHeaders,
			},
		});
	},

	post (url, body, customHeaders = {}) {
		return fetch(url, {
			method: 'POST',
			headers: {
				...DEFAULT_HEADERS,
				...customHeaders,
			},
			body: JSON.stringify(body),
		});
	},

	put (url, body, customHeaders = {}) {
		return fetch(url, {
			method: 'PUT',
			headers: {
				...DEFAULT_HEADERS,
				...customHeaders,
			},
			body: JSON.stringify(body),
		});
	},

	patch (url, body, customHeaders = {}) {
		return fetch(url, {
			method: 'PATCH',
			headers: {
				...DEFAULT_HEADERS,
				...customHeaders,
			},
			body: JSON.stringify(body),
		});
	},

	upload (url, file, fileID, uploadProgress) {
		const xhr = new XMLHttpRequest();
		const promise = new Promise((resolve, reject) => {
			xhr.upload.addEventListener('progress', uploadProgress, false);
			xhr.open('PUT', `${url}`);
			xhr.setRequestHeader('Content-Type', file.type);
			xhr.addEventListener('load', () => {
				resolve(fileID);
			}, false);
			xhr.addEventListener('error', () => {
				reject('Server error');
			}, false);
			xhr.send(file);
		});
		return { xhr, promise };
	},

};

export default httpApi;
