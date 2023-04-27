import React from 'react';
import { storiesOf } from '@storybook/react';

import ViewLoader from './ViewLoader';

storiesOf('1. Atoms / ViewLoader', module)
	.add('default', () => (
		<ViewLoader />
	));
