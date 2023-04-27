module.exports = (baseConfig, env, defaultConfig) => {
	const cssRule = defaultConfig.module.rules.find(r => r.test.toString() === /\.css$/.toString());
	const postCssUse = cssRule.use.find(u => u.loader && u.loader.indexOf('postcss-loader') > -1);
	delete postCssUse.options;

	return defaultConfig;
};
