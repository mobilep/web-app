import React from 'react';
import { storiesOf } from '@storybook/react';

import ScenarioControls from './ScenarioControls';

storiesOf('2. Molecules / ScenarioControls', module)
	.add('ScenarioControls', () => (
		<ScenarioControls
			buttonPrimaryText='Save'
			buttonSecondaryText='Cancel'
			mode='editMode'
			draft={true}
			updateDate={'Saved 04/11/2019'}
		/>
	));
