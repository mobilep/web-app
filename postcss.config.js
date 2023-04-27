module.exports = {
	plugins: {
		'postcss-custom-properties': {
			importFrom: 'src/styles/variables.css',
			preserve: false,
		},
	},
};
