import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs/react';
import ConversationHeader from './ConversationHeader';

storiesOf('1. Atoms / ConversationHeader', module)
	.add('Conversation Header', () => (
		<ConversationHeader
			title={text('title', 'Alvin Lane')}
			actionButtonLabel={text('button label', 'Evaluate')}
			onActionButtonClick={action('onActionButtonClick')}
		/>
	));
