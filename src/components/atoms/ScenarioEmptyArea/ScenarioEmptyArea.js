import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EmptyScenarioIcon } from '../../../icons';

import './styles.css';

export default class ScenarioEmptyArea extends Component {

	static propTypes = {
		text: PropTypes.string,
	}

	render () {
		return (
			<div className='ScenarioEmptyArea'>
				<EmptyScenarioIcon className='ScenarioEmptyArea-icon' />
				<div className='ScenarioEmptyArea-text'>{this.props.text}</div>
			</div>
		);
	}

}
