import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Chip } from '../../atoms';
import constants from '../../atoms/Avatar/constants';
import { getInitials } from '../../../helpers';

import './styles.css';

export default class AvatarGroup extends Component {

	static propTypes = {
		avatars: PropTypes.array,
		expanded: PropTypes.bool,
	}

	getPersonInitials (firstName, lastName) {
		return firstName.charAt(0) + lastName.charAt(0);
	}

	/**
	 * Renders a list (group) of avatars.
	 * @param {Object[]} list A list of users
	 * @returns {Object[]} A list of Avatar components
	 */
	renderList = (list, nOfVisibleAvatars) => {
		if (!list) return;

		return list
			.slice(0, nOfVisibleAvatars)
			.map((item, index) => {
				const key = `av-${index}`;
				const personInitials = this.getPersonInitials(item.firstName, item.lastName);
				return (<Avatar
					className='AvatarGroup-item'
					key={key}
					initials={personInitials}
					img={item.avatar_sm}
					size={constants.AVATAR_SIZES.AVATAR_28}
					color={item.avatarColor}
				/>);
			});
	}

	renderExpandedList (list) {
		return list
			.map((user) => {
				const initials = getInitials(user.firstName, user.lastName);

				return (
					<Chip
						key={user._id}
						className='AvatarGroup-chip'
					>
						<Avatar
							initials={initials}
							size={constants.AVATAR_SIZES.AVATAR_22}
							color={user.avatarColor}
							img={user.avatar_sm}
						/>
						{`${user.name}`}
					</Chip>
				);
			});
	}

	calculateShowingAvatars () {
		const { avatars, expanded } = this.props;
		const { matches } = window.matchMedia('(max-width: 768px)');
		const maxShow = matches ? 4 : 10;
		const nOfHiddenAvatars = expanded ? 0 : avatars.length - maxShow;

		return nOfHiddenAvatars < 2
			? { nOfVisibleAvatars: avatars.length, nOfHiddenAvatars: 0 }
			: { nOfVisibleAvatars: maxShow, nOfHiddenAvatars };
	}

	render () {
		const { nOfHiddenAvatars, nOfVisibleAvatars } = this.calculateShowingAvatars();
		const { avatars, expanded } = this.props;

		return (
			<div className='AvatarGroup'>
				{expanded
					? this.renderExpandedList(avatars)
					:	this.renderList(avatars, nOfVisibleAvatars)
				}

				{!!nOfHiddenAvatars &&
					<div className='AvatarGroup-item Avatar Avatar-28 AvatarGroup-more'>
						+{nOfHiddenAvatars}
					</div>
				}
			</div>
		);
	}
}
