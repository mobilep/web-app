import React from 'react';
import { shallow } from 'enzyme';

import MessageGroup from './MessageGroup';
import testData from './testData';

describe('Molecule - MessageGroup', () => {

	it('Should render', () => {
		const wrapper = shallow(<MessageGroup {...testData} />);
		expect(wrapper).toMatchSnapshot();
	});

});
