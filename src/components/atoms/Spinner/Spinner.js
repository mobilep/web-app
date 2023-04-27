import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SpinnerIcon } from '../../../icons';

import './styles.css';

export default class Spinner extends PureComponent {

	getClassName = (className) => classNames('Spinner', className);

	static propTypes = {
		className: PropTypes.string,
		color: PropTypes.string,
	}

	render () {
		return <SpinnerIcon className={this.getClassName(this.props.className)} color={this.props.color} />;
	}

}
