import { getJwtToken } from '../helpers/storageHelpers';
import { httpApi } from './';
import constants from '../constants';
import { MAX_FILE_SIZE_MB, ALLOWED_FILE_FORMATS } from '../constants/files';

const { common } = constants;

export const getSignedUrl = async (requestPayload) => {
	const headers = { Authorization: getJwtToken() };
	return httpApi.post(
		`${common.api4}/upload`,
		requestPayload,
		headers,
	).then((res) => res.json());
};

export const uploadImageForMessage = async (imageFile, progressCb) => {
	const signedUrlPayload = { filename: imageFile.name, ContentType: imageFile.type, category: 'photo' };
	const signedResponse = await getSignedUrl(signedUrlPayload);
	await httpApi.upload(signedResponse.url, imageFile, signedResponse.fileID, progressCb).promise;

	return { imageId: signedResponse.fileID, imageName: signedResponse.name };
};

export const uploadFileForMessage = async (file, progressCb) => {
	const signedUrlPayload = { filename: file.name, ContentType: file.type };
	const signedResponse = await getSignedUrl(signedUrlPayload);
	await httpApi.upload(signedResponse.url, file, signedResponse.fileID, progressCb).promise;

	return { fileId: signedResponse.fileID, fileName: signedResponse.name };
};

export const convertBytesToMB = (bytes) => {
	return (bytes / 1048576).toFixed(1);
};

export const isSizeValid = (size, mediaType) => {
	return convertBytesToMB(size) < MAX_FILE_SIZE_MB[mediaType];
};

export const isTypeValid = (fileType, mediaType) => {
	const allAllowedFormats =
		Object
			.values(ALLOWED_FILE_FORMATS[mediaType])
			.reduce((accumulator, currentValue) => ([...accumulator, ...currentValue]), []);

	return allAllowedFormats.some((format) => format === fileType);
};

export const getComaSeparatedFileFormats = (fileType) => {
	return Object.keys(ALLOWED_FILE_FORMATS[fileType]).join(', ');
};

export const getFileExtensionFromName = (fileName) => {
	const regex = /(?:\.([^.]+))?$/;

	return regex.exec(fileName)[1];
};

export const getVideoMetadata = (videoFile) => {
	if (!isFileType('video')(videoFile)) return Promise.resolve({});

	const video = document.createElement('video');
	video.preload = 'metadata';

	return new Promise((resolve) => {
		video.onloadedmetadata = function () {

			if (video.duration === Infinity) {
				video.currentTime = 1e101;
				video.ontimeupdate = function () {
					video.currentTime = 0;
					window.URL.revokeObjectURL(video.src);
					resolve(video);
				};
			} else {
				window.URL.revokeObjectURL(video.src);
				resolve(video);
			}
		};

		video.onerror = () => {
			window.URL.revokeObjectURL(video.src);
			resolve({ duration: 0 });
		};

		video.src = URL.createObjectURL(videoFile);
	});
};

function isFileType (type) {
	return (file) => file && file['type'].split('/')[0] === type;
}

export function readFileAsArrayBuffer (file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onloadend = () => resolve(reader.result);
		reader.onerror = reject;
		reader.readAsArrayBuffer(file);
	});
}

export function bufferToFile (buffer, fileName, options) {
	return new File([buffer], fileName, options);
}

export function securelyReadFile (file) {
	const { name, type, lastModified } = file;

	return readFileAsArrayBuffer(file)
		.then((buffer) => bufferToFile(buffer, name, { type, lastModified }));
}
