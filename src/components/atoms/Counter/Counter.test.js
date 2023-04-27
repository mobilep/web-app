import React from 'react';
import { shallow } from 'enzyme';

import Counter from './Counter';

describe('Atom - Counter', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<Counter>
				{15}
			</Counter>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
