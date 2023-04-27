import React from 'react';
import { shallow } from 'enzyme';

import ScenarioUserCounter from './ScenarioUserCounter';

describe('Atom - ScenarioUserCounter', () => {

	it('Should render', () => {
		const wrapper = shallow(<ScenarioUserCounter count={5} text='Text' />);
		expect(wrapper).toMatchSnapshot();
	});

});
