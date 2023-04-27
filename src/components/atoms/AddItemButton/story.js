import React from 'react';
import { storiesOf } from '@storybook/react';

import AddItemButton from './AddItemButton';

storiesOf('1. Atoms / AddItemButton', module)
	.add('addItem button', () => <AddItemButton />);
