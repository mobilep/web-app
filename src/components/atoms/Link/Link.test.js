import React from 'react';
import { shallow } from 'enzyme';

import Link from './Link';

describe('Atom - Link', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<Link to='morrow'>
				Link text
			</Link>
		);
		expect(wrapper).toMatchSnapshot();
	});

});

