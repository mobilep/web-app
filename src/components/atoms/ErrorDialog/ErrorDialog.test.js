import React from 'react';
import { shallow } from 'enzyme';

import { ErrorDialog } from './ErrorDialog';

describe('Atom - ErrorDialog', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<ErrorDialog
				buttonLabel='Button Label'
				header='Header'
				textContent='Text content'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});

