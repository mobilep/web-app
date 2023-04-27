import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { DialogWithButtonGroup, PrimaryNavigationItem, IconWithCounter } from '../..';
import {
	LogoIcon,
	LogOutIcon,
	ScenariousIcon,
	TeamIcon,
	ProfileIcon,
	SettingsIcon,
	InboxIcon,
} from '../../../icons';
import constants from '../../../constants';

import './styles.css';

const {
	INBOX,
	SCENARIOS,
	TEAM,
	PROFILE,
	SETTINGS,
	LEARNER_REPORT,
} = constants.routes;

export default class PrimaryNavigation extends Component {

	dialogRef = React.createRef();

	getCurrentDialogRef = () => this.dialogRef.current;
	getClassName = (props) => classNames('PrimaryNavigation', props.className)

	handleDialogCancelButtonClick = () => this.getCurrentDialogRef().close();
	handleDialogConfirmButtonClick = () => this.props.onSignOut();
	handleLogOutButtonClick = () => this.getCurrentDialogRef().showModal();

	render () {
		const { common, primaryNav } = this.props.content;

		return (
			<div className={this.getClassName(this.props)}>

				<div className='PrimaryNavigation-logo'>
					<LogoIcon />
				</div>

				<nav className='PrimaryNavigation-nav'>
					<PrimaryNavigationItem to={SCENARIOS}>
						<IconWithCounter icon={<ScenariousIcon />} counter={this.props.unreadScenariosCount} />
						<span>{primaryNav.scenarious}</span>
					</PrimaryNavigationItem>

					<PrimaryNavigationItem to={INBOX}>
						<IconWithCounter icon={<InboxIcon />} counter={this.props.unreadInboxCount} />
						<span>{primaryNav.inbox}</span>
					</PrimaryNavigationItem>

					<PrimaryNavigationItem to={TEAM}>
						<TeamIcon />
						<span>{primaryNav.team}</span>
					</PrimaryNavigationItem>

					<PrimaryNavigationItem
						to={LEARNER_REPORT}
						isActive={(match, location) => location.pathname.startsWith(PROFILE)}
					>
						<ProfileIcon />
						<span>{primaryNav.profile}</span>
					</PrimaryNavigationItem>

					<PrimaryNavigationItem to={SETTINGS}>
						<SettingsIcon />
						<span>{primaryNav.settings}</span>
					</PrimaryNavigationItem>
				</nav>

				<div className='PrimaryNavigation-logOut'>
					<PrimaryNavigationItem onClick={this.handleLogOutButtonClick}>
						<LogOutIcon />
						<span>{primaryNav.logOut}</span>
					</PrimaryNavigationItem>
				</div>

				<DialogWithButtonGroup
					actionButtonLabel={common.logOutButton}
					cancelButtonLabel={common.cancel}
					onActionButtonClick={this.handleDialogConfirmButtonClick}
					onCancelButtonClick={this.handleDialogCancelButtonClick}
					ref={this.dialogRef}
				>
					{common.logOutMessage}
				</DialogWithButtonGroup>

			</div>
		);
	}
}

PrimaryNavigation.propTypes = {
	className: PropTypes.string,
	content: PropTypes.object,
	onSignOut: PropTypes.func.isRequired,
	unreadInboxCount: PropTypes.number,
	unreadScenariosCount: PropTypes.number,
};
