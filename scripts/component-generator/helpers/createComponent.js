const { mkdirSync, writeFileSync } = require('fs');
const { join } = require('path');

const templates = require('../templates');

module.exports = ({ componentDir, componentName, templateType }) => {
	mkdirSync(componentDir);
	writeFileSync(join(componentDir, `${componentName}.js`), templates(templateType)(componentName));
	writeFileSync(join(componentDir, 'index.js'), `export { default } from './${componentName}';\n`);
	writeFileSync(join(componentDir, 'story.js'), '');
	writeFileSync(join(componentDir, 'styles.css'), '');
};
