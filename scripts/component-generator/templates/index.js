const component = require('./component');
const functional = require('./functional');

module.exports = (templateType) => {
	if (templateType === 'functional') {
		return functional;
	}
	return component;
};
