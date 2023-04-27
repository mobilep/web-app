import React from 'react';
import { shallow } from 'enzyme';

import AppendableCriteriaList from './AppendableCriteriaList';

describe('Organisms - AppendableCriteriaList', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<AppendableCriteriaList availableCriteriaItems={[]} />
		);
		expect(wrapper).toMatchSnapshot();
	});

});
