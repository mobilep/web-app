import React from 'react';
import { shallow } from 'enzyme';

import ScenarioEmptyArea from './ScenarioEmptyArea';

describe('Atom - ScenarioEmptyArea', () => {

	it('Should render', () => {
		const wrapper = shallow(<ScenarioEmptyArea text='Text' />);
		expect(wrapper).toMatchSnapshot();
	});

});
