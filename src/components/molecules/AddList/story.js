import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';

import AddList from './AddList';
import { allUsers, users } from './testData';

const props = { allUsers, users };

storiesOf('2. Molecules / AddList', module)
	.add('with static list', withState(props)(({ store }) => {

		const onItemRemove = (id) => {
			props.users = [...props.users].filter((user) => (user.id !== id));
			store.set({ users: props.users });
		};

		const onItemAdd = (id) => {
			props.allUsers = [...props.allUsers].filter((user) => {
				if (user.id === id) {
					props.users.push(user);

					store.set({ users: props.users });
				}

				return user.id !== id;
			});

			store.set({ allUsers: props.allUsers });
		};

		return (
			<AddList
				items={store.state.users}
				allItems={store.state.allUsers}
				onItemRemove={onItemRemove}
				onItemAdd={onItemAdd}
			/>
		);
	}));
