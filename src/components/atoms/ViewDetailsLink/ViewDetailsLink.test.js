import React from 'react';
import { shallow } from 'enzyme';

import ViewDetailsLink from './ViewDetailsLink';

describe('Atom - ViewDetailsLink', () => {
	it(`Should render`, () => {
		const wrapper = shallow(
			<ViewDetailsLink to='someTestUrl' />
		);
		expect(wrapper).toMatchSnapshot();
	});

});
