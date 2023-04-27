import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import UserSelectList from './UserSelectList';
import { items } from './testData';

storiesOf('1. Atoms / UserSelectList', module)
	.add('UserSelectList', () => (
		<UserSelectList items={items} onSelect={action('onSelect')} />
	));
