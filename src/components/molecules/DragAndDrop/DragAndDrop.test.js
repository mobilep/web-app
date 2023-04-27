import React from 'react';
import { shallow } from 'enzyme';
import mockMatchMedia from '../../../helpers/test/matchMedia';

import DragAndDrop from './DragAndDrop';
import { FILE_TYPE } from '../../../constants/files';
import constants from '../../../constants';

describe('Molecule - DragAndDrop', () => {

	beforeAll(() => mockMatchMedia());

	it('Should render', () => {
		const wrapper = shallow(
			<DragAndDrop
				texts={constants.content.en}
				fileType={FILE_TYPE.PHOTO}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
