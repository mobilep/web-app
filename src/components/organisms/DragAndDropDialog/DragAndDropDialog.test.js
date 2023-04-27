// import React from 'react';
// import { mount } from 'enzyme';
import mockMatchMedia from '../../../helpers/test/matchMedia';

// import DragAndDropDialog from './DragAndDropDialog';

describe('Organism - DragAndDropDialog', () => {

	beforeAll(() => mockMatchMedia());

	it('Should render', () => {
		/* NOTE: Test temporarily disabled because Enzyme 3.3.0 has a bug where it doesn't handle the Context API
		   correctly - https://github.com/airbnb/enzyme/issues/1620. Fixed, waiting for release. */

		// window.HTMLDialogElement = true;
		// const wrapper = mount(
		// 	<DragAndDropDialog fileType='photo' />
		// );
		// expect(wrapper).toMatchSnapshot();
	});

});
