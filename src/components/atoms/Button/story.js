import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, selectV2 } from '@storybook/addon-knobs/react';
import { titleCaseKeys } from '../../../utils';

import Button from './Button';
import { COLORS } from './constants';

const CASED_COLORS = titleCaseKeys(COLORS);

const props = ({
	defaultText = 'Example',
} = {}) => ({
	children: text('Text', defaultText),
	color: selectV2('Color', CASED_COLORS),
	primary: boolean('Primary', true),
	disabled: boolean('Disabled', false),
	onClick: action('Clicked'),
});

storiesOf('1. Atoms / Button', module)
	.add('with text', () => <Button {...props()} />)
	.add('with emoji', () => <Button {...props({ defaultText: '😎' })} />);
