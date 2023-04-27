import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../../../redux/reducers';
import { CoachReportFilters } from './CoachReportFilters';

const store = createStore(reducers);

storiesOf('2. Molecules / CoachReportFilters', module)
	.add('CoachReportFilters',
		() => (
			<div style={{ width: '700px' }}>
				<Provider store={store}>
					<CoachReportFilters	filters={[]} />
				</Provider>
			</div>
		));
