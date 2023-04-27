import React from 'react';
import { storiesOf } from '@storybook/react';

import DueDate from './DueDate';
import TIME from '../../../constants/time';

const props = {
	value: new Date(+new Date() + TIME.MS_IN_DAY * 3).toDateString(),
};

storiesOf('1. Atoms / DueDate', module)
	.add('DueDate', () =>	(
		<DueDate {...props} />
	));
