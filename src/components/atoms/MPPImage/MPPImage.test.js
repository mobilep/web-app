import React from 'react';
import { shallow } from 'enzyme';

import MPPImage from './MPPImage';

describe('Atom - MPPImage', () => {

	it('Should render', () => {
		const wrapper = shallow(<MPPImage imageUrl='' />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render with valid image', () => {
		const wrapper = shallow(<MPPImage imageUrl='' />);
		wrapper.setState({ isImgValid: true });
		expect(wrapper).toMatchSnapshot();
	});

});

