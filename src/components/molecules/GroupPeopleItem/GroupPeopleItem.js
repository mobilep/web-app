import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AvatarGroup, CheckboxField } from '..';
import { Counter } from '../../atoms';

import './styles.css';

export default class GroupPeopleItem extends Component {

	static propTypes = {
		_id: PropTypes.string,
		counter: PropTypes.number,
		header: PropTypes.string,
		onSelectGroup: PropTypes.func,
		people: PropTypes.array,
		selected: PropTypes.bool,
	}

	static defaultProps = {}

	render () {
		const { _id, header, people, counter, selected, onSelectGroup } = this.props;
		return (
			<div className='GroupPeopleItem'>
				<CheckboxField
					name={_id}
					checked={selected}
					onInputChange={onSelectGroup}
				>
					<div className='GroupPeopleItem-left-content'>
						<div className='GroupPeopleItem-header'>{header}</div>
						<AvatarGroup avatars={people} />
					</div>
					<div className='GroupPeopleItem-right-content'>
						<Counter className='GroupPeopleItem-counter'>{counter}</Counter>
					</div>
				</CheckboxField>
			</div>
		);
	}

}
