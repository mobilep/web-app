import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';
import { ButtonIcon } from '..';
import { CloseIcon } from '../../../icons';

export default class Chip extends Component {
	static propTypes = {
		children: PropTypes.any,
		className: PropTypes.string,
		onDelete: PropTypes.func,
	}

	getClassName () {
		return classNames('Chip', this.props.className);
	}

	render () {
		const { children, onDelete } = this.props;

		return (
			<div className={this.getClassName()}>
				{children}
				{onDelete &&
					<ButtonIcon
						className='Chip-deleteBtn'
						icon={<CloseIcon />}
						onClick={onDelete}
					/>
				}
			</div>
		);
	}
}
