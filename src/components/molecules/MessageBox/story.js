import React from 'react';
import { storiesOf } from '@storybook/react';

import MessageBox from './MessageBox';

/* eslint-disable no-alert */
const props = {
	placeholder: 'Send message...',
	onMessageSend: () => alert('Message Send'),
};

storiesOf('2. Molecules / MessageBox', module)
	.add('MessageBox',
		() => (
			<div style={{ marginTop: '150px' }}>
				<MessageBox { ...props } />
			</div>
		))
	.add('MessageBox With Onboarding tooltip',
		() => (
			<div style={{ marginTop: '150px' }}>
				<MessageBox
					{ ...props }
				/>
			</div>
		));
