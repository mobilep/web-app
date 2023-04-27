import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs/react';
import MessageGroup from './MessageGroup';
import testData from './testData';

storiesOf('2. Molecules / MessageGroup', module)
	.add('default', () => (
		<MessageGroup
			author={testData.author}
			incoming={boolean('Incoming', true)}
			last={boolean('Last', true)}
			messages={testData.messages}
			time={number('Time', testData.time)}
			onContextMenu={action('onContextMenu')}
			onVideoMessageCancelUpload={action('onVideoMessageCancelUpload')}
			onVideoMessagePlay={action('onVideoMessagePlay')}
		/>
	));
