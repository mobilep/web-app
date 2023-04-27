import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileComponent from './ProfileComponent';
import { props } from './testData';

storiesOf('3. Organisms / ProfileComponent', module)
	.add('default', () =>
		(<ProfileComponent
			{ ...props }
			onLoadUserInfo={() => {}}
		/>));
