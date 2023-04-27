import React from 'react';
import { mount } from 'enzyme';
import mockMatchMedia from '../../../helpers/test/matchMedia';

import DialogWithButtonGroup from './DialogWithButtonGroup';

describe('Atom - DialogWithButtonGroup', () => {
	beforeAll(mockMatchMedia);

	it('Should render', () => {
		global.HTMLDialogElement = true;
		const wrapper = mount(
			<DialogWithButtonGroup
				actionButtonLabel='Action button'
				cancelButtonLabel='Cancel button'
			>
				DialogWithButtonGroup content
			</DialogWithButtonGroup>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
