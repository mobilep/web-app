import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import UploadingProgressRing from './UploadingProgressRing';

storiesOf('1. Atoms / UploadingProgressRing', module)
	.add('default', () => (
		<UploadingProgressRing
			progress={number('Progress', 25)}
			radius={number('Radius', 50)}
			stroke={number('Stroke', 5)}
			onCancelButtonClick={action('onCancelButtonClick')}
		/>
	));
