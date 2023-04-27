import React from 'react';
import { storiesOf } from '@storybook/react';

import Tabs from './Tabs';

storiesOf('1. Atoms / Tabs', module)
	.add('default', () => (
		<Tabs
			tabNames={['tab1', 'tab2']}
			tabs={['tab1 content', 'tab2 content']}
		/>
	));
