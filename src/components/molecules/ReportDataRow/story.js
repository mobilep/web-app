import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ReportDataRow from './ReportDataRow';
import { ReportValue } from '../../atoms';

storiesOf('2. Molecules / ReportDataRow', module)
	.add('ReportDataRow', () => (
		<Router>
			<div style={{ width: '600px' }}>
				<ReportDataRow
					title='Average score'
					description='Average score description'
					link='#'
				>
					<ReportValue
						value={3}
						maxValue={5}
						label='Score'
					/>
					<ReportValue
						value={4}
						maxValue={5}
						label='Score'
					/>
				</ReportDataRow>
			</div>
		</Router>
	));
