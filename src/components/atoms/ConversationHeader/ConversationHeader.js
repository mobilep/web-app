import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Avatar, Button } from '../..';
import { AVATAR_SIZES } from '../Avatar/constants';
import { getInitials } from '../../../helpers';

import './styles.css';

class ConversationHeader extends Component {

	render () {
		const {
			title,
			actionButton,
			actionButtonLabel,
			className,
			onActionButtonClick,
			inboxMode,
			onDeleteButtonClick,
			deleteButtonLabel,
			scenarioCoach,
			scenarioUser,
			scenarioOwner,
			coach,
			user,
		} = this.props;
		const userInitials = user && getInitials(user.firstName, user.lastName);
		const coachInitials = coach && getInitials(coach.firstName, coach.lastName);

		return (
			<div className={classNames('ConversationHeader', className)}>
				<div className='ConversationHeader-user'>
					{!inboxMode &&
					<Avatar
						className='ConversationHeader-avatar'
						initials={scenarioOwner ? userInitials : coachInitials}
						size={AVATAR_SIZES.AVATAR_44}
						color={scenarioOwner ? user && user.avatarColor : coach && coach.avatarColor}
						img={scenarioOwner ? user && user.avatar_sm : coach && coach.avatar_sm}
					/>}
					<div className='ConversationHeader-user-name'>
						<span>{title}</span>
						{!inboxMode && <p>{scenarioOwner ? scenarioUser : scenarioCoach}</p>}
					</div>
				</div>
				{actionButton &&
				<div className='ConversationHeader-evaluate'>
					<Button className='Button-text p-h-0' onClick={onActionButtonClick}>
						{actionButtonLabel}
					</Button>
				</div>
				}
				{inboxMode &&
					<Button className='Button-text p-h-0' onClick={onDeleteButtonClick}>
						{deleteButtonLabel}
					</Button>
				}
				{!inboxMode && <div className='ConversationHeader-user ConversationHeader-user-right'>
					<Avatar
						className='ConversationHeader-avatar'
						initials={!scenarioOwner ? userInitials : coachInitials}
						size={AVATAR_SIZES.AVATAR_44}
						color={!scenarioOwner ? user && user.avatarColor : coach && coach.avatarColor}
						img={!scenarioOwner ? user && user.avatar_sm : coach && coach.avatar_sm}
					/>
					<div className='ConversationHeader-user-name ConversationHeader-user-name-secondary'>
						<span>{scenarioOwner ? coach && coach.name : user && user.name}</span>
						{!inboxMode && <p>{!scenarioOwner ? scenarioUser : scenarioCoach}</p>}
					</div>
				</div>}
			</div>
		);
	}

}

ConversationHeader.defaultProps = {
	title: '',
	actionButtonLabel: 'Evaluate',
	onActionButtonClick: () => {},
	onDeleteButtonClick: () => {},
};

ConversationHeader.propTypes = {
	actionButton: PropTypes.bool,
	actionButtonLabel: PropTypes.string,
	className: PropTypes.string,
	coach: PropTypes.object,
	deleteButtonLabel: PropTypes.string,
	inboxMode: PropTypes.bool,
	onActionButtonClick: PropTypes.func,
	onDeleteButtonClick: PropTypes.func,
	scenarioCoach: PropTypes.string,
	scenarioOwner: PropTypes.bool,
	scenarioUser: PropTypes.string,
	title: PropTypes.string,
	user: PropTypes.object,
};

export default ConversationHeader;
