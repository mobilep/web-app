import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LanguageContext } from '../../../utils';
import { MessageBox, GroupChatHeader, MobileHeader } from '../';
import { Dialog, Button } from '../../atoms';
import { SuccessIcon } from '../../../icons';
import { scenarioInfo } from '../../../redux/reducers';

import './styles.css';
import { getScenariosChats } from '../../../redux/selectors/scenariosSelectors';
import { practiceHelpers } from '../../../helpers';
import { practiceStates } from '../../../constants/common';

const onlyActivePractices = practiceHelpers.hasNotState(practiceStates.COMPLETED);

export class SendReminderPage extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		history: PropTypes.object,
		match: PropTypes.object,
		onResetSendReminder: PropTypes.func,
		onSendReminderMessage: PropTypes.func,
		reminderSentScenarioId: PropTypes.string,
		scenariosChats: PropTypes.object,
	}

	messageBoxRef = React.createRef();
	reminderSentSuccessDialog = React.createRef();

	componentDidMount () {
		this.setDefaultReminderText();
	}

	componentDidUpdate (prevProps) {
		const { match, reminderSentScenarioId } = this.props;
		if (match && match.url !== prevProps.match.url) {
			this.onRouteChanged();
		}

		if (reminderSentScenarioId && !this.reminderSentSuccessDialog.current.open) {
			this.reminderSentSuccessDialog.current.showModal();
		}
	}

	onRouteChanged () {
		this.setDefaultReminderText();
	}

	setDefaultReminderText () {
		const messageDefaultContent = this.context.reminder.reminderDefaultMessage;
		this.messageBoxRef.current.setMessageContent(messageDefaultContent);
	}

	getReceivers (practiceChats) {
		if (!practiceChats) return [];

		return practiceChats.filter(onlyActivePractices).map(({ _user }) => _user);
	}

	getScenarioName (practiceChats) {
		if (!practiceChats || !practiceChats.length) return '';

		return practiceChats[0]._scenario.name;
	}

	cancelClick = () => {
		this.props.history.push('/scenarios');
	}

	handleMessageSend = (content, type) => {
		const { match: { params }, onSendReminderMessage } = this.props;
		const message = { content, type };

		onSendReminderMessage({ message, scenarioId: params.scenarioId });
	}

	handleSuccessDialogClose = () => {
		this.props.history.push('/scenarios');
		this.props.onResetSendReminder();
	}

	render () {
		const { reminder, inbox, common } = this.context;
		const { match: { params }, scenariosChats } = this.props;
		const receivers = this.getReceivers(scenariosChats[params.scenarioId]);
		const scenarioName = this.getScenarioName(scenariosChats[params.scenarioId]);
		const { matches } = window.matchMedia('(max-width: 768px)');

		return (
			<div className='Conversation SendReminderPage'>
				{matches && <MobileHeader
					className='Conversation-mobile-header SendReminderPage-mobileHeader'
					title={reminder.sendReminderTitle}
					closeButtonHandler={this.cancelClick}
				/>}
				<GroupChatHeader
					label={reminder.sendReminderTitle}
					chatName={scenarioName}
					participants={receivers}
				/>

				<MessageBox
					ref={this.messageBoxRef}
					className='Conversation-messageBox'
					placeholder={inbox.sendMessage}
					onMessageSend={this.handleMessageSend}
				/>

				{/* REMINDER SEND SUCCESS DIALOG */}
				<Dialog
					className='feedback-dialog'
					ref={this.reminderSentSuccessDialog}
					onClose={this.handleSuccessDialogClose}
				>
					<div className='feedback-dialogContent'>
						<div className='successIcon'>
							<SuccessIcon />
						</div>
						<div className='feedback-dialogTitle'>{reminder.reminderSendSuccess}</div>
						<Button onClick={this.handleSuccessDialogClose}>{common.continue}</Button>
					</div>
				</Dialog>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	scenariosChats: getScenariosChats(state),
	reminderSentScenarioId: state.scenarioInfo.reminderSentScenarioId,
});

const mapDispatchToProps = (dispatch) => {
	return {
		onSendReminderMessage: (data) => dispatch(scenarioInfo.sendReminder(data)),
		onResetSendReminder: () => dispatch(scenarioInfo.resetSentReminder()),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SendReminderPage));
