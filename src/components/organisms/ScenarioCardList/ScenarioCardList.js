import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScenarioCard } from '../../molecules';
import { LanguageContext } from '../../../utils';

import './styles.css';
import { scenarioTypes } from '../../../constants/common';

export default class ScenarioCardList extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		activeCoachPanelId: PropTypes.string,
		activePracticeScenarioId: PropTypes.string,
		onCoachPanelClose: PropTypes.func,
		onCoachPanelOpen: PropTypes.func,
		scenarios: PropTypes.array,
	};

	componentDidMount () {
		this.scrollToScenario();
	}

	scrollToScenario () {
		this.getActiveItem().then((activeItem) => {
			if (!activeItem) return;
			const scenarioCard = activeItem.closest('.ScenarioCard');
			scenarioCard.scrollIntoView();

			if (!scenarioCard) return;
			const isCardCollapsed = scenarioCard.classList.contains('ScenarioCard-collapsed');
			if (isCardCollapsed) {
				const header = scenarioCard.querySelector('.ScenarioCard-rowHeader');
				header.click();
			}
		});
	}

	getActiveItem () {
		let count = 0;

		return new Promise((resolve) => {
			const interval = setInterval(() => {
				const activeItem = document.querySelector('.listItem-active');
				if (activeItem) {
					clearInterval(interval);
					resolve(activeItem);
				}

				if (count === 10) {
					clearInterval(interval);
				}
				count++;
			}, 100);
		});
	}

	handleCoachPanelOpen = (scenarioId) => {
		this.props.onCoachPanelOpen(scenarioId);
	}

	getScenarioCard (scenario, isUnread) {
		return (
			<ScenarioCard
				isCoachPracticeActive={scenario._id === this.props.activePracticeScenarioId}
				key={scenario._id}
				chats={{ practiceInboxId: scenario.inboxId, groupChatId: scenario.groupChatId }}
				isCoachPanelActive={this.props.activeCoachPanelId === scenario._id}
				unreadPrivateChats={this.getScenarioUnreadPracticeChats(scenario)}
				unreadPracticeMessagesForLearner={this.getUnreadPracticeMessageForLearner(scenario)}
				unreadGroupMessages={scenario.unreadMessagesGroupChat}
				authorDetails={scenario.authorDetails}
				scenario={scenario}
				isUnread={isUnread}
				onCoachPanelOpen={() => this.props.onCoachPanelOpen(scenario._id)}
				onCoachPanelClose={this.props.onCoachPanelClose}
			/>
		);
	}

	getScenarioUnreadPracticeChats (scenario) {
		return scenario.practiceStatus ? scenario.practiceStatus.unreadPracticeChats : 0;
	}

	getUnreadPracticeMessageForLearner (scenario) {
		return scenario.practiceStatus ? scenario.practiceStatus.unreadPracticeMessagesForLearner : 0;
	}

	isScenarioUnread = (scenario) => {
		return scenario.unreadMessagesGroupChat > 0 ||
		this.getScenarioUnreadPracticeChats(scenario) > 0 ||
		(scenario.authorDetails.isCurrentUser && scenario.reminderIsVisible);
	}

	isScenarioDraft = (scenario) => {
		return scenario.type === scenarioTypes.DRAFT;
	}

	getScenariosGroups (scenarios) {
		const initialState = { unreadScenarios: [], draftScenarios: [], restScenarios: [] };

		return scenarios.reduce((accumulator, scenario) => {
			if (this.isScenarioDraft(scenario)) {
				const scenarioCard = this.getScenarioCard(scenario, false);
				accumulator.draftScenarios.push(scenarioCard);
			} else if (this.isScenarioUnread(scenario)) {
				const scenarioCard = this.getScenarioCard(scenario, true);
				accumulator.unreadScenarios.push(scenarioCard);
			} else {
				const scenarioCard = this.getScenarioCard(scenario, false);
				accumulator.restScenarios.push(scenarioCard);
			}

			return accumulator;
		}, initialState);
	}

	render () {
		const { scenarios: scenariosI18n } = this.context;

		const { unreadScenarios, draftScenarios, restScenarios } = this.getScenariosGroups(this.props.scenarios);

		return (
			<div className='ScenarioCardList'>
				{/* DRAFT BLOCK */}
				{!!draftScenarios.length &&
					<div className='ScenarioCardList-block'>
						<div className='ScenarioCardList-blockTitle space-left'>{scenariosI18n.draftText}</div>
						{draftScenarios}
					</div>
				}

				{/* UNREAD BLOCK */}
				{!!unreadScenarios.length &&
					<div className='ScenarioCardList-block'>
						<div className='ScenarioCardList-blockTitle space-left'>{scenariosI18n.unread}</div>
						{unreadScenarios}
					</div>
				}

				{/* ALL BLOCK */}
				{!!restScenarios.length &&
					<div className='ScenarioCardList-block'>
						<div className='ScenarioCardList-blockTitle space-left'>{scenariosI18n.all}</div>
						{restScenarios}
					</div>
				}
			</div>
		);
	}
}
