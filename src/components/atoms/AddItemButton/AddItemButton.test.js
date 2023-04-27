import React from 'react';
import { shallow } from 'enzyme';

import AddItemButton from './AddItemButton';

describe('Atom - AddItemButton', () => {

	it('Should render', () => {
		const wrapper = shallow(<AddItemButton />);
		expect(wrapper).toMatchSnapshot();
	});

});

