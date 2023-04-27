/* eslint-disable no-console */
const { existsSync } = require('fs');
const { resolve } = require('path');
const inquirer = require('inquirer');

const processArgs = require('./helpers/processArgs');
const createComponent = require('./helpers/createComponent');
const updateIndex = require('./helpers/updateIndex');

const DIR = './src/components';
const TYPES = {
	ATOM: 'atom',
	MOLECULE: 'molecule',
	ORGANISM: 'organism',
};

const { typeArg, nameArg } = processArgs(TYPES);

// Ensure we're in the root directory of the project.
if (!existsSync(DIR)) {
	console.log('\nError: Please run this script from the root directory.\n');
	process.exit(1);
}

inquirer
	.prompt([
		{
			type: 'list',
			name: 'componentType',
			message: 'What type of component do you want to add?',
			choices: [
				{ name: 'Atom', value: TYPES.ATOM },
				{ name: 'Molecule', value: TYPES.MOLECULE },
				{ name: 'Organism', value: TYPES.ORGANISM },
			],
			// Don't ask this question when a flag was passed.
			when: !typeArg,
		},
		{
			type: 'input',
			name: 'componentName',
			message: ({ componentType = typeArg }) => `What should the new ${componentType} be named?`,
			validate: (input) => input !== '',
			// Don't ask this question when a string was passed alongside a flag.
			when: !nameArg,
		},
	])
	.then(({ componentName = nameArg, componentType = typeArg }) => {
		const typeDir = resolve(DIR, `${componentType}s`);
		const componentDir = resolve(typeDir, componentName);

		// Create component type folder if one doesn't exist
		if (!existsSync(componentDir)) {
			createComponent({ componentDir, componentName });
		} else {
			console.log(`\nError: ${componentType === 'molecule'
				? 'A'
				: 'An'
			} ${componentType} with the name '${componentName}' already.\n`);
			process.exit(1);
		}

		// Update the componentType index file.
		updateIndex(typeDir);
	});
