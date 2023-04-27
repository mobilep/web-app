import React from 'react';
import { shallow } from 'enzyme';

import MultilineEllipsis from './MultilineEllipsis';

describe('Atom - MultilineEllipsis', () => {

	it('Should render', () => {
		const wrapper = shallow(<MultilineEllipsis textContent='Text' />);
		expect(wrapper).toMatchSnapshot();
	});

});
