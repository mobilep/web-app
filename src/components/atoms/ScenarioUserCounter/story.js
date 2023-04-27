import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs/react';
import ScenarioUserCounter from './ScenarioUserCounter';

storiesOf('1. Atoms / ScenarioUserCounter', module)
	.add('default', () => (
		<ScenarioUserCounter
			count={number('Count', 5)}
			text='people'
		/>
	));
