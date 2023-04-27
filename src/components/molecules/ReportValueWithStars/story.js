import React from 'react';
import { storiesOf } from '@storybook/react';

import ReportValueWithStars from './ReportValueWithStars';

storiesOf('2. Molecules / ReportValueWithStars', module)
	.add('ReportValueWithStars', () => (
		<div style={{ width: '600px' }}>
			<ReportValueWithStars
				label='Team'
				value={3.5}
			/>
		</div>
	));
