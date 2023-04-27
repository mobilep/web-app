import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TeamsCheckbox } from '../../atoms';
import { getInitials } from '../../../helpers';

import './styles.css';

export default class TeamPeopleList extends Component {

	static propTypes = {
		creatorId: PropTypes.string,
		editMode: PropTypes.bool,
		list: PropTypes.array,
		onInputChange: PropTypes.func,
		teamList: PropTypes.array,
	}

	shouldBeChecked = (list, id) => {
		if (!list) return;
		const position = list.findIndex((el) => {
			return el === id || el._id === id;
		});
		return position !== -1;
	}

	renderList = (list, editMode) => {
		const { creatorId } = this.props;
		if (!list) return;

		const filteredArray = list.filter((item) => {
			return item._id !== creatorId;
		});

		return filteredArray.map((item, index) => {
			const key = `pl-${index}`;
			const initials = getInitials(item.firstName, item.lastName);
			return (
				<TeamsCheckbox
					className='TeamPeopleList-item'
					key={key}
					avatarInitials={initials}
					avatar={item.avatar_sm}
					avatarBgColor={item.avatarColor}
					name={item.name}
					editMode={editMode}
					id={item._id}
					onInputChange={this.props.onInputChange}
					checked={this.shouldBeChecked(this.props.teamList, item._id)}
				/>);
		});
	}

	render () {
		const { editMode, list } = this.props;
		return (
			<div className='TeamPeopleList'>
				{this.renderList(list, editMode)}
			</div>
		);
	}

}
