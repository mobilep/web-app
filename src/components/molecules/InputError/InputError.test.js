import React from 'react';
import { shallow } from 'enzyme';

import InputError from './InputError';
import { POSITIONS } from './constants';

const POSITIONS_ARRAY = Object.values(POSITIONS);

describe('Molecule - InputError', () => {

	POSITIONS_ARRAY.forEach((position) => {
		it(`Should render with position ${position}`, () => {
			const wrapper = shallow(
				<InputError
					messageText='Message text'
					popUpPosition={position}
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});
	});

});
