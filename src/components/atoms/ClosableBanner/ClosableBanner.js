import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ButtonIcon } from '../';
import { CloseIcon } from '../../../icons';
import './styles.css';

export default class ClosableBanner extends Component {

	static propTypes = {
		children: PropTypes.any,
		className: PropTypes.string,
		onClose: PropTypes.func,
	}

	getClassName (className) {
		return classNames('ClosableBanner', className);
	}

	render () {
		const { children, onClose, className } = this.props;

		return (
			<div className={this.getClassName(className)}>
				<ButtonIcon
					className='btn-circle btn-delete'
					icon={<CloseIcon />}
					onClick={onClose}
				/>
				{children}
			</div>
		);
	}
}
