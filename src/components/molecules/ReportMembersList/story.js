import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ReportMembersList from './ReportMembersList';
import { usersProp } from './testData';

storiesOf('2. Molecules / ReportMembersList', module)
	.add('ReportMembersList', () => (
		<Router>
			<div style={{ width: '600px', paddingTop: '20px' }}>
				<ReportMembersList users={usersProp} linkBaseUrl='#' />
			</div>
		</Router>
	));
