import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import UserCard from '../UserCard';

import './styles.css';

const ConversationCard = (props) => {
	const className = classNames({
		ConversationCard: true,
		'ConversationCard-practice': props.practiceCard,
	});

	return (
		<UserCard {...{ ...props,
			type: UserCard.CARD_TYPES.CONVERSATION_CARD,
			className } } />
	);
};

ConversationCard.propTypes = {
	active: PropTypes.bool,
	avatar: PropTypes.string,
	avatarColor: PropTypes.string,
	date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	first: PropTypes.bool,
	last: PropTypes.bool,
	lastIncoming: PropTypes.bool,
	message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	person: PropTypes.string,
	personInitials: PropTypes.string,
	practiceCard: PropTypes.bool,
	unread: PropTypes.bool,
};

export default ConversationCard;
