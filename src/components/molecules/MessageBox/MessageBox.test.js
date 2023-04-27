import React from 'react';
import { shallow } from 'enzyme';
import mockMatchMedia from '../../../helpers/test/matchMedia';

import MessageBox from './MessageBox';

describe('Molecule - MessageBox', () => {

	beforeAll(() => mockMatchMedia());

	it('Should render', () => {
		const wrapper = shallow(<MessageBox />);
		expect(wrapper).toMatchSnapshot();
	});

});
