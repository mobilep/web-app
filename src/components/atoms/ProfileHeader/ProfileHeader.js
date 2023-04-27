import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProfileAvatar from '../ProfileAvatar';
import constants from '../../../constants';
import './styles.css';

const { adminUrl } = constants.common;

export default class ProfileHeader extends Component {

	static propTypes = {
		avatar: PropTypes.string,
		avatarColor: PropTypes.string,
		className: PropTypes.string,
		company: PropTypes.string,
		companyId: PropTypes.string,
		editText: PropTypes.string,
		initials: PropTypes.string,
		name: PropTypes.string,
		needAdminLink: PropTypes.bool,
		onAvatarChange: PropTypes.func,
		openAdminPanel: PropTypes.string,
		userAvatarStatus: PropTypes.string,
	}

	getClassName = (className) => classNames({ ProfileHeader: true }, className);

	render () {
		const {
			avatar,
			avatarColor,
			className,
			company,
			companyId,
			editText,
			initials,
			name,
			needAdminLink,
			onAvatarChange,
			openAdminPanel,
			userAvatarStatus,
		} = this.props;
		return (
			<div className={this.getClassName(className)}>
				<ProfileAvatar
					initials={initials}
					imgUrl={avatar}
					color={avatarColor}
					text={editText}
					onAvatarChange={onAvatarChange}
					userAvatarStatus={userAvatarStatus} />
				<div className='ProfileHeader-infoWrapper'>
					<div className='ProfileHeader-name'>{name}</div>
					<div className='ProfileHeader-company'>{company}</div>

					{/* Admin link */}
					{needAdminLink &&
						<a
							href={`${adminUrl}/#/company/${companyId}/scenarios`}
							target='_blank'
							rel='noopener noreferrer'
						>
							{openAdminPanel}
						</a>
					}
				</div>
			</div>
		);
	}

}
