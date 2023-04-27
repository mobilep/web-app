import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { UserLabel, RemoveItemButton } from '../../atoms';
import { UserSearchSelect } from '../../molecules';

import './styles.css';

export default class AppendableUserList extends Component {

	state = {
		searchValue: '',
	}

	static propTypes = {
		className: PropTypes.string,
		content: PropTypes.object,
		editable: PropTypes.bool,
		onSelectInput: PropTypes.func,
		onUserRemove: PropTypes.func,
		onUserSearch: PropTypes.func,
		onUserSelect: PropTypes.func,
		placeholder: PropTypes.string,
		searchUserItems: PropTypes.array,
		userItems: PropTypes.array,
		userSearchFetching: PropTypes.bool,
	}

	getClassName ({ className } = this.props) {
		return classNames('AppendableUserList', className);
	}

	handleSelectUser = (userObj) =>
		() => this.props.onUserSelect(userObj);

	handleUserRemoveClick = (userId) =>
		() => this.props.onUserRemove(userId);

	handleUserSearch = (searchValue) => {
		const { onUserSearch } = this.props;
		this.setState({ searchValue });
		onUserSearch(searchValue);
	}

	handleRemoveSearchValue = () => {
		this.setState({ searchValue: '' });
	}

	render () {
		const { editable,
			userItems,
			searchUserItems,
			onUserSelect,
			content,
			userSearchFetching,
			onSelectInput } = this.props;
		const { peopleSection } = content.scenarios;
		const className = this.getClassName();
		const searchItems = searchUserItems;
		const notFound = !!(this.state.searchValue && searchItems.length === 0 && !userSearchFetching);

		const listSorted = [...userItems].sort((prevItem, item) => {
			if (prevItem.lastName > item.lastName) {
				return 1;
			} else if (prevItem.lastName < item.lastName) {
				return -1;
			}
			return 0;
		});

		return (
			<div className={className}>
				{
					listSorted.map((item, index) => {
						const { id, fullName, initials, imgUrl } = item;
						const key = `item-${index}`;

						return (
							<div key={key} className='AppendableUserList-userItem'>
								<UserLabel
									className='AppendableUserList-userLabel'
									fullName={fullName.split(' ').reverse().join(' ')}
									initials={initials}
									imgUrl={imgUrl}
								/>
								{editable && <RemoveItemButton onClick={this.handleUserRemoveClick(id)} />}
							</div>
						);
					})
				}
				{editable && <UserSearchSelect
					onSelectInput={onSelectInput}
					content={content}
					notFoundMessage={peopleSection.notFound}
					notFound={notFound}
					className='AppendableUserList-UserSearchSelect'
					items={searchUserItems}
					onSelect={onUserSelect}
					onSearch={this.handleUserSearch}
					userSearchFetching={userSearchFetching}
					onRemoveValue={this.handleRemoveSearchValue}
					placeholder={peopleSection.addPerson}
				/>}
			</div>
		);
	}
}

