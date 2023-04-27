import React from 'react';
import { shallow } from 'enzyme';

import SelectList from './SelectList';

import { items } from './testData';

describe('Molecule - SelectList', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<SelectList selectedItem={1} items={items} />
		);
		expect(wrapper).toMatchSnapshot();
	});

});
