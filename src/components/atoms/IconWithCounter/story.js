import React from 'react';
import { storiesOf } from '@storybook/react';
import { PrimaryNavigationItem, IconWithCounter } from '..';
import { number, text } from '@storybook/addon-knobs/react';
import StoryRouter from 'storybook-react-router';
import { ScenariousIcon } from '../../../icons';

storiesOf('1. Atoms / IconWithCounter', module)
	.addDecorator(StoryRouter())
	.add('default',
		() => (<div style={{ width: '64px', height: '850px' }}>
			<PrimaryNavigationItem to={text('to', '/someUrl')}>
				<IconWithCounter icon={<ScenariousIcon />} counter={number('Unread count', 4)} />
				<span>{text('text', 'INBOX')}</span>
			</PrimaryNavigationItem>
		</div>));
