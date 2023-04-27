import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { SendReminderPage } from './SendReminderPage';
import { props } from './testData';

storiesOf('2. Molecules / SendReminderPage', module)
	.add('SendReminderPage', () => {
		return (
			<div style={{ marginTop: '50px', width: '600px' }}>
				<MemoryRouter>
					<SendReminderPage { ...props }	/>
				</MemoryRouter>
			</div>
		);
	});
