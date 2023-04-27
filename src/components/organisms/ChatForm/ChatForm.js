import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userListInfo, inboxInfo, teamInfo } from '../../../redux/reducers';

import './styles.css';
import { SearchBox, ChatParticipantCheckbox, Chip, Avatar, ViewLoader, TextInputWithIcon } from '../../atoms';
import { matchId, mergeUnique } from '../../../helpers/arrayHelpers';
import { AVATAR_SIZES } from '../../atoms/Avatar/constants';
import { getInitials, objectHelpers } from '../../../helpers';
import { LanguageContext } from '../../../utils';
import { groupIcon } from '../../../images';
import { inboxPanelViewMode } from '../../../constants/common';
import { GroupChatIcon } from '../../../icons';

export class ChatForm extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		companyUserList: PropTypes.array,
		createInbox: PropTypes.func,
		currentChatName: PropTypes.string,
		currentChatUsers: PropTypes.array,
		currentUserId: PropTypes.string,
		fetching: PropTypes.bool,
		getData: PropTypes.func,
		getGroupsData: PropTypes.func,
		groups: PropTypes.array,
		history: PropTypes.object,
		inboxList: PropTypes.array,
		onClose: PropTypes.func,
		onSelectionChange: PropTypes.func,
		onValidationChange: PropTypes.func,
		updateChatData: PropTypes.func,
		viewMode: PropTypes.oneOf([inboxPanelViewMode.NEW, inboxPanelViewMode.EDIT_ACTIVE_CHAT]),
	}

	static defaultProps = {
		companyUserList: [],
		groups: [],
		onSelectionChange: () => {},
	}

	state = {
		selectedUsersIds: [],
		users: [],
		groups: [],
		searchTerm: '',
		groupChatName: '',
		viewMode: null,
	}

	componentDidMount () {
		this.props.getData();
		this.props.getGroupsData();
	}

	shouldComponentUpdate (nextProps, nextState) {
		const isGroupChat = nextState.selectedUsersIds.length > 1	||
			nextState.viewMode === inboxPanelViewMode.EDIT_ACTIVE_CHAT;
		const isValid = isGroupChat
			?	nextState.selectedUsersIds.length && nextState.groupChatName
			:	nextState.selectedUsersIds.length;

		this.props.onValidationChange(isValid);
		return true;
	}

	static getDerivedStateFromProps (nextProps, prevState) {
		const { companyUserList, currentUserId, groups, currentChatUsers } = nextProps;
		let selectedUsersIds = prevState.selectedUsersIds;
		let groupChatName = prevState.groupChatName;
		const notCurrentUser = (user) => user._id !== currentUserId;
		const isEditMode = nextProps.viewMode === inboxPanelViewMode.EDIT_ACTIVE_CHAT;
		const isViewModeChanged = nextProps.viewMode !== prevState.viewMode;
		const switchedToNew = isViewModeChanged && nextProps.viewMode === inboxPanelViewMode.NEW;
		const switchedToEdit = isViewModeChanged && nextProps.viewMode === inboxPanelViewMode.EDIT_ACTIVE_CHAT;
		const usersLoaded = !prevState.users.length && nextProps.companyUserList.length;

		if (switchedToNew) {
			selectedUsersIds = [];
			groupChatName = '';
		}

		if (usersLoaded || switchedToEdit) {
			selectedUsersIds = isEditMode
				? currentChatUsers.filter(notCurrentUser).map(objectHelpers.pluck('_id'))
				: [];
		}

		if (switchedToEdit) {
			groupChatName = nextProps.currentChatName;
		}

		return {
			groups,
			selectedUsersIds,
			users: companyUserList.filter(notCurrentUser),
			groupChatName,
			viewMode: nextProps.viewMode,
		};
	}

	isEditMode (viewMode) {
		return viewMode === inboxPanelViewMode.EDIT_ACTIVE_CHAT;
	}

	handleParticipantCheckBoxChange = (changedId) => {
		const selectedUsersIds = this.state.selectedUsersIds;

		if (selectedUsersIds.includes(changedId)) {
			this.handleUserDelete(changedId);
		} else {
			this.setState({ selectedUsersIds: [...selectedUsersIds, changedId] });
		}
	}

	isIdSelected = (id) => {
		return this.state.selectedUsersIds.includes(id);
	}

	handleGroupCheckboxChange = (changedId) => {
		const { selectedUsersIds } = this.state;
		const group = this.state.groups.find(matchId(changedId));
		const userIds = group._users.map(objectHelpers.pluck('_id'));
		const isChecked = userIds.every(this.isIdSelected);

		if (isChecked) {
			this.setState({ selectedUsersIds: selectedUsersIds.filter((selectedId) => !userIds.includes(selectedId)) });
		} else {
			this.setState({ selectedUsersIds: mergeUnique(selectedUsersIds, userIds) });
		}
	}

	handleUserDelete = (idToDelete) => {
		const { selectedUsersIds } = this.state;

		this.setState({ selectedUsersIds: selectedUsersIds.filter((userId) => userId !== idToDelete) });
	}

	getPersonsList () {
		const { users, searchTerm = '', selectedUsersIds } = this.state;

		return users
			.filter(this.isItemMatchSearch(searchTerm))
			.map((user) => {
				const isChecked = selectedUsersIds.includes(user._id);

				return (
					<ChatParticipantCheckbox
						className='ChatForm-checkItem'
						key={user._id}
						checked={isChecked}
						participant={user}
						onChange={this.handleParticipantCheckBoxChange}
					/>
				);
			});
	}

	getGroupsList () {
		const { groups, searchTerm, selectedUsersIds } = this.state;

		return groups
			.filter(this.isItemMatchSearch(searchTerm))
			.map((group) => {
				const userIds = group._users.map(objectHelpers.pluck('_id'));
				const isChecked = userIds.every((id) => selectedUsersIds.includes(id));

				return (
					<ChatParticipantCheckbox
						className='ChatForm-checkItem'
						key={group._id}
						participant={{ ...group, avatar_sm: groupIcon }}
						checked={isChecked}
						onChange={this.handleGroupCheckboxChange}
					/>
				);
			});
	}

	isItemMatchSearch = (term) => (item) => {
		return item.name.toLowerCase().includes(term);
	}

	handleSaveInboxUsers () {
		const { selectedUsersIds } = this.state;
		const { viewMode, updateChatData, onClose } = this.props;
		if (!selectedUsersIds.length) return;

		if (this.isEditMode(viewMode)) {
			updateChatData({ users: selectedUsersIds, title: this.state.groupChatName });
		} else {
			this.createInbox();
		}

		onClose();
	}

	createInbox () {
		const { selectedUsersIds } = this.state;
		const { createInbox, inboxList } = this.props;
		const isPrivateInbox = selectedUsersIds.length === 1;
		const existingPrivateInbox = inboxList.find(this.matchPrivateInboxRecipient(selectedUsersIds[0]));

		if (isPrivateInbox && existingPrivateInbox) {
			this.openExistingPrivateInbox(existingPrivateInbox._id);
		} else {
			createInbox({ recipients: selectedUsersIds, title: this.state.groupChatName });
		}
	}

	matchPrivateInboxRecipient (userId) {
		return ({ _recipient = {} }) => _recipient._id === userId;
	}

	openExistingPrivateInbox (inboxId) {
		this.props.history.push(`/inbox/chat/${inboxId}`);
	}

	getSelectedUsersChips () {
		const selectedUsersIds = this.state.selectedUsersIds;
		const { users } = this.state;

		return selectedUsersIds.map((userId) => {
			const user = users.find(matchId(userId));
			if (!user) return null;
			const initials = getInitials(user.firstName, user.lastName);

			return (<Chip
				key={userId}
				onDelete={() => this.handleUserDelete(userId)}
			>
				<Avatar
					initials={initials}
					size={AVATAR_SIZES.AVATAR_22}
					color={user.avatarColor}
					img={user.avatar_sm}
				/>
				{`${user.name}`}
			</Chip>);
		});
	}

	handleSearchBoxChange = (term) => {
		this.setState({ searchTerm: term.trim().toLowerCase() });
	}

	handleChatNameChange = (groupChatName) => {
		this.setState({ groupChatName });
	}

	showGroupChatNameInput () {
		if (this.isEditMode(this.props.viewMode)) return true;

		return this.state.selectedUsersIds.length > 1;
	}

	render () {
		const personsList = this.getPersonsList();
		const groupsList = this.getGroupsList();
		const selectedUsers = this.getSelectedUsersChips();
		const { inbox } = this.context;
		const noData = personsList.length === 0 && groupsList.length === 0;
		const isEmpty = noData && !this.state.searchTerm;
		const noSearchResults = noData && this.state.searchTerm;
		const isGroupChatNameAvailable = this.showGroupChatNameInput();
		const textInputProps = {
			name: 'groupChatName',
			placeholder: this.context.groupChat.groupChatName,
			maxLength: 28,
		};

		if (this.props.fetching) {
			return <ViewLoader />;
		}

		return (
			<div className='ChatForm'>
				{isGroupChatNameAvailable &&
					<div className='ChatForm-groupName'>
						<TextInputWithIcon
							onChange={this.handleChatNameChange}
							value={this.state.groupChatName}
							icon={<GroupChatIcon /> }
							textInputProps={textInputProps}
						/>
					</div>
				}

				<div className='ChatForm-searchBox'>
					<SearchBox
						name='user-search'
						placeholder={inbox.searchLabel}
						onChange={this.handleSearchBoxChange}
					/>
				</div>

				<div className='ChatForm-listWrapper'>
					<div className='ChatForm-selectedUsers'>
						{selectedUsers}
					</div>

					{/* Groups List */}
					{!!groupsList.length &&
						<div className='ChatForm-allUsers'>
							<div className='ChatForm-sectionTitle'>{inbox.groups}</div>
							{groupsList}
						</div>
					}

					{/* Persons List */}
					{!!personsList.length &&
						<div className='ChatForm-allUsers'>
							<div className='ChatForm-sectionTitle'>{inbox.everyOne}</div>
							{personsList}
						</div>
					}

					{noSearchResults &&
						<div className='Inbox-empty-state'>{inbox.noResults}</div>
					}
					{isEmpty &&
						<div className='Inbox-empty-state'>{inbox.emptyChatUsers}</div>
					}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({
	userListInfo: { companyUserList, fetching },
	userInfo,
	teamInfo,
	inboxInfo: { activeInbox, inboxList },
}, props) => ({
	fetching,
	currentUserId: userInfo._id,
	companyUserList,
	inboxList,
	groups: teamInfo.teamList,
	currentChatUsers: activeInbox.users,
	currentChatName: activeInbox.title,
	...props,
});

const mapDispatchToProps = (dispatch) => ({
	getData: () => dispatch(userListInfo.getCompanyUserList()),
	getGroupsData: () => dispatch(teamInfo.getTeamList()),
	createInbox: (data) => dispatch(inboxInfo.createInbox(data)),
	updateChatData: (data) => dispatch(inboxInfo.updateChatData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(ChatForm);
