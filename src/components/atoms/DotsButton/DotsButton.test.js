import React from 'react';
import { shallow } from 'enzyme';

import DotsButton from './DotsButton';

describe('Atom - DotsButton', () => {

	it('Should render', () => {
		const wrapper = shallow(<DotsButton />);
		expect(wrapper).toMatchSnapshot();
	});

});

