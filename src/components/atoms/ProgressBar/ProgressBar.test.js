import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from './ProgressBar';

describe('Atom - ProgressBar', () => {

	it('Should render', () => {
		const wrapper = shallow(<ProgressBar value={15} />);
		expect(wrapper).toMatchSnapshot();
	});

});
