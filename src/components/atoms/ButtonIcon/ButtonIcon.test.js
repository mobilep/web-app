import React from 'react';
import { shallow } from 'enzyme';

import ButtonIcon from './ButtonIcon';

describe('Atom - ButtonIcon', () => {

	it('Should render', () => {
		const wrapper = shallow(<ButtonIcon icon={<div />} />);
		expect(wrapper).toMatchSnapshot();
	});

});

