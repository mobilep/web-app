import React from 'react';
import { shallow } from 'enzyme';

import DragAndDropFileItem from './DragAndDropFileItem';

const PROPS = {
	name: 'Name',
	progress: 0,
	size: 5,
};

describe('Atom - DragAndDropFileItem', () => {

	it('Should render', () => {
		const wrapper = shallow(<DragAndDropFileItem {...PROPS} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render with error', () => {
		const wrapper = shallow(
			<DragAndDropFileItem
				{...PROPS}
				error
				errorMessage='Some error'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});

