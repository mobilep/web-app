import React from 'react';
import { shallow } from 'enzyme';

import ButtonWithArrow from './ButtonWithArrow';

describe('Atom - ButtonWithArrow', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<ButtonWithArrow>
				Label
			</ButtonWithArrow>
		);
		expect(wrapper).toMatchSnapshot();
	});

});

