import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { Avatar } from '../../atoms';

const MemberProfile = ({ member }) => {
	const { matches } = window.matchMedia('(max-width: 768px)');

	return (
		<div className='ProfileHeader MemberProfile'>
			<Avatar
				className='ProfileAvatar'
				img={member.avatar_sm}
				color={member.avatarColor}
				initials={member.initials}
				size={!matches ? Avatar.AVATAR_SIZES.AVATAR_100 : Avatar.AVATAR_SIZES.AVATAR_70}
			/>
			<div className='ProfileHeader-infoWrapper'>
				<div className='ProfileHeader-name'>{member.name}</div>
				<div className='ProfileHeader-company'>{member.company}</div>
			</div>
		</div>
	);
};

MemberProfile.propTypes = {
	member: PropTypes.object,
};

export default MemberProfile;
