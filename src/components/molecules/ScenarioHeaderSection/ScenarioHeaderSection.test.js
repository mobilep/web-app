import React from 'react';
import { shallow } from 'enzyme';

import ScenarioHeaderSection from './ScenarioHeaderSection';

describe('Molecule - ScenarioHeaderSection', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<ScenarioHeaderSection
				thumbnailUrl='URL'
				header='Header'
				description='Description'
				buttonCancelText='Cancel'
				buttonPrimaryText='Primary'
				count={5}
				counterText='Counter'
				practiceMode
				editMode
				createMode
				addText='Add'
				namePlaceholder='Name'
				descriptionPlaceholder='Describe'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
