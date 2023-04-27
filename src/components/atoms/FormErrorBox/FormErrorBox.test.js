import React from 'react';
import { shallow } from 'enzyme';

import FormErrorBox from './FormErrorBox';

describe('Atom - FormErrorBox', () => {

	it('Should render', () => {
		const wrapper = shallow(<FormErrorBox message='Message' />);
		expect(wrapper).toMatchSnapshot();
	});

});

