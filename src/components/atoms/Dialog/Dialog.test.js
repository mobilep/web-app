import React from 'react';
import { mount } from 'enzyme';
import dialogPolyfill from 'dialog-polyfill';
import mockMatchMedia from '../../../helpers/test/matchMedia';

import Dialog from './Dialog';

jest.mock('dialog-polyfill');

describe('Atom - Dialog', () => {
	beforeAll(mockMatchMedia);

	it('Should render', () => {
		global.HTMLDialogElement = true;
		const wrapper = mount(
			<Dialog>
				Dialog content
			</Dialog>
		);
		expect(wrapper).toMatchSnapshot();
	});

	describe('When HTMLDialogElement is not supported', () => {

		it('Should use polyfill if ', async () => {
			global.HTMLDialogElement = false;
			await mount(
				<Dialog>
					Dialog content
				</Dialog>
			);
			// Forces below statement to wait for polyfill to load.
			await import('dialog-polyfill');
			expect(dialogPolyfill.registerDialog).toHaveBeenCalledTimes(1);
		});

	});

});
