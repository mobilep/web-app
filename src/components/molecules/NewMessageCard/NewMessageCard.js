import React from 'react';
import PropTypes from 'prop-types';

import UserCard from '../UserCard';
import './styles.css';

const NewMessageCard = ({ active, avatar, avatarColor, person, personInitials, first }) => (
	<UserCard {...{ active,
		avatar,
		avatarColor,
		person,
		personInitials,
		type: UserCard.CARD_TYPES.NEW_MESSAGE_CARD,
		className: `NewMessageCard ${first ? 'NewMessageCard-first' : ''}` } } />
);

NewMessageCard.propTypes = {
	active: PropTypes.bool,
	avatar: PropTypes.string,
	avatarColor: PropTypes.string,
	first: PropTypes.bool,
	person: PropTypes.string,
	personInitials: PropTypes.string,
};

export default NewMessageCard;
