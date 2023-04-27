import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import TeamsHeader from './TeamsHeader';

storiesOf('2. Molecules / TeamsHeader', module)
	.add('default', () => (<TeamsHeader
		createMode={boolean('Create mode', false)}
		editMode={boolean('Edit mode', false)}
		header={text('Name', 'Salesforce Team')}
		namePlaceholder={text('Placeholder', 'Enter group title…')}
		buttonCancelText={boolean('Create mode', false) || boolean('Edit mode', false) ? 'Cancel' : 'Delete'}
		buttonPrimaryText={boolean('Create mode', false) || boolean('Edit mode', false) ? 'Save' : 'Edit'}
		onCancelClick={() => { }}
		onPrimaryClick={() => { }} />
	));
