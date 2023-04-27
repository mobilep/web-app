import React from 'react';
import { shallow } from 'enzyme';

import AppendableList from './AppendableList';
import { LIST_TYPES } from './constants';

const ITEMS = [
	'Some item',
	'Another item',
	'Third item',
];
const TYPES_ARRAY = Object.values(LIST_TYPES);

describe('Molecule - AppendableList', () => {

	TYPES_ARRAY.forEach((type) => {
		it(`Should render with type ${type}`, () => {
			const wrapper = shallow(
				<AppendableList
					items={ITEMS}
					type={type}
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});
	});

	it('Should render as editable', () => {
		const wrapper = shallow(
			<AppendableList
				items={ITEMS}
				type={LIST_TYPES.CHECK}
				editable
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
