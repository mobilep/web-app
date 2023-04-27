
const { lstatSync, readdirSync, writeFileSync } = require('fs');
const { join, resolve } = require('path');

const isDirectory = (typeDir) => (source) => lstatSync(resolve(typeDir, source)).isDirectory();

module.exports = (typeDir) => {
	let newTypeDirIndexData = readdirSync(typeDir)
		.filter(isDirectory(typeDir))
		.map((componentName) => `export { default as ${componentName} } from './${componentName}';`)
		.join('\n');
	newTypeDirIndexData += '\n';
	writeFileSync(join(typeDir, 'index.js'), newTypeDirIndexData);
};
