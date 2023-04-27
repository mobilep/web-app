import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../../../redux/reducers';
import { LearnerReportFilters } from './LearnerReportFilters';
import { props } from './testData';

const store = createStore(reducers);

storiesOf('2. Molecules / LearnerReportFilters', module)
	.add('LearnerReportFilters',
		() => (
			<div style={{ width: '700px' }}>
				<Provider store={store}>
					<LearnerReportFilters
						{...props}
						filters={[]}
					/>
				</Provider>
			</div>
		));
