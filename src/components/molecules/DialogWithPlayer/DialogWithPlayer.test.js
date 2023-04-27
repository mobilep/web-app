import React from 'react';
import { shallow } from 'enzyme';

import DialogWithPlayer from './DialogWithPlayer';

describe('Molecule - DialogWithPlayer', () => {

	it('Should render', () => {
		const wrapper = shallow(<DialogWithPlayer streamUrl='streamUrl' />);
		expect(wrapper).toMatchSnapshot();
	});

});
