import React from 'react';
import { shallow } from 'enzyme';

import UploadingProgressRing from './UploadingProgressRing';

describe('Atom - UploadingProgressRing', () => {

	it('Should render', () => {
		const wrapper = shallow(<UploadingProgressRing progress={1} />);
		expect(wrapper).toMatchSnapshot();
	});

});
