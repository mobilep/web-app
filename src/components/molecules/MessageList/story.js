import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MessageList from './MessageList';
import testData from './testData';

storiesOf('2. Molecules / MessageList', module)
	.add('default', () => (
		<MessageList
			{...testData}
			onCancelUploadClick={action('onCancelUploadClick')}
			onPlayButtonClick={action('onPlayButtonClick')}
			onDeleteMessage={action('onDeleteMessage')}
		/>
	))
	.add('empty', () => (
		<MessageList
			{...testData}
			messages={[]}
		/>
	));
