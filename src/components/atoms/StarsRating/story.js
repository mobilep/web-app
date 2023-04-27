import React from 'react';
import { storiesOf } from '@storybook/react';

import StarsRating from './';

storiesOf('1. Atoms / StarsRating', module)
	.add('StarsRating 2', () => (
		<StarsRating value={2} />
	))
	.add('StarsRating 3.6', () => (
		<StarsRating value={3.6} />
	));
