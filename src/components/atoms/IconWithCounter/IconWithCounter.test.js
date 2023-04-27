import React from 'react';
import { shallow } from 'enzyme';

import IconWithCounter from './IconWithCounter';

describe('Atom - IconWithCounter', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<IconWithCounter
				counter={1}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should not show more than nine (9) unread inboxes', () => {
		const wrapper = shallow(
			<IconWithCounter
				counter={10}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should not show the counter when there are no unread messages', () => {
		const wrapper = shallow(
			<IconWithCounter
				counter={0}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
