const pluck = (key) => (obj) => {
	// eslint-disable-next-line no-undefined
	if (!obj) return undefined;

	return obj[key];
};

export default {
	pluck,
};
