import React from 'react';
import { storiesOf } from '@storybook/react';
import { InboxIcon } from '../../../icons';

import MessageBoxBaseButton from './MessageBoxBaseButton';

storiesOf('1. Atoms / MessageBoxBaseButton', module)
	.add('MessageBoxBaseButton', () => (
		<MessageBoxBaseButton>
			<InboxIcon />
		</MessageBoxBaseButton>
	));
