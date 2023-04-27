import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Avatar } from '..';
import constants from '../Avatar';
import { CheckIcon } from '../../../icons';

import './styles.css';

export default class TeamsCheckbox extends Component {

	static propTypes = {
		avatar: PropTypes.string,
		avatarBgColor: PropTypes.string,
		avatarInitials: PropTypes.string,
		checked: PropTypes.bool,
		className: PropTypes.string,
		editMode: PropTypes.bool,
		id: PropTypes.string,
		name: PropTypes.string,
		onInputChange: PropTypes.func,
	}

	getClassName = (className) => {
		return classnames({
			TeamsCheckbox: true,
		}, className);
	}

	render () {
		const {
			avatar,
			avatarBgColor,
			avatarInitials,
			checked,
			className,
			editMode,
			id,
			name,
			onInputChange,
		} = this.props;

		const { matches } = window.matchMedia('(max-width: 768px)');

		return (
			<label className={this.getClassName(className)}>
				{editMode
					? <Fragment>
						<input type='checkbox'
							name={id}
							onChange={onInputChange}
							defaultChecked={checked}
						/>
						<span className='TeamsCheckbox-checkmark'>
							<CheckIcon />
						</span>
					</Fragment>
					: null}
				<Avatar
					initials={avatarInitials}
					img={avatar}
					size={!matches ? constants.AVATAR_SIZES.AVATAR_60 : constants.AVATAR_SIZES.AVATAR_50}
					border={false}
					color={avatarBgColor}
				/>
				<span className='Teamscheckbox-name'>{name}</span>
			</label>
		);
	}
}
