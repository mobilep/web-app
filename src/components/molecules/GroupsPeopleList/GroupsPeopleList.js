import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GroupPeopleItem } from '..';

import './styles.css';

export default class GroupsPeopleList extends Component {

	static propTypes = {
		className: PropTypes.string,
		emptyGroupsText: PropTypes.string,
		groupList: PropTypes.array,
		onSelectGroup: PropTypes.func,
	}

	static defaultProps = {}

	generateList ({ groupList, onSelectGroup } = this.props) {
		return groupList.map((group) => {
			return (
				<GroupPeopleItem
					key={group._id}
					name={group._id}
					counter={group._users.length}
					people={group._users}
					header={group.name}
					selected={group.selected}
					onSelectGroup={() => onSelectGroup(group.selected, group._users)}
				/>
			);
		});
	}

	getClassName ({ className } = this.props) {
		return classNames('GroupsPeopleList', className);
	}

	render () {
		const className = this.getClassName();
		const { groupList, emptyGroupsText } = this.props;
		return (
			<div className={className}>
				{!groupList || groupList.length === 0
					? <div className='GroupPeopleList-empty'>{emptyGroupsText}</div>
					: this.generateList()}
			</div>
		);
	}
}
