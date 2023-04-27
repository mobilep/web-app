import React from 'react';
import { storiesOf } from '@storybook/react';

import ScenarioCreationTour from './ScenarioCreationTour';

storiesOf('2. Molecules / ScenarioCreationTour', module)
	.add('ScenarioCreationTour', () => (
		<ScenarioCreationTour />
	));
