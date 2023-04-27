import React from 'react';
import classNames from 'classnames/bind';
import { PropTypes } from 'prop-types';

import constants from './constants';
import './styles.css';

const {
	TOP_LEFT,
	TOP_RIGHT,
	BOTTOM_RIGHT,
	BOTTOM_LEFT,
	RIGHT,
	LEFT,
} = constants.POSITIONS;

const { WHITE, RED } = constants.BACKGROUND;

const getClassName = ({ className, background }) => {

	return classNames('PopUp', {
		'PopUp-background-red': background === RED,
		'PopUp-background-white': background === WHITE,
	}, className);
};

const getPopUpTriangleClassName = (position) => (
	classNames('PopUp-triangle', {
		'PopUp-topLeft': position === TOP_LEFT,
		'PopUp-topRight': position === TOP_RIGHT,
		'PopUp-bottomRight': position === BOTTOM_RIGHT,
		'PopUp-bottomLeft': position === BOTTOM_LEFT,
		'PopUp-right': position === RIGHT,
		'PopUp-left': position === LEFT,
	})
);

const PopUp = ({ className, text, position, background }) => (
	<div className={getClassName({ className, background })}>
		<div className={getPopUpTriangleClassName(position)} />
		<div>{text}</div>
	</div>
);

PopUp.defaultProps = {
	background:	WHITE,
};

PopUp.propTypes = {
	background: PropTypes.string,
	className: PropTypes.string,
	position: PropTypes.string.isRequired,
	text: PropTypes.string,
};

PopUp.POSITIONS = constants.POSITIONS;
PopUp.BACKGROUND = constants.BACKGROUND;

export default PopUp;
