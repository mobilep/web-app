import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import TeamsCheckbox from './TeamsCheckbox';

storiesOf('1. Atoms / TeamsCheckbox', module)
	.add('default', () =>
		(<TeamsCheckbox
			avatarInitials='NN'
			avatar='https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'
			avatarBgColor='#F3423C'
			name='Myra Holt'
			editMode={boolean('Edit mode', false)}
		/>));
