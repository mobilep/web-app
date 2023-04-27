const reactAppRewirePostcss = require('react-app-rewire-postcss');

module.exports = function override (config) {
	return reactAppRewirePostcss(config);
};
