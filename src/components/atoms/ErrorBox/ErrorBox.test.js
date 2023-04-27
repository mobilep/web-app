import React from 'react';
import { shallow } from 'enzyme';

import ErrorBox from './ErrorBox';

describe('Atom - ErrorBox', () => {

	it('Should render', () => {
		const wrapper = shallow(<ErrorBox message='Message' />);
		expect(wrapper).toMatchSnapshot();
	});

});

