import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import classNames from 'classnames';

const getClassName = (className) => classNames('LineOnSides', className);

export default class LineOnSides extends Component {

	static propTypes = {
		className: PropTypes.string,
		text: PropTypes.string,
	}

	render () {
		const { text, className } = this.props;

		if (!text) {
			return null;
		}

		return (
			<div className={getClassName(className)}>{text}</div>
		);
	}
}
