import React from 'react';
import { storiesOf } from '@storybook/react';

import Chip from './Chip';

storiesOf('1. Atoms / Chip', module)
	.add('Chip', () => (
		<div>
			<Chip>User 1</Chip>
		</div>
	));
