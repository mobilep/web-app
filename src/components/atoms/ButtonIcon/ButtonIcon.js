import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

export default class ButtonIcon extends Component {

	static propTypes = {
		className: PropTypes.string,
		icon: PropTypes.element,
		label: PropTypes.string,
	}

	getClassName (className) {
		return classNames('ButtonIcon', className);
	}

	render () {
		const { className, icon, label, ...rest } = this.props;
		return (
			<button className={this.getClassName(className)} {...rest}>
				{icon}
				{label && <span className='ButtonIcon-label'>{label}</span>}
			</button>
		);
	}

}
