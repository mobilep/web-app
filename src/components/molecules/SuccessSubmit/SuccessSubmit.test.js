import React from 'react';
import { shallow } from 'enzyme';

import SuccessSubmit from './SuccessSubmit';

describe('Molecule - SuccessSubmit', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<SuccessSubmit
				buttonLabel='Buttton label'
				title='Title'
				message='Message'
				onButtonClick={() => {}}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
