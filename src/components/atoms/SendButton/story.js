import React from 'react';
import { storiesOf } from '@storybook/react';

import SendButton from './';

storiesOf('1. Atoms / SendButton', module)
	.add('SendButton', () => <SendButton />);
