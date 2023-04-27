import React from 'react';
import { shallow } from 'enzyme';

import RemoveItemButton from './RemoveItemButton';

describe('Atom - RemoveItemButton', () => {

	it('Should render', () => {
		const wrapper = shallow(<RemoveItemButton />);
		expect(wrapper).toMatchSnapshot();
	});

});
