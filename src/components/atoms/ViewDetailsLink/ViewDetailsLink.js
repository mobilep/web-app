import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import './styles.css';

export default class ViewDetailsLink extends Component {

	static propTypes = {
		to: PropTypes.string.isRequired,
	}

	getClassName ({ className }) {
		return classNames('ViewDetailsLink', className);
	}

	render () {
		const className = this.getClassName(this.props);
		return <Button {...this.props} className={className} />;
	}

}
