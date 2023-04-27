import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInputWithIcon from './TextInputWithIcon';
import { GroupChatIcon } from '../../../icons';

storiesOf('1. Atoms / TextInputWithIcon', module)
	.add('TextInputWithIcon', () => (
		<div>
			<TextInputWithIcon
				onChange={() => {}}
				value={'Chat name'}
				icon={<GroupChatIcon /> }
			/>
		</div>
	));
