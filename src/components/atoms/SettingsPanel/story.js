import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { QuestionIcon } from '../../../icons';

import SettingsPanel from './';

storiesOf('1. Atoms / SettingsPanel', module)
	.add('SettingsPanel', () => (
		<SettingsPanel
			title={text('Title', 'Help')}
			description={text('Description', 'Click the link below for fast help:')}
			icon={<QuestionIcon />}
			action={<a href='#' target='_blank'>help.mobilepractice.io</a>}
		/>
	));
