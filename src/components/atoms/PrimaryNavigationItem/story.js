import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import PrimaryNavigationItem from './PrimaryNavigationItem';
import StoryRouter from 'storybook-react-router';
import { InboxIcon } from '../../../icons';

storiesOf('1. Atoms / PrimaryNavigationItem', module)
	.addDecorator(StoryRouter())
	.add('default',
		() => (<div style={{ backgroundColor: 'red', width: '64px' }}>
			<PrimaryNavigationItem to={text('to', '/someUrl')}>
				<InboxIcon />
				<span>{text('text', 'INBOX')}</span>
			</PrimaryNavigationItem>
		</div>));
