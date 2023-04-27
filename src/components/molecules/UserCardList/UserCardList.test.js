import React from 'react';
import { shallow } from 'enzyme';

import UserCardList from './UserCardList';
import { CARD_TYPES } from '../../molecules/UserCard/constants';
import { userList } from './testData';

describe('Molecule - UserCardList', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<UserCardList
				listData={userList}
				type={CARD_TYPES.NEW_MESSAGE_CARD}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
