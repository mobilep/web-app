import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { COLORS } from './constants';

import './styles.css';

const getClassName = ({ color, primary, className }) => classNames({
	Button: true,
	'Button-grey': color === COLORS.GREY,
	'Button-white': color === COLORS.WHITE,
	'Button-primary': primary,
}, className);

const Button = ({
	className = '',
	color = COLORS.DEFAULT,
	disabled = false,
	onClick = () => {},
	primary = false,
	children = '',
	type = 'button',
	activeClassName = '',
	to = '',
	isActive,
}) => {
	return to
		? (
			<NavLink
				className={getClassName({ color, primary, className })}
				activeClassName={activeClassName}
				to={to}
				isActive={isActive}
			>
				{children}
			</NavLink>
		)
		: (
			<button
				disabled={disabled}
				className={getClassName({ color, primary, className })}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		);
};

Button.propTypes = {
	activeClassName: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]),
	className: PropTypes.string,
	color: PropTypes.oneOf(Object.values(COLORS)),
	disabled: PropTypes.bool,
	isActive: PropTypes.func,
	onClick: PropTypes.func,
	primary: PropTypes.bool,
	to: PropTypes.string,
	type: PropTypes.string,
};

export default Button;
