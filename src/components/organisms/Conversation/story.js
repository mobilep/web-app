import React from 'react';
import { storiesOf } from '@storybook/react';
import Conversation from './Conversation';
import testData from './testData';

storiesOf('3. Organisms / Conversation', module)
	.add('default', () => (
		<Conversation data={testData} />
	));
