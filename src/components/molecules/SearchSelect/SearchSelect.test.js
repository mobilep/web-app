import React from 'react';
import { shallow } from 'enzyme';

import SearchSelect from './SearchSelect';
import { userItems } from './testData';

describe('Molecule - SearchSelect', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<SearchSelect
				items={userItems}
				placeholder='Placeholder'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
