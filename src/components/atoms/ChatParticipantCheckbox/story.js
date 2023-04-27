import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatParticipantCheckbox from './ChatParticipantCheckbox';
import testData from './testData';

storiesOf('1. Atoms / ChatParticipantCheckbox', module)
	.add('ChatParticipantCheckbox', () => (
		<ChatParticipantCheckbox participant={testData.user}	/>
	));
