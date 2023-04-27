import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

export default class ErrorBox extends Component {

	getClassName ({ icon, className }) {
		return classNames({
			ErrorBox: true,
			'ErrorBox-withIcon': icon,
		}, className);
	}

	render () {
		const className = this.getClassName(this.props);
		const { icon = '', message } = this.props;
		return (
			<div className={className}>
				{icon}<span className='ErrorBox-message'>{message}</span>
			</div>
		);
	}
}

ErrorBox.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
	className: PropTypes.string,
	icon: PropTypes.element,
	message: PropTypes.string,
};
