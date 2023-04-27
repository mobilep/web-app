import React from 'react';
import { shallow } from 'enzyme';
import ProfileHeader from './ProfileHeader';

import { props } from './testData';

describe('Atom - Profileheader', () => {
	it('Should render', () => {
		const wrapper = shallow(<ProfileHeader
			{ ...props }
		/>);
		expect(wrapper).toMatchSnapshot();
	});
});
