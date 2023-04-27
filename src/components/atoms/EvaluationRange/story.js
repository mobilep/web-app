import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs/react';
import EvaluationRange from './EvaluationRange';

storiesOf('1. Atoms / EvaluationRange', module)
	.add('Evaluation Range', () => (
		<EvaluationRange
			start={number('start', 1)}
			end={number('end', 5)}
			value={number('value', 3)}
			onChange={action('onChange')}
		/>
	));
