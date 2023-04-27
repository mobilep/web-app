import React from 'react';
import { shallow } from 'enzyme';

import MessageBoxBaseButton from './MessageBoxBaseButton';

describe('Atom - MessageBoxBaseButton', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<MessageBoxBaseButton>
				Text
			</MessageBoxBaseButton>
		);
		expect(wrapper).toMatchSnapshot();
	});

});

