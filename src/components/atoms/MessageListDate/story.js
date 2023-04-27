import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs/react';

import MessageListDate from './MessageListDate';

const timestamp = new Date().getTime();

storiesOf('1. Atoms / MessageListDate', module)
	.add('default', () => (
		<MessageListDate
			timestamp={number('Timestamp', timestamp)}
		/>
	));
