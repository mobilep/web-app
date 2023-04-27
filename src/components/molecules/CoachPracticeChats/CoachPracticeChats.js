import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isPast } from 'date-fns';
import { UserCardList } from '..';

import './styles.css';
import { CARD_TYPES } from '../UserCard/constants';
import { practiceStates } from '../../../constants/common';
import { LanguageContext, timeUtils } from '../../../utils';
import { Button, ClosableBanner } from '../../atoms';
import { hasState } from '../../../helpers/messageHelpers';

class CoachPracticeChats extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		activeInboxId: PropTypes.string,
		className: PropTypes.string,
		dueDate: PropTypes.instanceOf(Date),
		history: PropTypes.object.isRequired,
		onClose: PropTypes.func,
		onReminderClose: PropTypes.func,
		practiceChats: PropTypes.array,
		reminderIsVisible: PropTypes.bool,
		scenarioId: PropTypes.string,
	}

	state = {
		daysLeftText: null,
	}

	componentDidMount () {
		this.setDaysLeftText();
	}

	componentDidUpdate (prevProps) {
		if (prevProps.scenarioId !== this.props.scenarioId) {
			this.setDaysLeftText();
		}
	}

	setDaysLeftText () {
		const { dueDate: date } = this.props;
		const locale = this.context._contextSettings.dateFnsLanguageCode;
		const suffix = this.context.scenarios.left;
		const pastDueText = this.context.scenarios.pastDue;
		const { daysLeftText } = timeUtils.getDaysLeft({ date, locale, suffix, pastDueText });

		this.setState({ daysLeftText });
	}

	getClassName () {
		return classNames('CoachPracticeChats', this.props.className);
	}

	handleInboxSelect = (inboxId) => {
		this.props.history.push(`/scenarios/practice-chat/${inboxId}`);
		this.props.onClose();
	}

	getPracticeGroups () {
		const { waitingOnFeedback, inProgress, completed, notStarted } = this.context.scenarios.practiceGroups;
		const { practiceChats } = this.props;

		return [
			{
				title: waitingOnFeedback,
				practices: practiceChats.filter(hasState(practiceStates.WAITING_FOR_FEEDBACK)) },
			{
				title: inProgress,
				practices: practiceChats.filter(hasState(practiceStates.IN_PROGRESS)),
			},
			{
				title: completed,
				practices: practiceChats.filter(hasState(practiceStates.COMPLETED)),
			},
			{
				title: notStarted,
				practices: practiceChats.filter(hasState(practiceStates.NOT_STARTED)),
			},
		].filter(({ practices }) => !!practices.length);
	}

	getFinishedStatText (finished, total) {
		const { numberOfFinished } = this.context.scenarios;

		return numberOfFinished
			.replace('{finished}', finished)
			.replace('{total}', total);
	}

	getNumberOfFinishedLearners (chats) {
		const finishedChats = chats.filter(hasState(practiceStates.COMPLETED));

		return finishedChats.length;
	}

	isReminderAvailable (numberOfFinishedLearners, totalLearners) {
		const isAllFinished = numberOfFinishedLearners === totalLearners;

		return !isAllFinished && !isPast(this.props.dueDate);
	}

	handleReminderClose = () => {
		this.props.onReminderClose(this.props.scenarioId);
	}

	render () {
		const { activeInboxId, practiceChats, scenarioId, reminderIsVisible } = this.props;
		const { daysLeftText } = this.state;
		const { sendReminder, reminderNeeded, runningOutOfTime } = this.context.reminder;
		const practiceGroups = this.getPracticeGroups();
		const numberOfFinishedLearners = this.getNumberOfFinishedLearners(practiceChats);
		const finishedStatText = this.getFinishedStatText(numberOfFinishedLearners, practiceChats.length);
		const isSendingReminderAvailable = this.isReminderAvailable(numberOfFinishedLearners, practiceChats.length);

		return (
			<div className={this.getClassName()}>
				<div className='CoachPracticeChats-reminderBanner'>
					{reminderIsVisible &&
						<ClosableBanner onClose={this.handleReminderClose}>
							<h4>{reminderNeeded}</h4>
							{runningOutOfTime}
						</ClosableBanner>
					}
				</div>
				<div className='CoachPracticeChats-metaInfo'>
					<div>
						{finishedStatText}{daysLeftText && `, ${daysLeftText}`}
					</div>
					{isSendingReminderAvailable &&
						<Button
							to={`/scenarios/send-reminder/${scenarioId}`}
							className='Button-text p-h-0'
						>{sendReminder}</Button>
					}
				</div>

				{practiceGroups.map(({ title, practices }) => (
					<div key={title} className='CoachPracticeChats-group'>
						<div className='CoachPracticeChats-groupTitle'>{title}</div>

						<UserCardList
							className='InboxList-list'
							activeCard={activeInboxId}
							listData={practices}
							inboxList={[]}
							onSelectCard={this.handleInboxSelect}
							type={CARD_TYPES.CONVERSATION_CARD}
						/>
					</div>
				))}
			</div>
		);
	}
}

export default withRouter(CoachPracticeChats);
