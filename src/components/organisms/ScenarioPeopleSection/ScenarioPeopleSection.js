import React, { Component } from 'react';
import { Tabs } from '../../atoms';
import { GroupsPeopleList, UserCardList } from '../../molecules';
import { AppendableUserList } from '../../organisms';
import { withLanguageContext } from '../../../utils/LanguageContext';
import { CARD_TYPES } from '../../molecules/UserCard/constants';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './styles.css';

class ScenarioPeopleSection extends Component {
	static propTypes = {
		content: PropTypes.object,
		editable: PropTypes.bool,
		getTeamData: PropTypes.func,
		groupList: PropTypes.array,
		history: PropTypes.object,
		inboxData: PropTypes.array,
		onGroupSelect: PropTypes.func,
		onUserRemove: PropTypes.func,
		onUserSearch: PropTypes.func,
		onUserSelect: PropTypes.func,
		searchUserItems: PropTypes.array,
		userItems: PropTypes.array,
		userSearchFetching: PropTypes.bool,
	}

	static defaultProps = {}

	tabRef = React.createRef();

	getGroupList (groups, selectedUsers) {
		const groupList = groups.map((group) => {
			const groupUsersLength = group._users.length;
			const filteredGroupUsers = group._users
				.filter(({ _id }) => selectedUsers.find(({ id }) => _id === id));
			const selected = groupUsersLength === filteredGroupUsers.length;
			return {
				...group,
				selected,
			};
		});
		return groupList;
	}

	getAppendableUserLisProps () {
		const {
			editable,
			content,
			userItems,
			searchUserItems,
			onUserSelect,
			onUserRemove,
			onUserSearch,
			userSearchFetching,
		} = this.props;
		return {
			editable,
			content,
			placeholder: content.addPerson,
			userSearchFetching,
			userItems,
			searchUserItems,
			onUserSelect,
			onUserRemove,
			onUserSearch,
		};
	}

	handleSelectCard = (id) => {
		this.props.history.push(`/scenarios/practice-chat/${id}`);
	}

	handleScrollTabToTop = () => {
		this.tabRef.current.scrollIntoView();
	}

	getUserList () {
		const {	inboxData	} = this.props;

		if (inboxData && inboxData.length > 0) {
			return (<UserCardList
				className={'ScenarioPeopleSectiono-UserCardList'}
				listData={inboxData}
				type={CARD_TYPES.CONVERSATION_CARD}
				onSelectCard={this.handleSelectCard}
			/>);
		}
		return (<AppendableUserList
			className='ScenarioPeopleSection-userChips'
			key={'tab-2'}
			{...this.getAppendableUserLisProps()}
		/>);
	}

	render () {
		const { groupList = [], content, editable, userItems, onGroupSelect } = this.props;
		const { peopleSection, emptyGroups } = content.scenarios;

		return (
			<div className='ScenarioPeopleSection'
				ref={this.tabRef}>
				{editable
					? <Tabs
						tabNames={[
							peopleSection.groups,
							peopleSection.people,
						]}
						tabs={[
							<GroupsPeopleList
								className='ScenarioPeopleSection-tabContent'
								groupList={this.getGroupList(groupList, userItems)}
								key='tab-1'
								onSelectGroup={onGroupSelect}
								emptyGroupsText={emptyGroups}
							/>,
							<AppendableUserList
								onSelectInput={this.handleScrollTabToTop}
								className='ScenarioPeopleSection-tabContent'
								key='tab-2'
								{...this.getAppendableUserLisProps()} />,
						]}
					/>
					: this.getUserList()
				}
			</div>
		);
	}
}

export default withLanguageContext(withRouter(ScenarioPeopleSection));
