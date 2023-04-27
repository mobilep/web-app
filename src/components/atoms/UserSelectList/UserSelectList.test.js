import React from 'react';
import { shallow } from 'enzyme';

import UserSelectList from './UserSelectList';
import { items } from './testData';

describe('Atom - UserSelectList', () => {

	it('Should render', () => {
		const wrapper = shallow(<UserSelectList
			items={items}
			selectInput={() => {}}
		/>);
		expect(wrapper).toMatchSnapshot();
	});

});
