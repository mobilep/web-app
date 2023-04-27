import React from 'react';
import { shallow } from 'enzyme';

import DropArea from './DropArea';

describe('Atom - DropArea', () => {

	it('Should render', () => {
		const wrapper = shallow(<DropArea text='Text' />);
		expect(wrapper).toMatchSnapshot();
	});

});

