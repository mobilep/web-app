import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TeamIcon } from '../../../icons';

import './styles.css';

export default class ScenarioUserCounter extends PureComponent {

	render () {
		const { className, count, text } = this.props;
		const userCounter = count ? count : '';
		return (
			<div className={`ScenarioUserCounter ${className}`}>
				<TeamIcon />
				<div className='ScenarioUserCounter-text'>{userCounter} {text}</div>
			</div>
		);
	}

}

ScenarioUserCounter.propTypes = {
	className: PropTypes.string,
	count: PropTypes.number,
	text: PropTypes.string,
};
