import React from 'react';
import { shallow } from 'enzyme';

import SubmitResult from './SubmitResult';

describe('Atom - SubmitResult', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<SubmitResult
				buttonLabel='Button label'
				icon={<div />}
				message='Message'
				onButtonClick={() => {}}
				title='Title'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
