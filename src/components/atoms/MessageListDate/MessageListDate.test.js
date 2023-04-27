import React from 'react';
import { shallow } from 'enzyme';

import MessageListDate from './MessageListDate';

describe('Atom - MessageListDate', () => {

	it('Should render', () => {
		const wrapper = shallow(<MessageListDate timestamp={1530708467971} />);
		expect(wrapper).toMatchSnapshot();
	});

});

