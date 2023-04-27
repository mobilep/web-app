import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CloseIcon } from '../../../icons';
import { ButtonIcon } from '../../atoms';
import { MobileHeader } from '../';

import './styles.css';

export default class ClosablePanel extends Component {

	static propTypes = {
		actionButton: PropTypes.element,
		children: PropTypes.any,
		className: PropTypes.string,
		mobileHeaderButtonProps: PropTypes.array,
		onClose: PropTypes.func,
		title: PropTypes.string,
	}

	getClassName () {
		return classNames('ClosablePanel', this.props.className);
	}

	onPanelClose = () => {
		this.props.onClose();
	}

	render () {
		const { children, onClose, title, actionButton, mobileHeaderButtonProps } = this.props;

		return (
			<div className={this.getClassName()}>
				<MobileHeader
					className='ClosablePanel-mobile-header'
					title={title}
					closeButtonHandler={this.onPanelClose}
					buttonsProps={mobileHeaderButtonProps}
				/>

				<div className='ClosablePanel-header'>
					<h3 className='ClosablePanel-title'>{title}</h3>
					{actionButton}
				</div>

				<ButtonIcon
					className='btn-circle btn-close ClosablePanel-closeBtn'
					icon={<CloseIcon />}
					onClick={onClose}
				/>

				{ children }
			</div>
		);
	}
}
