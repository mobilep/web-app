import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SelectList from './SelectList';
import { items } from './testData';

storiesOf('2. Molecules / SelectList', module)
	.add('SelectList', () => (
		<SelectList items={items} selectedItem={1} onSelect={action('onSelect')} />
	));
