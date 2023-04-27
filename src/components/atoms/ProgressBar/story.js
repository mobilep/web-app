import React from 'react';
import { storiesOf } from '@storybook/react';
import ProgressBar from './ProgressBar';

const props = {
	value: 16,
};

storiesOf('1. Atoms / ProgressBar', module)
	.add('ProgressBar', () => (
		<ProgressBar { ...props } />
	));
