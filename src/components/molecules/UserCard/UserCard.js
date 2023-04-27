import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withLanguageContext } from '../../../utils/LanguageContext';
import { isToday, format } from 'date-fns';
import classNames from 'classnames/bind';

import { CARD_TYPES } from './constants';
import { Avatar, MultilineEllipsis, SendAgo } from '../../atoms';
import { EvaluationIcon } from '../../../icons';

import './styles.css';

class UserCard extends Component {

	static CARD_TYPES = CARD_TYPES;

	formatDate (date, languageCode) {
		const formattedDate = isToday(new Date(date))
			? format(new Date(date), 'HH:mm', { locale: languageCode })
			: format(new Date(date), 'd MMM', { locale: languageCode });
		return formattedDate;
	}

	getClassName (practiceCard, active) {
		return classNames('UserCard', 'listItem', {
			'UserCard-practice': practiceCard,
			'UserCard-active': active,
			'listItem-active': active,
		});
	}

	render () {
		const {
			personInitials,
			person,
			message,
			date,
			active,
			unread,
			avatar,
			type,
			avatarColor,
			practiceCard,
			evaluated,
			evaluationMark,
			className,
			contextSettings,
			waitingForFeedback,
		} = this.props;

		const { dateFnsLanguageCode } = contextSettings;
		const isConversationCard = type === CARD_TYPES.CONVERSATION_CARD;

		const { matches } = window.matchMedia('(max-width: 768px)');

		return (
			<div className={`${this.getClassName(practiceCard, active)} ${className && className}`}>
				<div className={practiceCard ? 'UserCard-avatar' : ''}>
					<Avatar
						initials={personInitials}
						border={unread}
						img={avatar}
						color={`#${avatarColor}`}
						size={!matches ? Avatar.AVATAR_SIZES.AVATAR_28 : Avatar.AVATAR_SIZES.AVATAR_44}
					/></div>
				<div className='UserCard-content'>
					<div className={`UserCard-header ${practiceCard ? 'UserCard-practice-header' : ''}`}>
						<div className='UserCard-headerLeftContent'>
							{waitingForFeedback && practiceCard &&
								<SendAgo date={date} />
							}
							<div className='UserCard-person'>{person}</div>
						</div>
						{isConversationCard
							? <div className='UserCard-right-content'>
								<div className={`UserCard-date ${unread ? 'UserCard-date-unread' : ''}`}>
									{this.formatDate(date, dateFnsLanguageCode)}
								</div>
								{practiceCard && evaluated && <div>
									<span className='UserCard-evaluation-mark'>{evaluationMark}</span>
									<div className='UserCard-evaluation-icon'>
										<EvaluationIcon />
									</div></div>}
							</div>
							: null}
					</div>
					{isConversationCard
						? <div className='UserCard-message'>
							<MultilineEllipsis textContent={(message && message.text) || message} />
						</div>
						: null}
				</div>
			</div>
		);
	}
}

UserCard.propTypes = {
	active: PropTypes.bool,
	avatar: PropTypes.string,
	avatarColor: PropTypes.string,
	className: PropTypes.string,
	content: PropTypes.object,
	contextSettings: PropTypes.object,
	date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	evaluated: PropTypes.bool,
	evaluationMark: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	lastIncoming: PropTypes.bool,
	message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	person: PropTypes.string,
	personInitials: PropTypes.string,
	practiceCard: PropTypes.bool,
	type: PropTypes.oneOf(Object.values(CARD_TYPES)),
	unread: PropTypes.bool,
	waitingForFeedback: PropTypes.bool,
};

export default withLanguageContext(UserCard);
