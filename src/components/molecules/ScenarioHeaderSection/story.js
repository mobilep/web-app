import React from 'react';
import { storiesOf } from '@storybook/react';
import { selectV2 } from '@storybook/addon-knobs';
import constants from '../../../constants';
import ScenarioHeaderSection from './ScenarioHeaderSection';

const { common } = constants;
const { modes: { EDIT_MODE, CREATE_MODE, PRACTICE_MODE } } = common;

storiesOf('2. Molecules / ScenarioHeaderSection', module)
	.add('default', () => (<ScenarioHeaderSection
		thumbnailUrl='http://via.placeholder.com/350x150/00423b'
		header='Discovery Questioning Skills'
		description='Practice asking discovery questions when meeting someone for the first time.'
		buttonSecondaryText='Delete'
		buttonPrimaryText='Edit'
		mode={selectV2('modes', {
			edit: EDIT_MODE,
			create: CREATE_MODE,
			practice: PRACTICE_MODE,
		}, CREATE_MODE)}
		count={5}
		counterText='people'
		addText='Add video'
		namePlaceholder='Give the scenario a name…'
		descriptionPlaceholder='Describe the scenario…'
	/>));
