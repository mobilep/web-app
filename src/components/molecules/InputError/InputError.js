import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import classNames from 'classnames/bind';

import { PopUp } from '../..';
import popUpConstants from '../../atoms/PopUp/constants';
import { POSITIONS, COLOR } from './constants';
import { WarningIcon } from '../../../icons';
import './styles.css';

const {
	TOP_LEFT,
	TOP_RIGHT,
	BOTTOM_RIGHT,
	BOTTOM_LEFT,
	RIGHT,
	LEFT,
} = popUpConstants.POSITIONS;

const {
	TOP_LEFT_POP_UP,
	TOP_RIGHT_POP_UP,
	BOTTOM_RIGHT_POP_UP,
	BOTTOM_LEFT_POP_UP,
	RIGHT_POP_UP,
	LEFT_POP_UP,
} = POSITIONS;

const { WHITE_ICON, RED_ICON } = COLOR;
const { WHITE, RED } = popUpConstants.BACKGROUND;

export default class InputError extends Component {

	state = {
		isMessageShown: false,
	}

	errorRef = React.createRef()

	handleMouseEnter = () => {
		this.props.onShowPopup(this.errorRef);
		this.setState({ isMessageShown: true });
	}

	handleMouseLeave = () => {
		this.setState({ isMessageShown: false });
	}

	getClassName ({ popUpPosition, className, color }) {
		return classNames('InputError', {
			'InputError-topLeftPopUp': popUpPosition === TOP_LEFT_POP_UP,
			'InputError-topRightPopUp': popUpPosition === TOP_RIGHT_POP_UP,
			'InputError-bottomRightPopUp': popUpPosition === BOTTOM_RIGHT_POP_UP,
			'InputError-bottomLeftPopUp': popUpPosition === BOTTOM_LEFT_POP_UP,
			'InputError-rightPopUp': popUpPosition === RIGHT_POP_UP,
			'InputError-leftPopUp': popUpPosition === LEFT_POP_UP,
			'InputError-white-icon': color === WHITE_ICON,
			'InputError-red-icon': color === RED_ICON,
		}, className);
	}

	getPopUpClassName (popUpClassName) {
		const { isMessageShown } = this.state;

		return classNames('InputError-message', {
			'InputError-message-shown': isMessageShown,
			[popUpClassName]: popUpClassName,
		});
	}

	getPopUpTrianglePosition (popUpPosition) {
		switch (popUpPosition) {
			case RIGHT_POP_UP:
				return LEFT;
			case LEFT_POP_UP:
				return RIGHT;
			case BOTTOM_LEFT_POP_UP:
				return TOP_LEFT;
			case BOTTOM_RIGHT_POP_UP:
				return TOP_RIGHT;
			case TOP_LEFT_POP_UP:
				return BOTTOM_LEFT;
			case TOP_RIGHT_POP_UP:
				return BOTTOM_RIGHT;
			default:
				return BOTTOM_RIGHT;
		}
	}

	getPopUpBackground (color) {
		if (color === WHITE_ICON) return WHITE;
		if (color === RED_ICON) return RED;
	}

	render () {
		const {
			messageText,
			popUpPosition,
			className,
			popUpClassName,
			color,
		} = this.props;

		return (
			<div
				className={this.getClassName({ popUpPosition, className, color })}
				ref={this.errorRef}
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<PopUp
					position={this.getPopUpTrianglePosition(popUpPosition, popUpClassName)}
					className={this.getPopUpClassName(popUpClassName)}
					text={messageText}
					background={this.getPopUpBackground(color)}
				/>
				<WarningIcon />
			</div>
		);
	}
}

InputError.defaultProps = {
	onShowPopup: () => {},
	popUpPosition: TOP_RIGHT_POP_UP,
	color: WHITE_ICON,
};

InputError.propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	messageText: PropTypes.string,
	onShowPopup: PropTypes.func,
	popUpClassName: PropTypes.string,
	popUpPosition: PropTypes.string,
};

InputError.COLOR = COLOR;
InputError.POSITIONS = POSITIONS;
