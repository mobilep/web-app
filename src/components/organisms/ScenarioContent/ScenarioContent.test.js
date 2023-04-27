import React from 'react';
import { shallow } from 'enzyme';
import ScenarioContent from './ScenarioContent';
import constants from '../../../constants';
const { content } = constants;

describe('Organism - ScenarioContent', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<ScenarioContent content={content.en.scenarios} />
		);
		expect(wrapper).toMatchSnapshot();
	});

});
