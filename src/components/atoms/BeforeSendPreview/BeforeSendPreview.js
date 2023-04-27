import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ButtonIcon } from '..';
import { CloseIcon } from '../../../icons';

import './styles.css';

export default class BeforeSendPreview extends Component {

	static propTypes = {
		children: PropTypes.any,
		className: PropTypes.string,
		onDelete: PropTypes.func,
	}

	getClassName () {
		return classNames('BeforeSendPreview', this.props.className);
	}

	render () {
		const { onDelete, children } = this.props;

		return (
			<div className={this.getClassName()}>
				{children}
				<ButtonIcon
					className='btn-circle btn-delete'
					icon={<CloseIcon />}
					onClick={onDelete}
				/>
			</div>
		);
	}

}
