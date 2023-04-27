import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import ScenarioEmptyArea from './ScenarioEmptyArea';

storiesOf('1. Atoms / ScenarioEmptyArea', module)
	.add('default', () => <ScenarioEmptyArea text={text('Text', 'No scenarios yet')} />);
