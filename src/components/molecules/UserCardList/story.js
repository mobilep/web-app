import React from 'react';
import { storiesOf } from '@storybook/react';

import UserCardList from './UserCardList';
import { CARD_TYPES } from '../../molecules/UserCard/constants';
import { userList, list } from './testData';

storiesOf('2. Molecules / UserCardList', module)
	.add('new message user list', () => (
		<UserCardList listData={userList} type={CARD_TYPES.NEW_MESSAGE_CARD} />
	))
	.add('conversation card list', () => (
		<UserCardList
			listData={list}
			type={CARD_TYPES.CONVERSATION_CARD} />
	));
