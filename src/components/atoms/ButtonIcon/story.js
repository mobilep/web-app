import React from 'react';
import { storiesOf } from '@storybook/react';

import { CirclePlusIcon } from '../../../icons';
import ButtonIcon from './ButtonIcon';

storiesOf('1. Atoms / ButtonIcon', module)
	.add('ButtonIcon', () => (
		<ButtonIcon
			icon={<CirclePlusIcon />}
		/>
	))
	.add('ButtonIcon with Label', () => (
		<ButtonIcon
			icon={<CirclePlusIcon />}
			label='Add'
		/>
	));
