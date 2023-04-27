import React from 'react';
import { storiesOf } from '@storybook/react';

import TimerDisplay from './TimerDisplay';

storiesOf('1. Atoms / TimerDisplay', module)
	.add('TimerDisplay', () => <TimerDisplay passed={123} />);
