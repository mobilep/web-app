import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileHeader from './ProfileHeader';

import { props } from './testData';

storiesOf('1. Atoms / ProfileHeader', module)
	.add('default', () => (<ProfileHeader
		{ ...props }
	/>));

