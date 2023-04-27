import React from 'react';
import { shallow } from 'enzyme';

import AppendableListItem from './AppendableListItem';
import { TYPES } from './constants';

const TYPES_ARRAY = Object.values(TYPES);

describe('Atom - AppendableListItem', () => {

	TYPES_ARRAY.forEach((type) => {
		it(`Should render with type '${type}'`, () => {
			const wrapper = shallow(<AppendableListItem type={type} />);
			expect(wrapper).toMatchSnapshot();
		});
	});

});
