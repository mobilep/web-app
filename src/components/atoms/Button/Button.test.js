import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Atom - Button', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<Button>
				Text
			</Button>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render anchor tag', () => {
		const wrapper = shallow(
			<Button to='href'>
				Text
			</Button>
		);
		expect(wrapper).toMatchSnapshot();
	});

});

