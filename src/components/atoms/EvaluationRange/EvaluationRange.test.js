import React from 'react';
import { shallow } from 'enzyme';

import EvaluationRange from './EvaluationRange';

describe('Atom - EvaluationRange', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<EvaluationRange />
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render with value', () => {
		const wrapper = shallow(
			<EvaluationRange value={2} />
		);
		expect(wrapper).toMatchSnapshot();
	});

});

