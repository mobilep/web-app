import React from 'react';
import { shallow } from 'enzyme';

import PrimaryNavigationItem from './PrimaryNavigationItem';

describe('Atom - PrimaryNavigationItem', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<PrimaryNavigationItem>
				Item
			</PrimaryNavigationItem>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
