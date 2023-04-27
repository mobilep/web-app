import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

export default class Counter extends PureComponent {

	static propTypes = {
		children: PropTypes.number,
		className: PropTypes.string,
	}

	getClassName = (className) => {
		return classNames({
			Counter: true,
		}, className);
	}

	render () {
		const className = this.getClassName(this.props.className);

		return <div className={className}>{this.props.children}</div>;
	}

}
