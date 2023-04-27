import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';

import PrimaryNavigation from './PrimaryNavigation';
import texts from '../../../constants/content';

const { common, primaryNav } = texts.en;

storiesOf('2. Molecules / PrimaryNavigation', module)
	.addDecorator(StoryRouter())
	.add('default', () => (
		<div style={{ width: '64px', height: '850px' }}>
			<PrimaryNavigation
				content={{ common, primaryNav }}
				onSignOut={action('Sign out click')}
				unreadInboxCount={number('Unread count', 4)}
			/>
		</div>
	));
