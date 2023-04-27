import 'webrtc-adapter';
if (!FormData.prototype.entries) {
	import('formdata-polyfill');
}

if (!Array.prototype.flat) {
	import('array-flat-polyfill');
}
