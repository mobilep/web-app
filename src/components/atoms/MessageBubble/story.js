import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import MessageBubble from './MessageBubble';

const messageTypeLabel = 'Message type : single/last';

const incomingLabel = 'Incoming';

storiesOf('1. Atoms / MessageBubble', module)
	.add('with text', () =>
		(<div><MessageBubble singleOrLast={boolean(messageTypeLabel, true)}
			incoming={boolean(incomingLabel, false)}>
			{text('Content',
				'Hello, my name is Kate! This is simple example of MessageBubble component! Thank you!')}
		</MessageBubble></div>)
	);
