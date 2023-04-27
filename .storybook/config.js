import { configure, addDecorator } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { withKnobs } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';

import '../src/index.css';
import '../public/css/storybook.css';

const backgroundColors = [
	{ name: 'almostBlack', value: 'rgb(32, 34, 34)' },
	{ name: 'blue', value: 'rgb(60, 155, 243)'},
	{ name: 'darkRed', value: 'rgb(187, 20, 15)'},
	{ name: 'pinkRed', value: 'rgb(251, 127, 120)'},
	{ name: 'radicalRed', value: 'rgb(250, 56, 77)'},
	{ name: 'sunsetOrange', value: 'rgb(250, 81, 60)'},
	{ name: 'tomatoRed', value: 'rgb(243, 66, 60)'},
];

setOptions({
	name: 'Mobile Practice',
	url: 'https://github.com/pugsley/mobilep-web',
});

addDecorator(withKnobs);

addDecorator(backgrounds(backgroundColors));

const req = require.context('../src', true, /story\.js$/);
const loadStories = () => req.keys().forEach(req);
configure(loadStories, module);
