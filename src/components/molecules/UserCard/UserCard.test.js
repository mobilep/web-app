import React from 'react';
import { shallow } from 'enzyme';
import mockMatchMedia from '../../../helpers/test/matchMedia';

import UserCard from './UserCard';
import { CARD_TYPES } from './constants';

const CARD_TYPES_ARRAY = Object.values(CARD_TYPES);

describe('Molecule - UserCard', () => {

	beforeAll(() => mockMatchMedia());

	CARD_TYPES_ARRAY.forEach((type) => {
		it(`Should render with type ${type}`, () => {
			const wrapper = shallow(<UserCard personInitials='AB' type={type} />);
			expect(wrapper).toMatchSnapshot();
		});
	});

});
