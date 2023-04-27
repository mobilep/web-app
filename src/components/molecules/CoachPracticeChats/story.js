import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import CoachPracticeChats from './CoachPracticeChats';
import { practiceChats, activeChatId } from './testData';
import TIME from '../../../constants/time';

storiesOf('2. Molecules / CoachPracticeChats', module)
	.add('CoachPracticeChats', () => (
		<Router>
			<div style={{ width: '380px' }}>
				<CoachPracticeChats
					activeInboxId={activeChatId}
					practiceChats={practiceChats}
					dueDate={new Date(+new Date() + TIME.MS_IN_DAY * 3)}
				/>
			</div>
		</Router>
	));
