import React from 'react';
import { storiesOf } from '@storybook/react';

import WelcomeTour from './WelcomeTour';

storiesOf('2. Molecules / WelcomeTour', module)
	.add('WelcomeTour', () => (
		<WelcomeTour />
	));
