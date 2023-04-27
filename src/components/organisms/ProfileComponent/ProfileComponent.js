import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProfileHeader } from '../../atoms';
import { DialogWithButtonGroup, MobileHeader } from '../../molecules';
import { getInitials } from '../../../helpers';
import { LanguageContext } from '../../../utils';

import './styles.css';

export default class ProfileComponent extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		_company: PropTypes.string,
		avatarColor: PropTypes.string,
		avatar_md: PropTypes.string,
		companyName: PropTypes.string,
		firstName: PropTypes.string,
		history: PropTypes.object,
		isCompanyAdmin: PropTypes.bool,
		isManager: PropTypes.bool,
		isSysAdmin: PropTypes.bool,
		lastName: PropTypes.string,
		name: PropTypes.string,
		onAvatarChange: PropTypes.func,
		onLoadUserInfo: PropTypes.func,
		onSignOut: PropTypes.func,
		userAvatarStatus: PropTypes.string,
	}

	logoutConfirmationRef = React.createRef();

	getConfirmationDialog = () => this.logoutConfirmationRef.current;

	handleDialogCancelButtonClick = () => this.getConfirmationDialog().close();
	handleDialogConfirmButtonClick = () => this.props.onSignOut();
	handleLogOutButtonClick = () => this.getConfirmationDialog().showModal();

	componentDidMount () {
		this.props.onLoadUserInfo();
	}

	handleAvatarChange = (fileId) => {
		this.props.onAvatarChange(fileId);
	}

	getMobileHeaderProps () {
		const { profile: profileL10n } = this.context;
		const { history } = this.props;

		return {
			title: profileL10n.profile,
			crossIconType: false,
			buttonsProps: [
				{
					label: profileL10n.settings,
					onClick: () => history.push('/settings'),
				},
				{
					label: profileL10n.signout,
					onClick: this.handleLogOutButtonClick,
				},
			],
		};
	}

	render () {
		const {
			_company,
			avatar_md,
			avatarColor,
			companyName,
			firstName,
			isCompanyAdmin,
			isManager,
			isSysAdmin,
			lastName,
			name,
			userAvatarStatus,
		} = this.props;

		const { matches } = window.matchMedia('(max-width: 768px)');
		const { common, profile } = this.context;

		const needAdminLink = Boolean((isCompanyAdmin || isManager || isSysAdmin) && !matches);

		return (
			<div className='ProfileComponent'>
				{matches &&
					<MobileHeader
						hasNoButton
						className='ProfileComponent-mobile-header'
						menuClassName='ProfileComponent-menu'
						{...this.getMobileHeaderProps()}
					/>}
				<div className='ProfileComponent-wrapper'>
					<ProfileHeader
						openAdminPanel={common.openAdminPanel}
						needAdminLink={needAdminLink}
						companyId={_company}
						name={name}
						company={companyName}
						initials={getInitials(firstName, lastName)}
						avatarColor={avatarColor}
						userAvatarStatus={userAvatarStatus}
						avatar={avatar_md}
						editText={profile.editText}
						onAvatarChange={this.handleAvatarChange}
						className='ProfileComponent-header'
					/>
				</div>
				<DialogWithButtonGroup
					actionButtonLabel={common.logOutButton}
					cancelButtonLabel={common.cancel}
					onActionButtonClick={this.handleDialogConfirmButtonClick}
					onCancelButtonClick={this.handleDialogCancelButtonClick}
					ref={this.logoutConfirmationRef}
				>
					{common.logOutMessage}
				</DialogWithButtonGroup>
			</div>
		);
	}

}
