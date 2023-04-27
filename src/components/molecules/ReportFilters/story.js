import React from 'react';
import { storiesOf } from '@storybook/react';

import ReportFilters from './ReportFilters';

storiesOf('2. Molecules / ReportFilters', module)
	.add('ReportFilters',
		() => (
			<div style={{ width: '700px' }}>
				<ReportFilters	filters={
					[
						{ label: 'Period', input: <select /> },
						{ label: 'Coach', input: <select /> },
					]
				} />
			</div>
		));
