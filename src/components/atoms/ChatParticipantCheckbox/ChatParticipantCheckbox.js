import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AVATAR_SIZES } from '../Avatar/constants';

import './styles.css';
import { CheckboxField } from '../../molecules';
import Avatar from '../Avatar';
import { getInitials } from '../../../helpers';

export default class ChatParticipantCheckbox extends Component {

	static propTypes = {
		checked: PropTypes.bool,
		className: PropTypes.string,
		onChange: PropTypes.func,
		participant: PropTypes.object,
	}

	getClassName () {
		return classNames('ChatParticipantCheckbox', this.props.className);
	}

	handleCheckboxChange = () => {
		const { participant, onChange } = this.props;
		onChange(participant._id);
	}

	render () {
		const { participant, checked } = this.props;
		const initials = getInitials(participant.firstName, participant.lastName);

		return (
			<CheckboxField
				onInputChange={this.handleCheckboxChange}
				contentPosition='start'
				checked={checked}
				className={this.getClassName()}
			>
				<Avatar
					className='ChatParticipantCheckbox-avatar'
					initials={initials}
					size={AVATAR_SIZES.AVATAR_44}
					color={participant.avatarColor}
					img={participant.avatar_sm}
				/>
				<div className='ChatParticipantCheckbox-name text-truncate'>{`${participant.name}`}</div>
			</CheckboxField>
		);
	}
}
