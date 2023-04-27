/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';

import AppendableUserList from './AppendableUserList';
import { userItems } from './testData';

storiesOf('3. Organisms / AppendableUserList', module)
	.add('AppendableUserList', withState({ searchUserItems: [], userItems: [] })(({ store }) => (
		<AppendableUserList {...store.state}
			onUserRemove={(userId) => {
				const userItems = store.state.userItems.filter(({ id }) => id !== userId);
				store.set({ userItems });
			}}
			onUserSelect={(user) => {
				store.set(store.state.userItems.push(user));
			}}
			onUserSearch={(value) => {
				const searchUserItems = userItems.filter(({ fullName, initials }) =>
					fullName.toLowerCase().includes(value) || initials.toLowerCase().includes(value));
				store.set({ searchUserItems });
			}} />
	)));
