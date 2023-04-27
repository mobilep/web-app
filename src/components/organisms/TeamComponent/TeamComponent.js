import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LanguageContext } from '../../../utils';
import { TeamsHeader, TeamPeopleList, DialogWithButtonGroup, ErrorSubmit, MobileHeader } from '../../molecules';
import { Dialog } from '../../atoms';
import { sortByField } from '../../../helpers/arrayHelpers';

import './styles.css';

export default class TeamComponent extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		companyUserList: PropTypes.array,
		createMode: PropTypes.bool,
		createTeam: PropTypes.func,
		createTeamError: PropTypes.bool,
		createTeamSuccess: PropTypes.bool,
		currentUserId: PropTypes.string,
		deleteTeam: PropTypes.func,
		editMode: PropTypes.bool,
		getData: PropTypes.func,
		history: PropTypes.object,
		location: PropTypes.object,
		match: PropTypes.object,
		onCancelClick: PropTypes.func,
		onPrimaryClick: PropTypes.func,
		teamData: PropTypes.object,
		teamId: PropTypes.string,
		updateTeam: PropTypes.func,
		updateTeamError: PropTypes.bool,
		updateTeamSuccess: PropTypes.bool,
	}

	static defaultProps = {
		getData: () => {},
	}

	deleteConfirmationDialogRef = React.createRef();
	errorDialogRef = React.createRef();

	state = {
		name: '',
		_users: [],
		removing: false,
		isValid: true,
		save: false,
		createTeamSuccess: true,
		createTeamError: false,
		updateTeamError: false,
		updateTeamSuccess: false,
	}

	componentDidMount () {
		const { createMode, getData, teamId } = this.props;
		if (!createMode) {
			getData(teamId);
		}
	}

	getSnapshotBeforeUpdate (prevProps, prevState) {
		const userCountChanging = this.state._users.length !== prevState._users.length;
		if (userCountChanging) {
			return this.state;
		}
		return null;
	}

	componentDidUpdate (prevProps, prevState, snapshot) {
		const {
			createTeamError,
			createMode,
			history,
			updateTeamError,
			editMode,
			updateTeamSuccess,
			match,
		} = this.props;

		const teamDataUsers = this.props.teamData && this.props.teamData._users;

		if (editMode && this.state._users.length === 0 && teamDataUsers && !this.state.removing) {
			const users = this.props.teamData._users.map((item) => item._id);
			// eslint-disable-next-line react/no-did-update-set-state
			this.setState({ _users: users, name: this.props.teamData.name });
		}

		if (snapshot !== null) {
			// eslint-disable-next-line react/no-did-update-set-state
			this.setState({ ...snapshot });
		}
		if (createTeamError && createMode && this.state.createTeamError) {
			this.showErrorModal();
		}
		if (updateTeamError && editMode && this.state.updateTeamError) {
			this.showErrorModal();
		}
		if (editMode && updateTeamSuccess && this.state.updateTeamSuccess && !snapshot) {
			// eslint-disable-next-line react/no-did-update-set-state
			this.setState({ updateTeamSuccess: false }, () => {
				history.push(`/groups/${match.params.teamId}`);
			});
		}
	}

	handleEditClick = () => {
		const { match, history } = this.props;
		const url = `/groups/${match.params.teamId}/edit`;
		history.push(url);
	}

	handleCancelClick = () => {
		const { match, history } = this.props;
		let url = match.params.teamId === 'new' ? '/groups' : `/groups/${match.params.teamId}`;
		const { matches } = window.matchMedia('(max-width: 768px)');
		if (matches) {
			url = '/groups';
		}
		history.push(url);
	}

	showErrorModal () {
		if (!this.errorDialogRef.current.open) {
			this.errorDialogRef.current.showModal();
		}
	}

	closeErrorModal = () => {
		this.errorDialogRef.current.close();
	}

	handleSaveClick = (event) => {
		const { createMode, createTeam, editMode, updateTeam, match, history } = this.props;
		const { _users, isValid, name } = this.state;
		this.resetErrors();

		if ((!name || name === '')) {
			this.setState({ nameError: true });
			this.showErrorModal();
		}
		if (_users.length === 0) {
			this.setState({ userError: true });
			this.showErrorModal();
		}
		if (createMode && isValid && _users.length !== 0 && name !== '' && !this.state.createTeamError) {
			this.setState({ createTeamSuccess: true, createTeamError: true });
			createTeam(this.state);
			history.push('/groups');
		}
		if (editMode && _users.length !== 0 && !this.state.updateTeamError) {
			const data = { ...this.state };
			if (name && name !== '') {
				this.setState({ updateTeamError: true, updateTeamSuccess: true });
				updateTeam(match.params.teamId, data);
			}
		}
		event.preventDefault();
	}

	resetErrors () {
		this.setState({ createTeamError: false, updateTeamError: false, nameError: false, userError: false });
	}

	handleDeleteClick = () => {
		this.deleteConfirmationDialogRef.current.showModal();
	}

	handleDeleteTeam = () => {
		const { deleteTeam, match, history } = this.props;
		deleteTeam(match.params.teamId);
		this.deleteConfirmationDialogRef.current.close();
		history.push('/groups');
	}

	handleUsersChange = (event) => {
		const { _users } = this.state;
		const target = event.target;

		if (this.state.createTeamSuccess === true) {
			this.setState({ createTeamSuccess: false });
		}
		if (this.state.createTeamError === true) {
			this.setState({ createTeamError: false });
		}
		if (this.state.updateTeamSuccess === true) {
			this.setState({ updateTeamSuccess: false });
		}
		if (this.state.updateTeamError === true) {
			this.setState({ updateTeamError: false });
		}
		const foundCheckedIndex = _users.findIndex((item) => item === target.name);
		if (foundCheckedIndex !== -1) {
			const users = _users;
			users.splice(foundCheckedIndex, 1);
			this.setState({
				_users: users,
				removing: true,
			});
		} else {
			this.setState((prevState) => ({
				_users: [...prevState._users, target.name],
				removing: false,
			}));
		}
	}

	handleNameChange = (value) => {
		if (this.state.createTeamError === true) {
			this.setState({ createTeamError: false });
		}
		if (this.state.updateTeamError === true) {
			this.setState({ updateTeamError: false });
		}
		this.setState({ name: value, isValid: !!value });
		if (value === '') {
			this.setState({ createTeamError: false, isValid: false });
		}
	}

	renderErrorDialog = () => {
		const { teams } = this.context;

		let title = teams.wrongName;
		let message = teams.teamExists;
		if (this.state._users.length === 0) {
			title = teams.noUsers;
			message = teams.noUsersMessage;
		} else if (!this.state.isValid || !this.state.name || this.state.name === '') {
			title = teams.invalidName;
			message = teams.invalidNameMessage;
		}

		return (
			<Dialog
				className='TeamComponent-error-dialog'
				ref={this.errorDialogRef}
				onClose={this.closeErrorModal}
			>
				<ErrorSubmit
					onButtonClick={this.closeErrorModal}
					title={title}
					message={message}
					buttonLabel={teams.tryAgain}
					className='TeamComponent-error-submit'
				/>
			</Dialog>
		);
	}

	renderDeleteConfirmationDialog = () => {
		const { teams } = this.context;

		return (
			<DialogWithButtonGroup
				ref={this.deleteConfirmationDialogRef}
				className='TeamComponent-dialog'
				actionButtonLabel={teams.buttonDelete}
				cancelButtonLabel={teams.buttonCancel}
				onActionButtonClick={this.handleDeleteTeam}
				onCancelButtonClick={() => this.deleteConfirmationDialogRef.current.close()}
			>
				{teams.deleteTeamConfirmation}
			</DialogWithButtonGroup>
		);
	}

	getMobileHeaderButtons () {
		const { editMode, createMode } = this.props;
		const { common } = this.context;

		if (editMode) {
			return	[{ label: common.save, onClick: this.handleSaveClick }];
		}
		if (createMode) {
			return [{ label: common.create, onClick: this.handleSaveClick }];
		}

		return [
			{ label: common.edit, onClick: this.handleEditClick },
			{ label: common.delete, onClick: this.handleDeleteClick },
		];
	}

	getMobileHeaderTitle () {
		const { editMode, createMode } = this.props;
		const { teams } = this.context;

		if (editMode) return teams.editTeam;
		if (createMode) return teams.newTeam;
		return teams.group;
	}

	getMobileHeader () {
		const title = this.getMobileHeaderTitle();
		const mobileHeaderButtons = this.getMobileHeaderButtons();

		return (
			<Fragment>
				<MobileHeader
					className='TeamComponent-mobile-header'
					title={title}
					// eslint-disable-next-line react/jsx-handler-names
					closeButtonHandler={this.handleCancelClick}
					buttonsProps={mobileHeaderButtons}
				/>
			</Fragment>
		);
	}

	renderHeader = ({
		сancelText,
		primaryText,
		header,
		onPrimaryClick,
		onCancelClick,
		onDeleteClick,
		editMode,
		createMode,
	}) => {
		const { matches } = window.matchMedia('(max-width: 768px)');
		const { name } = this.state;
		const viewMode = !createMode && !editMode;

		return (<Fragment>
			{matches && this.getMobileHeader()}
			<TeamsHeader
				buttonCancelText={сancelText}
				buttonPrimaryText={primaryText}
				header={viewMode ? header : name}
				editMode={editMode}
				createMode={createMode}
				onPrimaryClick={onPrimaryClick}
				onCancelClick={onCancelClick}
				onInputChange={this.handleNameChange}
				onDeleteClick={onDeleteClick}
			/>
		</Fragment>);
	}

	getPeopleListProps () {
		const { createMode, editMode, companyUserList, currentUserId, teamData } = this.props;

		if (createMode) {
			return {
				editMode: createMode,
				list: companyUserList,
				onInputChange: this.handleUsersChange,
				teamList: this.state._users,
				creatorId: currentUserId,
			};
		}

		const teamUsers = teamData._users.sort(this.sortUsers);
		return {
			editMode,
			list: editMode ? companyUserList : teamUsers,
			onInputChange: this.handleUsersChange,
			teamList: editMode && this.state._users.length > 0 ? this.state._users : teamData._users,
			creatorId: currentUserId,
		};
	}

	sortUsers = (prevUser, user) => {
		return sortByField((v) => v.toLowerCase().charCodeAt(0), 'firstName')(prevUser, user);
	}

	renderContent = (props) => {
		const {	createMode,	teamData } = props;

		if (!createMode && !teamData) return;

		const headerProps = this.getHeaderProps();
		const teamListProps = this.getPeopleListProps();

		return (
			<Fragment>
				{this.renderErrorDialog()}
				{this.renderDeleteConfirmationDialog()}
				{this.renderHeader(headerProps)}
				{<TeamPeopleList	{ ...teamListProps } />}
			</Fragment>
		);
	}

	getHeaderProps () {
		const { createMode, editMode, teamData } = this.props;
		const { teams } = this.context;
		const { matches } = window.matchMedia('(max-width: 768px)');

		if (createMode) {
			return {
				сancelText: teams.buttonCancel,
				primaryText: teams.buttonSave,
				onPrimaryClick: this.handleSaveClick,
				onCancelClick: this.handleCancelClick,
				onInputChange: this.handleNameChange,
				placeholder: teams.placeholder,
				header: this.state.name,
				createMode,
			};
		}

		return {
			сancelText: editMode ? teams.buttonCancel : teams.buttonDelete,
			primaryText: editMode ? teams.buttonSave : teams.buttonEdit,
			header: this.state.name || teamData.name,
			onPrimaryClick: editMode ? this.handleSaveClick : this.handleEditClick,
			onCancelClick: editMode || matches ? this.handleCancelClick : this.handleDeleteClick,
			onDeleteClick: this.handleDeleteClick,
			placeholder: teams.placeholder,
			groupText: teams.group,
			editMode,
			teamData,
		};
	}

	getWrapperClassName = ({ pathname }) => {
		return classNames({
			'TeamComponent-content': true,
			'TeamComponent-hidden': pathname === '/groups',
		});
	}

	render () {
		const {
			createMode,
			editMode,
			location,
		} = this.props;

		return (
			createMode || editMode
				?			<Route
					path='(/|/groups)/:teamId?/:mode?'
					render={() => (
						<form
							className={this.getWrapperClassName(location)}
							onSubmit={this.handleSaveClick}>
							{this.renderContent(this.props)}
						</form>)} />
				:				<Route
					path='(/|/groups)/:teamId?/:mode?'
					render={() => (
						<div
							className={this.getWrapperClassName(location)}>
							{this.renderContent(this.props)}
						</div>)} />
		);
	}

}
