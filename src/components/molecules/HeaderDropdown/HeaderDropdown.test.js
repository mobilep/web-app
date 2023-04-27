import React from 'react';
import { shallow } from 'enzyme';

import HeaderDropdown from './HeaderDropdown';

import buttonsProps from './testData';

describe('Molecule - HeaderDropdown', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<HeaderDropdown buttonsProps={ buttonsProps} />
		);
		expect(wrapper).toMatchSnapshot();
	});

});
