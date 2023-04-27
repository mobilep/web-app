import React from 'react';
import { storiesOf } from '@storybook/react';

import RemoveItemButton from './RemoveItemButton';

storiesOf('1. Atoms / RemoveItemButton', module)
	.add('removeItem button', () => <RemoveItemButton />);
