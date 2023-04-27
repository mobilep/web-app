import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ConversationCard from '../ConversationCard';
import NewMessageCard from '../NewMessageCard';
import { CARD_TYPES } from '../UserCard/constants';
import { inboxListHelper } from '../../../helpers';
import constants from '../../../constants';
import './styles.css';
import { LanguageContext } from '../../../utils';

const { UNREAD } = constants.common.inboxStatuses;

export default class UserCardList extends Component {
	static contextType = LanguageContext;

	getPersonInitials (firstName = '', lastName = '') {
		return firstName.charAt(0) + lastName.charAt(0);
	}

	getListData ({
		listData,
		type,
		...rest
	}) {
		if (!listData) return [];

		if (type === CARD_TYPES.CONVERSATION_CARD) {
			return inboxListHelper({
				listData,
				...rest,
				...this.context.inbox,
			});
		}

		return listData;
	}

	handleCardSelect = (id, inboxList) => {
		this.props.onSelectCard(id, inboxList);
	}

	renderConversationList (listData) {
		const list = [...listData].sort((prevItem, item) => {
			if (item.message && prevItem.message) {
				const itemTime = Math.max(+item.message.time || 0, +new Date(item.createdAt));
				const prevItemTime = Math.max(+prevItem.message.time || 0, +new Date(prevItem.createdAt));
				try {
					const diff = itemTime - prevItemTime;
					if (diff) return diff;
				} catch (e) {
					return 0;
				}
			}
			return 0;
		});
		const { activeCard } = this.props;
		return list.map((item) => {
			const {
				_id,
				_recipient,
				message,
				updatedAt,
				status,
				_scenario,
				_inbox,
				state,
				groupChatName,
				groupAvatar,
			} = item;
			const personInitials = this.getPersonInitials(_recipient.firstName, _recipient.lastName);
			const isLastIncoming = _recipient._id === message._user;
			const coachEvaluated = item.coachMark && item.coachMark.length !== 0;
			const coachMark = coachEvaluated && item.coachMark.map((item) => item.mark);
			const coachMarkSum = coachMark && coachMark.reduce((a, b) => a + b, 0);
			const mark = coachMarkSum && coachMarkSum / coachMark.length;
			const evaluationMark = parseFloat(mark).toPrecision(2);
			let inboxStatus;

			if (status === UNREAD) {
				inboxStatus = status;
			} else {
				inboxStatus = _scenario ? _inbox.status : status;
			}
			return (
				<li className='UserCardList-item' key={_id} onClick={() => this.handleCardSelect(_id, listData)}>
					<ConversationCard
						waitingForFeedback={state === 'waitingOnFeedback'}
						active={_id === activeCard}
						avatar={groupAvatar || _recipient.avatar_sm}
						avatarColor={_recipient.avatarColor}
						date={+message.time || updatedAt}
						lastIncoming={isLastIncoming}
						message={message.content}
						person={_recipient.name || groupChatName}
						personInitials={personInitials}
						unread={inboxStatus === 'unread'}
						practiceCard={!!_scenario}
						evaluated={!!coachEvaluated}
						evaluationMark={evaluationMark} />
				</li>
			);
		});
	}

	getClassName = (className) => classNames('UserCardList', className);

	renderUserList (listData) {
		const { activeCard, inboxList } = this.props;

		return listData.map((item, index) => {
			const {
				_id,
				avatar_sm,
				avatarColor,
				firstName,
				lastName,
				name,
			} = item;
			const personInitials = this.getPersonInitials(firstName, lastName);

			return (
				<li className='UserCardList-item' key={_id} onClick={() => this.handleCardSelect(_id, inboxList)}>
					<NewMessageCard
						active={_id === activeCard}
						avatar={avatar_sm}
						avatarColor={avatarColor}
						person={name}
						personInitials={personInitials}
						first={index === 0}
					/>
				</li>
			);
		});
	}

	render () {
		const { type, className } = this.props;
		const listData = this.getListData(this.props);

		if (!listData || !listData.length) return null;

		return (<ul className={this.getClassName(className)}>
			{type === CARD_TYPES.CONVERSATION_CARD
				? this.renderConversationList(listData)
				: this.renderUserList(listData)
			}
		</ul>);
	}
}

UserCardList.propTypes = {
	activeCard: PropTypes.string,
	className: PropTypes.string,
	inboxList: PropTypes.array,
	listData: PropTypes.array,
	onComponentDidMount: PropTypes.func,
	onSelectCard: PropTypes.func,
	type: PropTypes.oneOf(Object.values(CARD_TYPES)),
};

UserCardList.defaultProps = {
	onComponentDidMount: () => {},
	onSelectCard: () => {},
};
