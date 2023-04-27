import React from 'react';
import { shallow } from 'enzyme';

import DragAndDropFileInfo from './DragAndDropFileInfo';

describe('Atom - DragAndDropFileInfo', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<DragAndDropFileInfo
				fileCountText='7'
				formatNamesArray={['MP4', 'MP3']}
				formatsText='Formats text'
				maxFileSize={52}
				maxFileSizeText='Max file size text'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});

