import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2 } from '@storybook/addon-knobs/react';
import PopUp from './PopUp';
import { titleCaseKeys } from '../../../utils';
import constants from './constants';

const { TOP_LEFT } = constants.POSITIONS;
const { WHITE } = constants.BACKGROUND;

const CASED_POSITIONS = titleCaseKeys(constants.POSITIONS);
const CASED_BACKGROUND = titleCaseKeys(constants.BACKGROUND);

storiesOf('1. Atoms / PopUp', module)
	.add('default', () => (
		<PopUp
			position={selectV2('Position', CASED_POSITIONS, TOP_LEFT)}
			text={text('text', 'This field is requred')}
			background={selectV2('Background', CASED_BACKGROUND, WHITE)}
		/>
	));
