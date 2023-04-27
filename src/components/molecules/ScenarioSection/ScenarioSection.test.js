import React from 'react';
import { shallow } from 'enzyme';

import ScenarioSection from './ScenarioSection';

describe('Molecule - ScenarioSection', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<ScenarioSection
				counter={5}
				header='Header'
			>
				Section content
			</ScenarioSection>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
