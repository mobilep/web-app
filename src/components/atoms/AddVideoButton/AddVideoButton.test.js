import React from 'react';
import { shallow } from 'enzyme';

import AddVideoButton from './AddVideoButton';

describe('Atom - AddVideoButton', () => {
	it('Should render', () => {
		const wrapper = shallow(<AddVideoButton />);
		expect(wrapper).toMatchSnapshot();
	});
});
