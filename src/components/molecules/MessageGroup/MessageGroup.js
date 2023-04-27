import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Avatar } from '../..';
import Message from '../Message';

import { getInitials } from '../../../helpers';
import { getTimeString } from '../../../utils/time';

import './styles.css';

class MessageGroup extends Component {

	static propTypes = {
		author: PropTypes.object,
		children: PropTypes.any,
		className: PropTypes.string,
		evaluateText: PropTypes.string,
		incoming: PropTypes.bool,
		justSentText: PropTypes.string,
		last: PropTypes.bool,
		lastReadMessage: PropTypes.string,
		messages: PropTypes.array,
		onContextMenu: PropTypes.func,
		onEvaluateClick: PropTypes.func,
		onViewDetailsClick: PropTypes.func,
		scenarioId: PropTypes.string,
		scenarioOwner: PropTypes.bool,
		time: PropTypes.number,
		viewDetailsText: PropTypes.string,
		viewScenarioDetails: PropTypes.string,
		viewScenarioDetailsText: PropTypes.string,
	}

	static defaultProps = {
		author: {},
		messages: [],
		onContextMenu: () => {},
	}

	getClassName () {
		const { className, incoming } = this.props;

		return classNames({ incoming }, 'MessageGroup', className);
	}

	getMessagesView () {
		const { messages } = this.props;

		return messages.map(this.getMessageView);
	}

	getMessageView = (message, index) => {
		const {
			incoming,
			onContextMenu,
			viewDetailsText,
			viewScenarioDetailsText,
			evaluateText,
			onEvaluateClick,
			onViewDetailsClick,
			scenarioOwner,
			scenarioId,
			messages,
			justSentText,
			author,
			lastReadMessage,
			children,
		} = this.props;

		const last = index === messages.length - 1;
		const timeString = getTimeString({ justSentText, time: +message.time, last, author: author.firstName });

		return (
			<Fragment key={`${message.messageId}`}>
				<Message
					className='MessageGroup-message'
					message={{ ...message, timeString }}
					incoming={incoming}
					singleOrLast={last}
					onContextMenu={onContextMenu}
					viewDetailsText={viewDetailsText}
					viewScenarioDetailsText={viewScenarioDetailsText}
					evaluateText={evaluateText}
					onEvaluateClick={onEvaluateClick}
					onViewDetailsClick={onViewDetailsClick}
					scenarioOwner={scenarioOwner}
					scenarioId={scenarioId}
				/>
				{ message.messageId === lastReadMessage && !last && children }
			</Fragment>
		);
	}

	render () {
		const {
			author,
			messages,
		} = this.props;
		if (messages.length === 0) return null;

		const initials = getInitials(author.firstName, author.lastName);
		const messagesView = this.getMessagesView();

		return (
			<div className={this.getClassName()}>
				<Avatar
					size={Avatar.AVATAR_SIZES.AVATAR_28}
					initials={initials}
					color={`#${author.avatarColor}`}
					img={author.avatar_md}
				/>
				<div className='MessageGroup-content'>
					<div className='MessageGroup-messages'>{messagesView}</div>
				</div>
			</div>
		);
	}
}

export default MessageGroup;
