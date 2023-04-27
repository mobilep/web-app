import React from 'react';
import { shallow } from 'enzyme';

import UserSearchSelect from './UserSearchSelect';
import { userItems } from './testData';

describe('Molecule - UserSearchSelect', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<UserSearchSelect
				items={userItems}
				placeholder='Placeholder'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
