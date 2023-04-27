import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import reducers from '../../../redux/reducers';
import { LearnerReportOverall } from './LearnerReportOverall';
import { props } from './testData';

const store = createStore(reducers);

storiesOf('3. Organisms / LearnerReportOverall', module)
	.add('LearnerReportOverall', () => (
		<Router>
			<Provider store={store}>
				<div style={{ width: '600px' }}>
					<LearnerReportOverall { ...props } />
				</div>
			</Provider>
		</Router>
	));
