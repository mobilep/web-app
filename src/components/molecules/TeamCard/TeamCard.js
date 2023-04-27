import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AvatarGroup from '../AvatarGroup';
import { Counter } from '../../atoms';

import './styles.css';

export default class TeamCard extends Component {

	static propTypes = {
		active: PropTypes.bool,
		counter: PropTypes.number,
		header: PropTypes.string,
		people: PropTypes.array,
	}

	getClassname = (active) => {
		return classNames('TeamCard', 'listItem', {
			'listItem-active': active,
		});
	}

	checkCounter = (counter) => {
		if (counter >= 1000) {
			let counterStr = counter.toString().charAt(0);
			counterStr = ` ${counterStr}k+`;
			return counterStr;
		} else return counter;
	}

	render () {
		const {
			active,
			counter,
			header,
			people,
		} = this.props;

		return (
			<div className={this.getClassname(active)}>
				<div className='TeamCard-left-content'>
					<div className='TeamCard-header'>{header}</div>
					<AvatarGroup avatars={people} />
				</div>
				<div className='TeamCard-right-content'>
					<Counter className='TeamCard-counter'>{this.checkCounter(counter)}</Counter>
				</div>
			</div>);
	}

}
