import React from 'react';
import { shallow } from 'enzyme';

import SecondaryNavigation from './SecondaryNavigation';

describe('Atom - SecondaryNavigation', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<SecondaryNavigation
				headerText='Header text'
			>
				Items
			</SecondaryNavigation>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render with an action button', () => {
		const wrapper = shallow(
			<SecondaryNavigation
				headerText='Header text'
				actionButton={<div />}
			>
				Items
			</SecondaryNavigation>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
