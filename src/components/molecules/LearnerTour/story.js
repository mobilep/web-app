import React from 'react';
import { storiesOf } from '@storybook/react';

import LearnerTour from './LearnerTour';

storiesOf('2. Molecules / LearnerTour', module)
	.add('LearnerTour', () => (
		<LearnerTour />
	));
