import React from 'react';
import { storiesOf } from '@storybook/react';

import GroupChatHeader from './GroupChatHeader';
import { participants } from './testData';

storiesOf('2. Molecules / GroupChatHeader', module)
	.add('Participant view', () => (
		<GroupChatHeader
			chatName='Scenario Name'
			participants={participants}
		/>
	))
	.add('Moderator view', () => (
		<GroupChatHeader
			chatName='Scenario Name'
			participants={participants}
			isModerator={true}
		/>
	));
