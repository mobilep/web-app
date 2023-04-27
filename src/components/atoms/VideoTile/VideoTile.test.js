import React from 'react';
import { shallow } from 'enzyme';

import VideoTile from './VideoTile';

import { TILE_TYPES } from './constants';

const PROPS = {
	addText: 'Add text',
	thumbnailUrl: 'URL',
	uploadingProgress: 1,
	onVideoSend: () => {},
};
const TYPES_ARRAY = Object.values(TILE_TYPES);

describe('Atom - VideoTile', () => {

	TYPES_ARRAY.forEach((type) => {
		it(`Should render with type ${type}`, () => {
			const wrapper = shallow(
				<VideoTile
					type={type}
					{...PROPS}
				/>
			);
			expect(wrapper).toMatchSnapshot();
		});
	});

});
