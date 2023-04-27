import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import ButtonWithArrow from './ButtonWithArrow';

storiesOf('1. Atoms / ButtonWithArrow', module)
	.add('ButtonWithArrow', () => <ButtonWithArrow text={text('Text', 'Sign In')} />);
