import React from 'react';
import { storiesOf } from '@storybook/react';

import SendAgo from './SendAgo';

storiesOf('1. Atoms / SendAgo', module)
	.add('SendAgo', () => (
		<SendAgo
			date={new Date('2019-10-22')}
		/>
	));
