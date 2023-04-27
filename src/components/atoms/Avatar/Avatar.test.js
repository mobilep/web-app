import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './Avatar';
import { AVATAR_SIZES } from './constants';

const SIZES_ARRAY = Object.values(AVATAR_SIZES);

const INITIALS = 'TM';

describe('Atom - Avatar', () => {

	SIZES_ARRAY.forEach((size) => {
		it(`Should render with size '${size}'`, () => {
			const wrapper = shallow(<Avatar size={size} initials={INITIALS} color='#808080' />);
			expect(wrapper).toMatchSnapshot();
		});
	});

	it('Should render with an image', () => {
		const wrapper = shallow(<Avatar initials={INITIALS} color='#808080' />);
		wrapper.setState({ isImgValid: true });
		expect(wrapper.text()).not.toEqual(INITIALS);
	});

});

