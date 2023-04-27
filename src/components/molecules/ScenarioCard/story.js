import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ScenarioCard from './ScenarioCard';
import TIME from '../../../constants/time';

storiesOf('2. Molecules / ScenarioCard', module)
	.add('Finished', () => (
		<Router>
			<div style={{ width: '350px' }}>
				<ScenarioCard
					authorDetails={{}}
					chats={{}}
					dueDate={new Date('2019-10-02')}
					isCoachPracticeActive={false}
					isDraft={false}
					scenarioId='1111'
					scenarioName='Scenario 1'
					unreadGroupMessages='2'
					unreadPrivateChats='5'
				/>

			</div>
		</Router>
	))
	.add('Not finished', () => (
		<Router>
			<div style={{ width: '350px' }}>
				<ScenarioCard
					authorDetails={{}}
					chats={{}}
					dueDate={new Date(+new Date() + TIME.MS_IN_DAY * 3)}
					isCoachPracticeActive={false}
					isDraft={false}
					scenarioId='1111'
					scenarioName='Scenario 1'
					unreadGroupMessages='2'
					unreadPrivateChats='5'
				/>
			</div>
		</Router>
	))
	.add('Draft', () => (
		<Router>
			<div style={{ width: '350px' }}>
				<ScenarioCard
					authorDetails={{}}
					chats={{}}
					dueDate={new Date(+new Date() + TIME.MS_IN_DAY * 3)}
					isCoachPracticeActive={false}
					isDraft={true}
					scenarioId='1111'
					scenarioName='Draft Scenario 1'
					unreadGroupMessages='2'
					unreadPrivateChats='5'
				/>
			</div>
		</Router>
	));
