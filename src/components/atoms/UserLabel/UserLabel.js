import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Avatar } from '..';

import './styles.css';

const getClassName = (className) => classNames('UserLabel', className);

const UserLabel = ({ fullName, initials, imgUrl, className }) => (
	<div className={getClassName(className)}>
		<Avatar
			className='UserLabel-avatar'
			initials={initials}
			img={imgUrl}
			size={Avatar.AVATAR_SIZES.AVATAR_22}
		/>

		{fullName}
	</div>
);

UserLabel.propTypes = {
	className: PropTypes.string,
	fullName: PropTypes.string,
	imgUrl: PropTypes.string,
	initials: PropTypes.string,
};

export default UserLabel;
