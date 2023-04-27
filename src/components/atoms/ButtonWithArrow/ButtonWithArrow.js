import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ArrowIcon } from '../../../icons';

import { Button } from '..';
import { COLORS } from '../Button/constants';

import './styles.css';

const getClassName = (className) =>
	classNames('ButtonWithArrow', className);

const ButtonWithArrow = ({ className, children, ...rest }) => (
	<Button
		primary
		color={COLORS.WHITE}
		className={getClassName(className)}
		{...rest}
	>
		<span>
			{children}
			<ArrowIcon />
		</span>
	</Button>
);

ButtonWithArrow.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
};

export default ButtonWithArrow;
