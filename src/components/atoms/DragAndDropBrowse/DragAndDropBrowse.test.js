import React from 'react';
import { shallow } from 'enzyme';

import DragAndDropBrowse from './DragAndDropBrowse';

describe('Atom - DragAndDropBrowse', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<DragAndDropBrowse
				buttonLabel='Button label'
				text='Text'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});

