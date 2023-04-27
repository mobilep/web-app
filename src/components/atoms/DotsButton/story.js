import React from 'react';
import { storiesOf } from '@storybook/react';

import DotsButton from './DotsButton';

storiesOf('1. Atoms / DotsButton', module)
	.add('dots button', () => <DotsButton />);
