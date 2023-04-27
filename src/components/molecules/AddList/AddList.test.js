import React from 'react';
import { shallow } from 'enzyme';

import AddList from './AddList';
import { allUsers, users } from './testData';

describe('Molecule - AddList', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<AddList
				allItems={allUsers}
				items={users}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
