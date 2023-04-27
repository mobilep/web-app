import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { LanguageContext } from '../../../utils';
import { SearchBox, UserCardList } from '../..';
import { CARD_TYPES } from '../../molecules/UserCard/constants';

import './styles.css';
import { matchId } from '../../../helpers/arrayHelpers';

const { Consumer: LanguageConsumer } = LanguageContext;

class InboxList extends Component {

	state = {
		inboxList: [],
		search: false,
		searchTerm: '',
	}

	static getDerivedStateFromProps (props) {
		const { inboxList } = props;

		return inboxList ? { inboxList } : null;
	}

	componentDidUpdate (prevProps) {
		if (prevProps.match.params.view !== this.props.match.params.view) {
			// eslint-disable-next-line react/no-did-update-set-state
			this.setState({ searchTerm: '' });
		}
	}

	getFilteredList (list, termValue) {
		if (!termValue) return list;

		const searchTerm = termValue.trim();
		return list.filter((item) => {
			if (item._recipient) {
				return this.isChatNameMatchSearchTerm(searchTerm)(item._recipient.name);
			}

			return this.isChatNameMatchSearchTerm(searchTerm)(item.title || '');
		});
	}

	isChatNameMatchSearchTerm = (searchTerm) => (chatName) => {
		return chatName.toLowerCase().includes(searchTerm);
	}

	handleSearchBoxChange = (term) => {
		const searchTerm = term.toLowerCase();
		this.setState({ search: true, searchTerm });
	};

	handleCardSelect = (inboxId) => {
		const { history, inboxList } = this.props;
		const inbox = inboxList.find(matchId(inboxId));
		const view = inbox.users ? 'group-chat' : 'chat';
		return history.push(`/inbox/${view}/${inboxId}`);
	}

	render () {
		const {
			activeCard,
			fetching,
			match: { params },
		} = this.props;
		const { inboxList, search, searchTerm } = this.state;

		const listData = this.getFilteredList(inboxList, searchTerm);
		const listType = CARD_TYPES.CONVERSATION_CARD;

		if (fetching) return null;
		return (
			<LanguageConsumer>
				{({ inbox }) => (
					<div className='InboxList'>
						<div className='Inbox-search-wrapper'>
							<SearchBox
								name='searchbox'
								category={''}
								onChange={this.handleSearchBoxChange}
								view={params.view}
								placeholder={inbox.searchLabel}
							/>
						</div>
						{listData.length ? (
							<UserCardList
								className='InboxList-list'
								activeCard={activeCard}
								listData={listData}
								inboxList={this.props.inboxList}
								onSelectCard={this.handleCardSelect}
								type={listType}
							/>
						) : (
							<div className='Inbox-empty-state'>
								<span>{search ? inbox.noResults : inbox.emptyState}</span>
							</div>
						)}
					</div>
				)}
			</LanguageConsumer>
		);
	}
}

InboxList.propTypes = {
	activeCard: PropTypes.string,
	fetching: PropTypes.bool,
	history: PropTypes.object,
	inboxList: PropTypes.array,
	match: PropTypes.object,
};

InboxList.defaultProps = {
	onSelectCard: () => {},
};

export default InboxList;
