import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { EmptyTeamIcon } from '../../../icons';

import './styles.css';

export default class TeamEmptyArea extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		text: PropTypes.string,
	}

	getClassName = (className) => {
		return classNames('TeamEmptyArea', className);
	}

	render () {
		return (
			<div className={this.getClassName(this.props.className)}>
				<EmptyTeamIcon className='TeamEmptyArea-icon' />
				<div className='TeamEmptyArea-text'>{this.props.text}</div>
			</div>
		);
	}

}
