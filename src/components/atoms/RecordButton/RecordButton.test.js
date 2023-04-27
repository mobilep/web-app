import React from 'react';
import { shallow } from 'enzyme';

import RecordButton from './RecordButton';

describe('Atom - RecordButton', () => {

	it('Should render', () => {
		const wrapper = shallow(<RecordButton />);
		expect(wrapper).toMatchSnapshot();
	});

});
