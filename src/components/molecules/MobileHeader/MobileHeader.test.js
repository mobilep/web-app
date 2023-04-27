import React from 'react';
import { shallow } from 'enzyme';

import MobileHeader from './MobileHeader';

import MobileHeaderProps from './testData';

describe('Molecule - MobileHeader', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<MobileHeader {...MobileHeaderProps} />
		);
		expect(wrapper).toMatchSnapshot();
	});

});
