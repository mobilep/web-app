import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import constants from '../../../constants';
import {
	ConversationHeader,
	Dialog,
	ErrorSubmit,
	DialogWithButtonGroup,
	EvaluateDialog,
	MessageBox,
	MessageList,
	MobileHeader,
	ViewLoader,
} from '../..';
import { TILE_TYPES } from '../../atoms/VideoTile/constants';

// helpers
import { getInitials } from '../../../helpers';
import { withLanguageContext } from '../../../utils/LanguageContext';
import { isMessageMatchId } from '../../../helpers/messageHelpers';
import { getLastElementInArray } from '../../../helpers/arrayHelpers';

import './styles.css';
import GroupChatHeader from '../../molecules/GroupChatHeader/GroupChatHeader';
import { chatSubType } from '../../../constants/common';

const { common } = constants;
const { mediaLoadingStates: { COMPLETED, CHECKING }, messageTypes } = common;

const DIALOG_MODES = {
	EVALUATION: 'evaluation',
	VIEW: 'view',
};

class Conversation extends Component {

	static propTypes = {
		chatType: PropTypes.string,
		className: PropTypes.string,
		content: PropTypes.object,
		currentUserId: PropTypes.string,
		data: PropTypes.object,
		evaluatedInbox: PropTypes.bool,
		history: PropTypes.object,
		imagesInfo: PropTypes.object,
		inboxError: PropTypes.bool,
		loading: PropTypes.bool,
		match: PropTypes.object,
		mediaInfo: PropTypes.object,
		messages: PropTypes.object,
		onComponentUnmount: PropTypes.func,
		onDeleteChat: PropTypes.func,
		onDeleteMessage: PropTypes.func,
		onEvaluate: PropTypes.func,
		onGetInbox: PropTypes.func,
		onManageParticipantsOpen: PropTypes.func,
		onSaveAsBestPracticeVideo: PropTypes.func,
		onSendMessage: PropTypes.func,
		saveBestPracticeVideoError: PropTypes.bool,
		videosInfo: PropTypes.object,
	}

	static defaultProps = {
		data: {
			_recipient: {},
			_coach: {},
			_user: {},
			messages: [],
		},
		match: { params: {} },
		onDeleteMessage: () => {},
		onGetInbox: () => {},
		onSendMessage: () => {},
		onManageParticipantsOpen: () => {},
	}

	state = {
		dialogContent: {
			fullName: '',
			initials: '',
			onSubmit: () => {},
			onCancel: () => {},
			evaluationList: [],
			text: {},
			disabled: true,
			marks: [],
		},
	}

	evaluationDialogRef = React.createRef();
	confirmationDialogRef = React.createRef();
	saveBestPracticeVideoErrorDialogRef = React.createRef();
	inboxErrorDialogRef = React.createRef();

	uploadVideoDialogRef = null;
	uploadPhotoDialogRef = null;

	componentWillUnmount () {
		this.props.onComponentUnmount();
	}

	componentDidMount () {
		const { match: { params } } = this.props;
		this.props.onGetInbox({ inboxId: params.inboxId, chatType: this.props.chatType });
	}

	componentDidUpdate ({ match: { params }, data: { messages }, saveBestPracticeVideoError, inboxError }) {
		if (!saveBestPracticeVideoError && this.props.saveBestPracticeVideoError) {
			return this.saveBestPracticeVideoErrorDialogRef.current.showModal();
		}
		if (!inboxError && this.props.inboxError) {
			return this.showInboxError();
		}
		const currentMessages = this.props.data.messages;
		const currentParams = this.props.match.params;
		if (params.inboxId !== currentParams.inboxId) {
			this.props.onGetInbox({ inboxId: currentParams.inboxId, chatType: this.props.chatType });
			return;
		}
		const prevAndCurrentMessages = messages && currentMessages &&
			messages.length !== 0 && currentMessages.length !== 0;
		if (prevAndCurrentMessages) {
			const incoming = currentMessages[currentMessages.length - 1]._user !== this.props.currentUserId;
			if (messages[messages.length - 1].type !== messageTypes.EVALUATION &&
				currentMessages[currentMessages.length - 1].type === messageTypes.EVALUATION && incoming) {
				this.props.onGetInbox({ inboxId: currentParams.inboxId, chatType: this.props.chatType });
				return;
			}
		}
	}

	showInboxError () {
		// [MPP-959] use timeout to access inboxErrorDialogRef - on the IOS it's not available immediately
		setTimeout(() => {
			this.inboxErrorDialogRef.current.showModal();
		});
	}

	getUploadVideoDialogRef = (dialog) => {
		this.uploadVideoDialogRef = dialog;
	}

	getUploadPhotoDialogRef = (dialog) => {
		this.uploadPhotoDialogRef = dialog;
	}

	handleDeleteMessage = (messageId) => {
		this.props.onDeleteMessage({ messageId, chatType: this.props.chatType });
	}

	handleSaveAsBestPracticeVideo = ({ name, videoId, duration }) => {
		const { data } = this.props;
		const { _scenario, _id } = data;
		const inboxId = _id;
		const scenarioId = _scenario && _scenario._id;
		this.props.onSaveAsBestPracticeVideo({
			inboxId, scenarioId, videoId, duration, name,
		});
	}

	handleEvaluate = (values) => {
		const { onEvaluate, data } = this.props;
		// TODO double check if practiceId is correct
		const { relatedScenario, _id: practiceId } = data;
		let scenarioId;
		if (relatedScenario) {
			scenarioId = relatedScenario._id;
		} else {
			scenarioId = data._scenario._id;
		}
		let mark;
		if (this.props.data._coach._id === this.props.currentUserId) {
			mark = 'coachMark';
		} else {
			mark = 'userMark';
		}
		const body = this.proccesEvaluationForSubmit(values, mark);
		onEvaluate({ body, scenarioId, practiceId });
		this.evaluationDialogRef.current.close();
	}

	// handle AUDIO/IMAGE/FILE/VIDEO/TEXT send
	handleMessageSend = (content, type) => {
		const { onSendMessage, chatType } = this.props;

		onSendMessage({	content, type, chatType	});
	}

	handleEvaluationDialogOpen = () => {
		if (this.props.data._scenario) {
			this.setState({ evaluationMode: DIALOG_MODES.EVALUATION }, () => {
				this.evaluationDialogRef.current.showModal();
			});
		}
	}

	handleEvaluationViewDialogOpen = (incoming) => {
		if (this.props.data._scenario) {
			this.setState({ evaluationMode: DIALOG_MODES.VIEW, incoming }, () => {
				this.evaluationDialogRef.current.showModal();
			});
		}
	}

	handleAddPhotoButtonClick = () => {
		this.uploadPhotoDialogRef.showModal();
	}

	handleAddVideoButtonClick = () => {
		this.uploadVideoDialogRef.showModal();
	}

	navigateBack = () => {
		if (this.props.match.url.includes(constants.routes.SCENARIOS)) {
			this.props.history.push('/scenarios');
		} else {
			this.props.history.push('/inbox');
		}
	}

	getClassName = (className) => classNames('Conversation', className);

	getEvaluationList (criterias = []) {
		return criterias
			.map(({ _id, name }) => ({ id: _id, title: name }));
	}

	proccesEvaluationForSubmit (evaluation, markType = 'coachMark') {
		const scores = Object
			.keys(evaluation)
			.map((_criteria) => ({ _criteria, mark: evaluation[_criteria] }));
		return {
			[markType]: scores,
		};
	}

	handleDeleteClick = () => {
		this.confirmationDialogRef.current.showModal();
	}

	handleDeleteChat = () => {
		const { chatType } = this.props;
		this.props.onDeleteChat({ chatType });
		this.confirmationDialogRef.current.close();
		this.props.history.push('/inbox');
	}

	handleDialogErrorButtonClick = () =>
		this.saveBestPracticeVideoErrorDialogRef.current.close();

	renderDialog = (props, state) => {
		const { data, content: { inbox, common, evaluateDialog }, currentUserId } = props;

		const { _recipient, _coach, _scenario, _user, relatedScenario, coachMark, userMark, _id, users } = data;
		let recipient = _recipient || _coach || {};

		const isCoach = _coach && _coach._id === currentUserId;

		if (isCoach) {
			recipient = _user;
		}

		const { _criterias } = relatedScenario || {};
		const evaluationList = this.getEvaluationList(_criterias);

		const dialogProps = {
			initials: getInitials(recipient.firstName, recipient.lastName),
			skills: _scenario.name,
			onSubmit: this.handleEvaluate,
			onCancel: () => {
				this.evaluationDialogRef.current.close();
			},
			evaluationList,
			text: { ...common, ...evaluateDialog },
			scenarioCriterias: inbox.scenarioCriterias,
			disabled: true,
			fullName: recipient.name,
			coachMark,
			userMark,
			marks: [],
			user: !isCoach,
			img: recipient.avatar_sm,
			avatarColor: recipient.avatarColor,
		};
		const { matches } = window.matchMedia('(max-width: 768px)');

		if (_scenario && !users) {
			const { evaluatedInbox } = this.props;
			const currentEvaluatedLast = evaluatedInbox && evaluatedInbox._id === _id;
			if (state.evaluationMode === DIALOG_MODES.EVALUATION) {
				dialogProps.evaluationList = !isCoach
					? inbox.scenarioCriterias : evaluationList;

				dialogProps.marks = !isCoach ? userMark : coachMark;
				dialogProps.marks = currentEvaluatedLast && evaluatedInbox._coach._id === currentUserId
					? evaluatedInbox.coachMark
					: dialogProps.marks;
				dialogProps.marks = currentEvaluatedLast && evaluatedInbox._coach._id !== currentUserId
					? evaluatedInbox.userMark
					: dialogProps.marks;

				const evaluatedByUser = evaluatedInbox && evaluatedInbox.userMark.length > 0;
				const evaluatedByCoach = evaluatedInbox && evaluatedInbox.coachMark.length > 0;
				const coachEvaluatedCurrentLast = evaluatedByCoach && currentEvaluatedLast && isCoach;
				const userEvaluatedCurrentLast = evaluatedByUser && currentEvaluatedLast && !isCoach;

				dialogProps.coachTitle = isCoach;
				dialogProps.disabled = (coachMark.length > 0 && isCoach) ||
					(userMark.length > 0 && !isCoach) || coachEvaluatedCurrentLast || userEvaluatedCurrentLast;

			} else if (state.incoming) {
				dialogProps.fullName = inbox.you;
				dialogProps.marks = !isCoach ? coachMark : userMark;
				dialogProps.coachTitle = !isCoach;
			} else if (!state.incoming) {
				dialogProps.fullName = recipient.name;
				dialogProps.marks = isCoach ? coachMark : userMark;
				if (currentEvaluatedLast) {
					dialogProps.marks = isCoach ? evaluatedInbox.coachMark : evaluatedInbox.userMark;
				}
				dialogProps.coachTitle = isCoach;
			}
		}

		return (
			<Dialog ref={this.evaluationDialogRef} className='Conversation-evaluate-dialog'>
				{matches &&
					<MobileHeader className='Conversation-evaluate-mobile-header'
						crossIconType
						title={inbox.evaluate}
						buttonsProps={!dialogProps.disabled && [
							{
								label: 'Send',
								onClick: this.handleEvaluate,
							},
						]}
						closeButtonHandler={() => {
							this.evaluationDialogRef.current.close();
						}}
					/>
				}
				<EvaluateDialog
					className='Conversation-evaluation-content'
					{...dialogProps}
					learnerName={data._user && data._user.firstName}
					criteriaLists={evaluateDialog}
				/>
			</Dialog>
		);
	}

	renderConfirmationDialog (message, deleteText, cancelText) {
		return (
			<DialogWithButtonGroup
				ref={this.confirmationDialogRef}
				cancelButtonLabel={cancelText}
				actionButtonLabel={deleteText}
				onActionButtonClick={this.handleDeleteChat}
			>
				<div className='Conversation-delete-dialog-content'>{message}</div>
			</DialogWithButtonGroup>);
	}

	getVideoMessageTileType (videoId) {
		if (this.props.videosInfo[videoId]) {
			if (this.props.videosInfo[videoId].state !== COMPLETED) {
				return TILE_TYPES.UPLOADING;
			}
		}
		return TILE_TYPES.DEFAULT;
	}

	getImageMessageLoadingState (imageId) {
		return this.props.imagesInfo[imageId]
			? this.props.imagesInfo[imageId].state
			: CHECKING;
	}

	getMediaMessageLoadingState (mediaId) {
		return this.props.mediaInfo[mediaId]
			? this.props.mediaInfo[mediaId].state
			: CHECKING;
	}

	processVideoMessage (msg) {
		return {
			...msg,
			content: {
				...msg.content,
				videoTileType: this.getVideoMessageTileType(msg.content.videoId),
			},
		};
	}

	processImageMessage (msg) {
		return {
			...msg,
			loadingState: this.getImageMessageLoadingState(msg.content.imageId),
		};
	}

	processAudioMessage (msg) {
		return {
			...msg,
			loadingState: this.getMediaMessageLoadingState(msg.content.audioId),
		};
	}

	processMessages (messages = this.props.messages) {
		return messages.map((msg) => {
			switch (msg.type) {
				case messageTypes.VIDEO:
					return this.processVideoMessage(msg);
				case messageTypes.IMAGE:
					return this.processImageMessage(msg);
				case messageTypes.AUDIO:
					return this.processAudioMessage(msg);
				default:
					return msg;
			}
		});
	}

	isOwnMessage = (currentUserId) => (message) => {
		return message._user === currentUserId;
	}

	getInboxKeyPropFromData (key) {
		const { data } = this.props;

		if (typeof data[key] !== 'undefined') return data[key];

		if (data._inbox) return data._inbox[key];

		return null;
	}

	getLastReadMsgId () {
		const { currentUserId, data: { messages = [] } } = this.props;
		const lastReadMessage = this.getInboxKeyPropFromData('lastReadMessage');
		const lastReadInboxMessage = messages.find(isMessageMatchId(lastReadMessage));

		if (!lastReadMessage || !lastReadInboxMessage) return null;

		const ownMessages = messages.filter(this.isOwnMessage(currentUserId));
		const lastOwnMessage = getLastElementInArray(ownMessages);

		if (lastOwnMessage && +lastOwnMessage.time > +lastReadInboxMessage.time) {
			return lastOwnMessage.messageId;
		}

		return lastReadMessage;
	}

	canManage (currentUserId, inbox) {
		if (!inbox._scenario && inbox._moderator) {
			return currentUserId === inbox._moderator._id;
		}

		return false;
	}

	handleInboxErrorClose = () => {
		this.navigateBack();
		this.inboxErrorDialogRef.current.close();
	}

	getConversationHeader (isModerator) {
		const { data, currentUserId, content: { common, groupChat, scenarios }, onManageParticipantsOpen } = this.props;
		const { matches } = window.matchMedia('(max-width: 768px)');
		const {
			_recipient,
			_user,
			_coach,
			_scenario,
			relatedScenario,
		} = data;
		const recipient = _recipient || _coach || {};
		const scenarioOwner = _coach && _coach._id === currentUserId;
		const recipientName = scenarioOwner ? _user.name : recipient.name;
		const buttonsProps = this.getMobileHeaderButtons(isModerator);

		if (matches) {
			return (<MobileHeader
				className='Conversation-mobile-header'
				title={recipientName || groupChat.label}
				buttonsProps={buttonsProps}
				closeButtonHandler={this.navigateBack}
				description={!!_coach}
				descriptionText={scenarioOwner ? scenarios.learner : scenarios.coach}
			/>);
		}

		if (data.users) {
			return (<GroupChatHeader
				chatName={data.groupChatName}
				participants={data.users}
				label={groupChat.label}
				isModerator={isModerator}
				onManageParticipantsOpen={onManageParticipantsOpen}
				onDelete={this.handleDeleteClick}
			/>);
		}

		return (<ConversationHeader
			className='Conversation-header'
			title={recipientName}
			actionButton={!!relatedScenario}
			actionButtonLabel={common.evaluate}
			onActionButtonClick={this.handleEvaluationDialogOpen}
			inboxMode={!_scenario}
			onDeleteButtonClick={this.handleDeleteClick}
			deleteButtonLabel={common.delete}
			scenarioCoach={scenarios.coach}
			scenarioUser={scenarios.learner}
			scenarioOwner={scenarioOwner}
			coach={_coach}
			user={_user}
		/>);
	}

	getMobileHeaderButtons (isModerator) {
		const { data, chatType, onManageParticipantsOpen, content: { inbox, common } } = this.props;
		const { relatedScenario, _scenario } = data;

		if (relatedScenario) {
			return [{
				label: inbox.evaluate,
				onClick: this.handleEvaluationDialogOpen,
			}];
		}

		const isPrivateChat = !_scenario && chatType !== chatSubType.GROUP_CHAT;
		if (isPrivateChat) {
			return [
				{	label: common.delete,	onClick: this.handleDeleteClick },
			];
		}

		if (isModerator) {
			return [
				{	label: common.edit,	onClick: onManageParticipantsOpen },
				{	label: common.delete,	onClick: this.handleDeleteClick	},
			];
		}
	}

	render () {
		const {
			loading,
			data,
			className,
			currentUserId,
			content: { common, inbox, groupChat },
			onManageParticipantsOpen,
		} = this.props;
		const {
			_recipient,
			_user,
			_coach,
			_scenario,
			messages = [],
		} = data;
		const scenarioId = _scenario && _scenario._id;
		const recipient = _recipient || _coach || {};
		const scenarioVideoId = data.relatedScenario ? data.relatedScenario.videoId : null;
		const { matches } = window.matchMedia('(max-width: 768px)');
		const isModerator = this.canManage(currentUserId, data);

		const proccesedMessages = this.processMessages(messages);
		if (loading) return <div className='Conversation Conversation-loading'><ViewLoader /></div>;
		return (
			<Fragment>
				{_scenario
					? this.renderDialog(this.props, this.state)
					: this.renderConfirmationDialog(inbox.deleteChatConfirmation, common.delete, common.cancel)}

				<div className={this.getClassName(className)}>
					{this.getConversationHeader(isModerator)}

					<MessageList
						users={data.users || [recipient, _user]}
						currentUserId={currentUserId}
						scenarioVideoId={scenarioVideoId}
						scenarioId={scenarioId}
						className='Conversation-messageList'
						messages={proccesedMessages}
						onDeleteMessage={this.handleDeleteMessage}
						onSaveAsBestPracticeVideo={this.handleSaveAsBestPracticeVideo}
						onEvaluateClick={this.handleEvaluationDialogOpen}
						onViewDetailsClick={this.handleEvaluationViewDialogOpen}
						scenarioOwner={_coach && _coach._id === currentUserId}
						unreadMessagesCount={this.getInboxKeyPropFromData('unreadMessagesCount')}
						lastReadMessage={this.getLastReadMsgId()}
					>
						{!!data.users && matches &&
						<GroupChatHeader
							chatName={data.groupChatName}
							participants={data.users}
							label={groupChat.label}
							isModerator={isModerator}
							onManageParticipantsOpen={onManageParticipantsOpen}
						/>
						}
					</MessageList>

					<MessageBox
						className='Conversation-messageBox'
						placeholder={inbox.sendMessage}
						onMessageSend={this.handleMessageSend}
					/>
				</div>
				<Dialog
					className='Conversation-saveBestPracticeVideoDialogError'
					ref={this.saveBestPracticeVideoErrorDialogRef}>
					<ErrorSubmit
						onButtonClick={() => this.saveBestPracticeVideoErrorDialogRef.current.close()}
						message={inbox.bestPracticeError}
						buttonLabel={inbox.goBack}
					/>
				</Dialog>

				{/* Inbox Error Dialog */}
				<Dialog
					className='Conversation-saveBestPracticeVideoDialogError'
					ref={this.inboxErrorDialogRef}
					// eslint-disable-next-line react/jsx-handler-names
					onClose={this.navigateBack}
				>
					<ErrorSubmit
						onButtonClick={this.handleInboxErrorClose}
						message={inbox.inboxError}
						buttonLabel={inbox.goBack}
					/>
				</Dialog>
			</Fragment>
		);
	}
}

export default withLanguageContext(Conversation);
