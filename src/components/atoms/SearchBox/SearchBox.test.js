import React from 'react';
import { shallow } from 'enzyme';

import SearchBox from './SearchBox';

describe('Atom - SearchBox', () => {

	it('Should render', () => {
		const wrapper = shallow(<SearchBox name='Name' placeholder='Search' />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render with category', () => {
		const wrapper = shallow(<SearchBox name='Name' placeholder='Search' category='Category' />);
		expect(wrapper).toMatchSnapshot();
	});

});
