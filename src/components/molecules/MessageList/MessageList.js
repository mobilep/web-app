import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isSameDay, differenceInMinutes } from 'date-fns';
import classNames from 'classnames/bind';
import copy from 'copy-to-clipboard';
import constants from '../../../constants';
import { EmptyInboxArea, MessageListDate, LineOnSides, ContextMenu } from '../../atoms';
import { DialogWithButtonGroup, MessageGroup } from '../';

// utils
import { LanguageContext } from '../../../utils';
import { getPluralizationText } from './../../../helpers/languageHelpers';

import './styles.css';
import { isMessageMatchId } from '../../../helpers/messageHelpers';
import { matchId } from '../../../helpers/arrayHelpers';
import { messageMediaTypes } from '../../../constants/common';

const { common: { copyPasteID, messageTypes }, time: { JUST_SEND_LIMIT_MIN } } = constants;

class MessageList extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		children: PropTypes.any,
		className: PropTypes.string,
		currentUserId: PropTypes.string,
		lastReadMessage: PropTypes.string,
		messages: PropTypes.array,
		onDeleteMessage: PropTypes.func,
		onEvaluateClick: PropTypes.func,
		onSaveAsBestPracticeVideo: PropTypes.func,
		onViewDetailsClick: PropTypes.func,
		scenarioId: PropTypes.string,
		scenarioOwner: PropTypes.bool,
		scenarioVideoId: PropTypes.string,
		unreadMessagesCount: PropTypes.number,
		users: PropTypes.array,
	}

	static defaultProps = {
		messages: [],
		onDeleteMessage: () => {},
	}

	contentRef = React.createRef();
	dialogRef = React.createRef();
	saveAsBestPracticeVideoDialogRef = React.createRef();
	saveAsBestPracticeVideoInputRef = React.createRef();
	contextMenuDialogRef = React.createRef();
	ref = React.createRef();

	state = {
		selectedMessage: null,
		nameBestPracticeVideo: '',
		contextMenu: {
			visible: false,
			position: { x: 0, y: 0 },
		},
	}

	componentDidMount () {
		document.addEventListener('click', this.hideContextMenu);
		document.addEventListener('touchmove', this.hideContextMenu);
		this.scrollToBottom();
	}

	componentWillUnmount () {
		document.removeEventListener('click', this.hideContextMenu);
		document.removeEventListener('touchmove', this.hideContextMenu);
	}

	componentDidUpdate (prevProps) {
		if (prevProps.messages.length !== this.props.messages.length) {
			this.scrollToBottom();
		}
	}

	scrollToBottom () {
		if (!this.ref.current) return;

		this.ref.current.scrollTop = this.ref.current.scrollHeight;
	}

	handleWheelEvent = (e) => {
		if (this.state.contextMenu.visible) {
			e.preventDefault();
		}
	}

	handleContextMenu = (e, message) => {
		if (this.shouldRenderDeleteContextMenuButton(message) ||
			this.shouldRenderSaveBestPracticeContextButton(message) ||
			this.shouldRenderCopyContextButton(message)
		) {
			e.preventDefault();
			const { pageX, pageY } = e;
			this.setState(() => ({
				selectedMessage: message,
				contextMenu: {
					visible: true,
					position: {
						x: pageX + 5,
						y: pageY - 5,
					},
				},
			}));
		}
	}

	hideContextMenu = () => {
		this.setState(() => ({
			contextMenu: {
				visible: false,
				position: { x: 0, y: 0 },
			},
		}));
	}

	handleDeleteButtonClick = () => {
		this.dialogRef.current.showModal();
	}

	handleSaveBestPracticeButtonClick = () => {
		this.saveAsBestPracticeVideoDialogRef.current.showModal();
		this.saveAsBestPracticeVideoInputRef.current.focus();
	}

	handleSaveBestPracticeVideo = () => {
		const { videoId, duration } = this.state.selectedMessage.content;
		const { nameBestPracticeVideo: name } = this.state;
		this.props.onSaveAsBestPracticeVideo({ name, videoId, duration });
		this.saveAsBestPracticeVideoDialogRef.current.close();
	}

	handleDeleteMessage = () => {
		this.props.onDeleteMessage(this.state.selectedMessage.messageId);
		this.dialogRef.current.close();
	}

	handleCancelButtonClick = () => this.dialogRef.current.close();

	getMessageAuthor (message) {
		const { users, currentUserId } = this.props;
		const incoming = message._user !== currentUserId;
		let author = users.find(matchId(message._user));
		const isDeletedFromChat = !author && typeof message._user === 'string';

		if (isDeletedFromChat) {
			author = { firstName: this.context.inbox.deletedUser, avatar_md: 'system-logo' };
		} else if (!author) {
			author = { firstName: 'Mobile Practice', avatar_md: 'system-logo' };
		}

		return { incoming, author };
	}

	getMessageGroups () {
		const { messages } = this.props;
		return messages.reduce((messageGroups, message, index, messages) => {
			const { author, incoming } = this.getMessageAuthor(message);
			const prevMessage = index > 0 ? messages[index - 1] : null;
			const isFirstMessage = index === 0;
			const isLastMessage = index === messages.length - 1;
			const isFirstOfDay = isFirstMessage || !isSameDay(+message.time, +prevMessage.time);
			const userChanged = prevMessage ? message._user !== prevMessage._user : true;
			const timeLimitPassed = prevMessage
				? differenceInMinutes(+message.time, +prevMessage.time) >= JUST_SEND_LIMIT_MIN
				: true;

			if (isFirstMessage || isFirstOfDay || userChanged || timeLimitPassed) {
				messageGroups.push({
					author,
					incoming,
					time: Number(message.time),
					firstOfDay: isFirstOfDay,
					last: isLastMessage,
					messages: [message],
				});
			} else {
				messageGroups[messageGroups.length - 1].last = isLastMessage;
				messageGroups[messageGroups.length - 1].messages.push(message);
			}

			return messageGroups;
		}, []);
	}

	isMessageDeletable (message = {}) {
		const { type } = message;
		return type !== messageTypes.EVALUATION &&
			type !== messageTypes.EVALUATE &&
			type !== messageTypes.WELCOME &&
			type !== messageTypes.SYSTEM;
	}

	shouldRenderDeleteContextMenuButton (message) {
		if (!message) return;
		return message._user === this.props.currentUserId && this.isMessageDeletable(message);
	}

	shouldRenderSaveBestPracticeContextButton (message) {
		if (!message) return;
		const { scenarioOwner } = this.props;
		const isItVideoMessage = message.type === 'video';
		return !!scenarioOwner && isItVideoMessage;
	}

	shouldRenderCopyContextButton (message) {
		if (!message) return;
		const isMediaMessage = messageMediaTypes.includes(message.type);
		return isMediaMessage;
	}

	getStringifyMessageContent (content) {
		const infoStringify = JSON.stringify(content);
		return `${copyPasteID}${infoStringify}${copyPasteID}`;
	}

	handleMessageCopy = () => {
		const textToCopy = this.getStringifyMessageContent(this.state.selectedMessage.content);
		copy(textToCopy);
	}

	getContextMenu (commonContent, inboxContent, style) {
		const buttonsProps = [];

		if (this.shouldRenderCopyContextButton(this.state.selectedMessage)) {
			buttonsProps.push({ label: inboxContent.copy, onClick: this.handleMessageCopy });
		}

		if (this.shouldRenderSaveBestPracticeContextButton(this.state.selectedMessage)) {
			buttonsProps.push({
				label: inboxContent.saveAsBestPractice, onClick: this.handleSaveBestPracticeButtonClick,
			});
		}

		if (this.shouldRenderDeleteContextMenuButton(this.state.selectedMessage)) {
			buttonsProps.push({ label: commonContent.delete, onClick: this.handleDeleteButtonClick });
		}

		return (<ContextMenu
			buttonProps={buttonsProps}
			position={style}
		/>);
	}

	checkClassNameEmptyInbox (messageGroups) {
		if (messageGroups.length === 0) {
			return 'MessageList-content-empty';
		} else {
			return 'MessageList-content';
		}
	}

	getNewMessagesText (newMessageLocalizationObj, numberOfMessages) {
		if (!numberOfMessages) return null;

		return `${numberOfMessages} ${getPluralizationText(numberOfMessages, newMessageLocalizationObj)}`;
	}

	isLastReadGroup = (lastReadMessage) => (group) => {
		return !!group.messages.find(isMessageMatchId(lastReadMessage));
	}

	isLastMessageInGroup (messageId, { messages }) {
		const messagesLength = messages.length;
		const messageIndex = messages.findIndex((message) => message.messageId === messageId);

		return messageIndex === messagesLength - 1;
	}

	getLastReadMessagePosition (messageGroups, lastReadMessage) {
		const lastReadGroupIndex = messageGroups.findIndex(this.isLastReadGroup(lastReadMessage));
		const isLastInGroup = this.isLastMessageInGroup(lastReadMessage, messageGroups[lastReadGroupIndex]);

		return { lastReadGroupIndex, isLastInGroup };
	}

	getFirstNewMessagesGroupIndex (messageGroups) {
		const { lastReadMessage, unreadMessagesCount } = this.props;

		if (!unreadMessagesCount) return null;
		if (!lastReadMessage) return null;

		const { isLastInGroup, lastReadGroupIndex } = this.getLastReadMessagePosition(messageGroups, lastReadMessage);

		return isLastInGroup ? lastReadGroupIndex + 1 : null;
	}

	render () {
		const { x: left, y: top } = this.state.contextMenu.position;
		const messageGroups = this.getMessageGroups();
		const contextMenuStyle = { top, left };
		const className = classNames(
			'MessageList', this.props.className,
			{ 'MessageList-empty': messageGroups.length === 0 },
		);
		const {
			onEvaluateClick,
			onViewDetailsClick,
			scenarioOwner,
			scenarioId,
			unreadMessagesCount,
			lastReadMessage,
		} = this.props;
		const firstNewGroupIndex = this.getFirstNewMessagesGroupIndex(messageGroups);
		const { common, inbox, _contextSettings: { dateFnsLanguageCode } } = this.context;

		return (
			<Fragment>
				{this.state.contextMenu.visible &&
					this.getContextMenu(common, inbox, contextMenuStyle)
				}
				<DialogWithButtonGroup
					ref={this.dialogRef}
					className='MessageList-deleteMessageDialog'
					actionButtonLabel={common.delete}
					cancelButtonLabel={common.cancel}
					onActionButtonClick={this.handleDeleteMessage}
					onCancelButtonClick={this.handleCancelButtonClick}
				>
					{inbox.deleteMessageConfirmation}
				</DialogWithButtonGroup>

				<DialogWithButtonGroup
					ref={this.saveAsBestPracticeVideoDialogRef}
					onClose={() => this.setState({ nameBestPracticeVideo: '' })}
					className='MessageList-saveAsBestPracticeVideoDialog'
					actionButtonLabel={common.save}
					cancelButtonLabel={common.cancel}
					actionButtonDisabled={!this.state.nameBestPracticeVideo.trim()}
					onActionButtonClick={this.handleSaveBestPracticeVideo}
					onCancelButtonClick={this.handleCancelButtonClick}
				>
					<span>{inbox.createBestPractice}</span>
					<input
						ref={this.saveAsBestPracticeVideoInputRef}
						className='MessageList-bestPracticeName'
						maxLength={32}
						value={this.state.nameBestPracticeVideo}
						onChange={({ target }) => {
							this.setState({
								nameBestPracticeVideo: target.value,
							});
						}}
						placeholder={inbox.giveBestPracticeName}
					/>
				</DialogWithButtonGroup>
				<div className={className} onWheel={this.handleWheelEvent} ref={this.ref}>
					{/* LIST HEADER THROUGH CONTENT PROJECTION */}
					{ this.props.children }
					<div
						className={this.checkClassNameEmptyInbox(messageGroups)}
						ref={this.contentRef}>
						{(messageGroups.length === 0)
							? <EmptyInboxArea text={inbox.emptyState} />
							: messageGroups.map((messageGroup, index) => (
								<Fragment key={`MessageGroup-${messageGroup.time}-${messageGroup.incoming}`}>
									{index === firstNewGroupIndex &&
									<LineOnSides
										className='MessageList-dividerLine'
										text={
											this.getNewMessagesText(common.newMessage, unreadMessagesCount)
										}
									/>
									}
									{messageGroup.firstOfDay &&
									<MessageListDate
										yesterdayTextLabel={common.yesterday}
										todayTextLabel={common.today}
										timestamp={messageGroup.time}
										languageCode={dateFnsLanguageCode}
									/>
									}
									<MessageGroup
										{...messageGroup}
										justSentText={inbox.justSent}
										viewDetailsText={inbox.viewDetails}
										viewScenarioDetailsText={inbox.viewScenarioDetails}
										evaluateText={inbox.evaluate}
										onContextMenu={this.handleContextMenu}
										onEvaluateClick={onEvaluateClick}
										onViewDetailsClick={onViewDetailsClick}
										scenarioOwner={scenarioOwner}
										scenarioId={scenarioId}
										lastReadMessage={lastReadMessage}
									>
										<LineOnSides
											className='MessageList-dividerLine'
											text={
												this.getNewMessagesText(common.newMessage, unreadMessagesCount)
											}
										/>
									</MessageGroup>
								</Fragment>
							))
						}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default MessageList;
