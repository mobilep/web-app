import React from 'react';
import { shallow } from 'enzyme';

import UserLabel from './UserLabel';

describe('Atom - UserLabel', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<UserLabel
				fullName='Xena Warrior-Princess'
				initials='XW'
				imgUrl='url'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
