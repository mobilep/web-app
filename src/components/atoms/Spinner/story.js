import React from 'react';
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs/react';

import Spinner from './';

storiesOf('1. Atoms / Spinner', module)
	.add('Spinner', () => (
		<Spinner color={color('Color', 'red')} />
	));
