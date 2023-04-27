import React from 'react';
import { storiesOf } from '@storybook/react';
import ClosableBanner from './ClosableBanner';

storiesOf('1. Atoms / ClosableBanner', module)
	.add('ClosableBanner', () => {
		return (
			<div style={{ marginTop: '50px', width: '250px' }}>
				<ClosableBanner>
					<h4>Closable banner title</h4>
					<div>Closable banner text</div>
				</ClosableBanner>
			</div>
		);
	});
