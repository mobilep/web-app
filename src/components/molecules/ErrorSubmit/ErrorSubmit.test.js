import React from 'react';
import { shallow } from 'enzyme';

import ErrorSubmit from './ErrorSubmit';

describe('Molecule - ErrorSubmit', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<ErrorSubmit
				buttonLabel='Button label'
				message='Message'
				title='Title'
				onButtonClick={() => {}}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
