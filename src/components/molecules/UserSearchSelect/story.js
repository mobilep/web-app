/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import UserSearchSelect from './UserSearchSelect';
import { userItems } from './testData';

storiesOf('2. Molecules / UserSearchSelect', module)
	.add('UserSearch', withState({ items: [] })(({ store }) => (
		<UserSearchSelect {...store.state} onSearch={(value) => {
			const items = userItems.filter(({ fullName, initials }) =>
				fullName.toLowerCase().includes(value) || initials.toLowerCase().includes(value));
			store.set({ items });
		}} />
	)));
