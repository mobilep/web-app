import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { boolean } from '@storybook/addon-knobs';
import TeamComponent from './TeamComponent';
import { props } from './testData';

storiesOf('3. Organisms / TeamComponent', module)
	.addDecorator(StoryRouter())
	.add('default', () =>
		(
			<TeamComponent
				{ ...props }
				createMode={boolean('Create mode', false)}
				editMode={boolean('Edit mode', false)}
			/>
		));
