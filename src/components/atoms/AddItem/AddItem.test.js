import React from 'react';
import { shallow } from 'enzyme';

import AddItem from './AddItem';

describe('Atom - AddItem', () => {

	it('Should render', () => {
		const wrapper = shallow(<AddItem />);
		expect(wrapper).toMatchSnapshot();
	});

});
