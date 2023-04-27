import React from 'react';
import { shallow } from 'enzyme';

import PopUp from './PopUp';

import constants from './constants';

const POSITIONS_ARRAY = Object.values(constants.POSITIONS);

describe('Atom - PopUp', () => {

	POSITIONS_ARRAY.forEach((position) => {
		it(`Should render with position ${position}`, () => {
			const wrapper = shallow(
				<PopUp
					position={position}
					text='Text'
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});
	});

});
