import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2, boolean } from '@storybook/addon-knobs/react';
import { titleCaseKeys } from '../../../utils';

import Avatar from './Avatar';
import constants from './constants';

const BORDER_LABEL = 'Border';
const DEFAULT_SIZE = 'avatar-28';
const SIZE_LABEL = 'Sizes';

const CASED_AVATAR_SIZES = titleCaseKeys(constants.AVATAR_SIZES);

storiesOf('1. Atoms / Avatar', module)
	.add('with initials',
		() => (<Avatar initials={text('Initials', 'JD')}
			size={selectV2(SIZE_LABEL, CASED_AVATAR_SIZES, DEFAULT_SIZE)} border={boolean(BORDER_LABEL, false)}
			color={text('Background', '#87d4ee')} />))
	.add('with image', () => (<Avatar initials='JD' img={text('Image URL', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlUvtjoDyRYSmS6hoSVke1HcE-3ZeLGHLR7RnTIBp3jAYv39B')}
		size={selectV2(SIZE_LABEL, CASED_AVATAR_SIZES, DEFAULT_SIZE)} border={boolean(BORDER_LABEL, false)}
		color={text('Background', '#87d4ee')}
	/>));
