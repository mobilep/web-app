export const EventEmitter = {
	dispatch (event, data) {
		const customEvent = new CustomEvent(event, { detail: data });
		document.dispatchEvent(customEvent);
	},
	subscribe (event, cb) {
		document.addEventListener(event, cb);
	},
	unsubscribe (event, cb) {
		document.removeEventListener(event, cb);
	},
};
