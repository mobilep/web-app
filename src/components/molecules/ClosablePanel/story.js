import React from 'react';
import { storiesOf } from '@storybook/react';
import ClosablePanel from './ClosablePanel';

storiesOf('2. Molecules / ClosablePanel', module)
	.add('ClosablePanel', () => (
		<ClosablePanel title={'Panel title'}>
			<div>Content</div>
		</ClosablePanel>
	));
