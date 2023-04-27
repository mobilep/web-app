import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { HeaderDropdown } from '..';
import { Button } from '../../atoms';
import { CloseIcon, ArrowIcon } from '../../../icons';
import './styles.css';

export default class MobileHeader extends Component {

	static propTypes = {
		arrowClassName: PropTypes.string,
		buttonsProps: PropTypes.arrayOf(PropTypes.shape({
			label: PropTypes.string.isRequired,
			onClick: PropTypes.func.isRequired,
			disabled: PropTypes.bool,
		})),
		className: PropTypes.string,
		closeButtonHandler: PropTypes.func,
		crossIconType: PropTypes.bool,
		description: PropTypes.bool,
		descriptionText: PropTypes.string,
		editMode: PropTypes.bool,
		hasNoButton: PropTypes.bool,
		hasNoMenu: PropTypes.bool,
		menuClassName: PropTypes.string,
		title: PropTypes.string,
		updateDate: PropTypes.string,
	}

	getClassName ({ className } = this.props) {
		return classNames('MobileHeader', className);
	}

	getMenuClassName = (className) => classNames('MobileHeader-buttons', className);

	getButtons ({ buttonsProps } = this.props) {
		if (!buttonsProps) return null;
		if (buttonsProps.length > 1) {
			return <HeaderDropdown buttonsProps={buttonsProps} />;
		} else if (buttonsProps[0].label === 'Send') {
			return;
		} else {
			const { onClick, label, disabled } = buttonsProps[0];
			return (
				<Button className='Button-text p-r-0' disabled={disabled} onClick={onClick}>
					{label}
				</Button>
			);
		}

	}

	getArrowButtonClassName = (className) => classNames('MobileHeader-closeArrowButton', className);

	render () {
		const {
			crossIconType,
			closeButtonHandler,
			title,
			hasNoButton,
			menuClassName,
			hasNoMenu,
			arrowClassName,
			description,
			descriptionText,
		} = this.props;

		const closeArrowButtonClass = this.getArrowButtonClassName(arrowClassName);
		const closeButtonClass = `MobileHeader-closeButton ${crossIconType ? '' : closeArrowButtonClass}`;
		const className = this.getClassName();
		return (
			<div className={className}>
				{!hasNoButton &&
					<button
						className={closeButtonClass}
						onClick={closeButtonHandler}
					>
						{crossIconType
							? <CloseIcon />
							: <ArrowIcon />
						}
					</button>}
				<div className='MobileHeader-title'>{title}
					{description && <p>{descriptionText}</p>}
				</div>
				{!hasNoMenu &&
					<div className={this.getMenuClassName(menuClassName)}>{this.getButtons()}</div>}
			</div>
		);
	}

}
