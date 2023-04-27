import React from 'react';
import { storiesOf } from '@storybook/react';
import ReportValue from './ReportValue';
import { StarIcon } from '../../../icons';

storiesOf('1. Atoms / ReportValue', module)
	.add('Plain value', () => (
		<ReportValue
			value={5}
			label='Score'
		/>
	))
	.add('Value with max value', () => (
		<ReportValue
			value={3}
			maxValue={5}
			label='Score'
		/>
	))
	.add('Value with icon', () => (
		<ReportValue
			value={3}
			maxValue={5}
			label='Score'
			icon={<StarIcon />}
		/>
	));
