import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { AvatarGroup } from '..';
import { LanguageContext } from '../../../utils';
import { Button } from '../../atoms';

import './styles.css';

export default class GroupChatHeader extends Component {
	static contextType = LanguageContext;
	static propTypes = {
		chatName: PropTypes.string,
		isModerator: PropTypes.bool,
		label: PropTypes.string,
		onDelete: PropTypes.func,
		onManageParticipantsOpen: PropTypes.func,
		participants: PropTypes.array,
	}

	state = {
		showParticipants: false,
	}

	handleToggleParticipants = () => {
		this.setState({ showParticipants: !this.state.showParticipants });
	}

	getControls () {
		const { isModerator, onDelete, onManageParticipantsOpen } = this.props;
		const { common } = this.context;

		if (!isModerator) return null;

		return (<Fragment>
			<Button
				className='Button-text GroupChatHeader-deleteBtn'
				onClick={onDelete}
			>
				{common.delete}
			</Button>
			<Button
				className='Button-text p-r-0'
				onClick={onManageParticipantsOpen}
			>
				{common.edit}
			</Button>
		</Fragment>);
	}

	render () {
		const { chatName, participants, label } = this.props;
		const controls = this.getControls();

		return (
			<div className='GroupChatHeader Conversation-header ConversationHeader'>
				<div className='GroupChatHeader-meta'>
					<div className='GroupChatHeader-label'>{ label }</div>
					{controls}
				</div>
				<div className='GroupChatHeader-title text-truncate'>{ chatName }</div>
				<div>
					<AvatarGroup avatars={participants} expanded={this.state.showParticipants} />
				</div>
				<div className='GroupChatHeader-manage' onClick={this.handleToggleParticipants}>
					{this.context.groupChat.viewParticipants}
				</div>
			</div>
		);
	}
}
