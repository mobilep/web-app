import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { isPast, isValid } from 'date-fns';

import { Avatar, Button } from '../../atoms';
import { LanguageContext, timeUtils } from '../../../utils';
import { SwitchIcon, MenuOpenedIcon } from '../../../icons';

import './styles.css';
import scenarioShape from '../../../shapes/scenarioShape';
import { scenarioTypes } from '../../../constants/common';

export default class ScenarioCard extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		authorDetails: PropTypes.object,
		chats: PropTypes.object,
		isCoachPanelActive: PropTypes.bool,
		isCoachPracticeActive: PropTypes.bool,
		isUnread: PropTypes.bool,
		onCoachPanelClose: PropTypes.func,
		onCoachPanelOpen: PropTypes.func,
		scenario: PropTypes.shape(scenarioShape),
		unreadGroupMessages: PropTypes.number,
		unreadPracticeMessagesForLearner: PropTypes.number,
		unreadPrivateChats: PropTypes.number,
	}

	state = {
		isExpanded: true,
		isFinished: false,
		daysLeft: null,
		daysLeftText: null,
	}

	componentDidMount () {
		this.checkDate();
	}

	handleCoachPanelToggle = () => {
		if (this.props.isCoachPanelActive) {
			this.props.onCoachPanelClose();
		} else {
			this.props.onCoachPanelOpen();
		}
	}

	getHeaderRow () {
		const {	authorDetails, scenario	} = this.props;
		const { isExpanded } = this.state;

		return (<div className='ScenarioCard-row ScenarioCard-rowHeader space-left' onClick={this.handleCardToggle}>
			<div className='ScenarioCard-col'>
				<Avatar
					img={authorDetails.thumbnail}
					initials={authorDetails.initials}
					color={authorDetails.avatarColor}
					size='avatar-28'
				/>
			</div>
			<div className='ScenarioCard-headerContentCol'>
				<div className='ScenarioCard-title'>{scenario.name}</div>
				{!isExpanded &&
					<div className='ScenarioCard-dueDate'>
						{this.getFinishedAgoText(new Date(scenario.dueDate))}
					</div>}
			</div>
			<Button className={this.getButtonClassName()} onClick={this.handleCardToggle}>
				<SwitchIcon />
			</Button>
		</div>);
	}

	getGroupChatRow () {
		const { unreadGroupMessages, chats } = this.props;

		return (
			<NavLink
				className='text-link ScenarioCard-row listItem'
				activeClassName='listItem-active'
				to={`/scenarios/group-chat/${chats.groupChatId}`}
			>
				{this.getCounterCol(unreadGroupMessages)}
				<div>{this.context.scenarios.groupChat}</div>
			</NavLink>
		);
	}

	getCoachChatRow () {
		const {
			unreadPrivateChats, isCoachPracticeActive,	isCoachPanelActive,	scenario,
		} = this.props;

		const coachRowClassName =
			classNames('ScenarioCard-row clickable listItem', { 'listItem-active': isCoachPracticeActive });

		return (<div className={coachRowClassName} onClick={this.handleCoachPanelToggle}>
			{this.getCounterCol(unreadPrivateChats)}
			<div>
				<span>{this.context.scenarios.coach}</span>
				{!!scenario.waitingForFeedback &&
					<span className='ScenarioCard-waitingForFeedback'>
						&nbsp;&middot;&nbsp;
						{scenario.waitingForFeedback}	{this.context.scenarios.practiceGroups.waitingOnFeedback}
					</span>
				}
			</div>
			{isCoachPanelActive &&	<MenuOpenedIcon className='ScenarioCard-rowMarkerIcon' />
			}
		</div>);
	}

	getLearnerRow () {
		const {	chats, unreadPracticeMessagesForLearner, scenario } = this.props;
		const { daysLeft, daysLeftText } = this.state;

		return (<NavLink
			activeClassName='listItem-active'
			className='text-link ScenarioCard-row listItem'
			to={`/scenarios/practice-chat/${chats.practiceInboxId}`}
		>
			{this.getCounterCol(unreadPracticeMessagesForLearner)}
			<div className='ScenarioCard-rowContent'>
				<div>
					{this.context.scenarios.practice}
					{scenario.isLearnerWaitingForFeedback &&
						<span className='ScenarioCard-waitingForFeedback'>
							&nbsp;&middot;&nbsp;
							{this.context.scenarios.practiceGroups.waitingOnFeedback}
						</span>
					}
				</div>

				{daysLeftText &&
					<div className={this.getDaysLeftClassName(daysLeft)}>{daysLeftText}</div>
				}
			</div>
		</NavLink>);
	}

	getInstructionRow () {
		return (
			<NavLink
				activeClassName='listItem-active'
				className='text-link ScenarioCard-row listItem'
				to={`/scenarios/${this.props.scenario._id}`}
			>
				<div className='ScenarioCard-col'>
					<div className='messageCounter'>i</div>
				</div>
				<div>{this.context.scenarios.instructions}</div>
			</NavLink>
		);
	}

	getReminderRow () {
		const { scenario } = this.props;

		return (<NavLink
			activeClassName='listItem-active'
			className='text-link ScenarioCard-row listItem'
			to={`/scenarios/send-reminder/${scenario._id}`}
		>
			{this.getCounterCol(1)}
			<div className='ScenarioCard-rowContent'>
				<div>{this.context.reminder.reminderNeeded}</div>
			</div>
		</NavLink>);
	}

	getCounterCol (numberOfMessages) {
		return (<div className='ScenarioCard-col'>
			<div className={this.getCounterClass(numberOfMessages)}>{numberOfMessages}</div>
		</div>);
	}

	getCounterClass (counterValue) {
		return classNames({
			messageCounter: true,
			'messageCounter-active': counterValue > 0,
		});
	}

	handleCardToggle = () => {
		this.setState({ isExpanded: !this.state.isExpanded });
	}

	getButtonClassName () {
		return classNames(
			'ScenarioCard-toggle',
			{ 'ScenarioCard-toggleCollapsed': !this.state.isExpanded }
		);
	}

	getDaysLeftClassName (nOfDaysLeft) {
		return classNames(
			'ScenarioCard-daysLeft',
			{ 'ScenarioCard-daysLeftWarning': nOfDaysLeft && nOfDaysLeft < 4 },
		);
	}

	checkDate () {
		const { scenario: { dueDate, type }, isUnread } = this.props;
		const locale = this.context._contextSettings.dateFnsLanguageCode;
		const suffix = this.context.scenarios.left;
		const pastDueText = this.context.scenarios.pastDue;
		const isPastDate = isPast(new Date(dueDate));
		this.setState({
			isExpanded: isUnread,
			isFinished: isPastDate,
		});

		if (type !== scenarioTypes.COMPLETED) {
			const { daysLeft, daysLeftText } = timeUtils.getDaysLeft(
				{ locale, suffix, pastDueText, date: new Date(dueDate) },
			);
			this.setState({	daysLeft, daysLeftText });
		}
	}

	getFinishedAgoText (date) {
		if (!isValid(date)) return null;
		const locale = this.context._contextSettings.dateFnsLanguageCode;

		if (isPast(date)) {
			const prefix = this.context.scenarios.finished;
			return timeUtils.getDaysAgoText({ date, locale, prefix });
		}

		const suffix = this.context.scenarios.left;
		const { daysLeftText } = timeUtils.getDaysLeft({ date, locale, suffix });
		return daysLeftText;
	}

	getClassName () {
		return classNames('ScenarioCard', { 'ScenarioCard-collapsed': !this.state.isExpanded });
	}

	render () {
		const { chats, authorDetails: { isCurrentUser }, scenario } = this.props;
		const { reminderIsVisible } = scenario;
		const isDraft = scenario.type === scenarioTypes.DRAFT;

		return (
			<div className={this.getClassName()} data-scenario-id={scenario._id}>
				{this.getHeaderRow()}

				<Fragment>
					{reminderIsVisible && isCurrentUser && this.getReminderRow()}
					{!isDraft && chats.groupChatId && this.getGroupChatRow()}
					{!isDraft && isCurrentUser && this.getCoachChatRow()}
					{!isDraft && !isCurrentUser && this.getLearnerRow()}
					{this.getInstructionRow()}
				</Fragment>
			</div>
		);
	}
}
