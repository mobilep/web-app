import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, selectV2 } from '@storybook/addon-knobs/react';
import { titleCaseKeys } from '../../../utils';
import constants from './constants';

import InputError from './InputError';

const { TOP_LEFT_POP_UP } = constants.POSITIONS;
const { WHITE_ICON } = constants.COLOR;

const CASED_POP_UP_POSITIONS = titleCaseKeys(constants.POSITIONS);
const CASED_POP_UP_COLOR = titleCaseKeys(constants.COLOR);

storiesOf('2. Molecules / InputError', module)
	.add('InputError',
		() => (
			<div style={{ height: '600px', padding: '200px' }}>
				<InputError
					popUpPosition={selectV2('Pop Up position', CASED_POP_UP_POSITIONS, TOP_LEFT_POP_UP)}
					messageText={text('Message text', 'This field is required')}
					color={selectV2('Pop Up color', CASED_POP_UP_COLOR, WHITE_ICON)}
				/>
			</div>
		));
