import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';
import { ArrowForwardIcon, StarIconGold } from '../../../icons';
import { Avatar, ReportValue } from '../../atoms';
import { AVATAR_SIZES } from '../Avatar/constants';

export default function ReportMemberItem ({ user, rank }) {
	return (
		<div className='ReportMemberItem'>
			<div className='ReportMemberItem-ranking'>{rank}</div>
			<Avatar
				className='ReportMemberItem-avatar'
				initials={user.initials}
				size={AVATAR_SIZES.AVATAR_28}
				color={user.avatarColor}
				img={user.avatar_sm}
			/>
			<div className='ReportMemberItem-name'>{user.name}</div>

			<ReportValue
				className={
					classNames('ReportMemberItem-score', { 'ReportMemberItem-scoreWithStar': user.withStar })
				}
				value={user.value}
				maxValue={user.maxValue}
				size='xs'
				icon={user.withStar && <StarIconGold />}
			/>
			<div className='ReportMemberItem-linkIndicator'>
				<ArrowForwardIcon />
			</div>
		</div>
	);
}

ReportMemberItem.propTypes = {
	rank: PropTypes.number,
	user: PropTypes.object,
};

ReportMemberItem.defaultProps = {};
