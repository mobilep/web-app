import React from 'react';
import { storiesOf } from '@storybook/react';
import LandscapeNotification from './LandscapeNotification';

storiesOf('1. Atoms / LandscapeNotification', module)
	.add('LandscapeNotification', () => {
		return (
			<LandscapeNotification />
		);
	});
