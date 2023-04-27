import React, { Component } from 'react';
import PropTypes from 'prop-types';
import constants from '../../../constants';

import './styles.css';
import { formatSecondsWithMinutes } from '../../../utils/time';

const { recording } = constants.common;

export default class TimerDisplay extends Component {

	state = {
		passed: 0,
	}

	static propTypes = {
		max: PropTypes.number,
	}

	static defaultProps = {
		max: Math.round(recording.MAX_LENGTH / 1000),
	}

	setPassed = (ms) => {
		this.setState({
			passed: Math.round(ms / 1000),
		});
	}

	render () {
		const { max } = this.props;
		const { passed } = this.state;
		return (
			<div className='TimerDisplay'>
				{formatSecondsWithMinutes(passed)} / {formatSecondsWithMinutes(max)}
			</div>
		);
	}

}
