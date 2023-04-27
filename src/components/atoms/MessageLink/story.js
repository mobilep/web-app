import React from 'react';
import { storiesOf } from '@storybook/react';

import MessageLink from './MessageLink';

storiesOf('1. Atoms / MessageLink', module)
	.add('MessageLink Google Drive', () => (
		<MessageLink url='https://docs.google.com/e233232' />
	))
	.add('MessageLink Dropbox', () => (
		<MessageLink url='https://dropbox.com/feer454' />
	));
