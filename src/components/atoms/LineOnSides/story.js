import React from 'react';
import { storiesOf } from '@storybook/react';

import LineOnSides from './LineOnSides';

storiesOf('1. Atoms / LineOnSides', module)
	.add('LineOnSides', () => (
		<LineOnSides text='8 new messages' />
	));
