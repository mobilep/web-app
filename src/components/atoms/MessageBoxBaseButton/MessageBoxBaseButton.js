import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button } from '..';
import './styles.css';

const getClassName = (className) => classNames('MessageBoxBaseButton', { [className]: className });

const MessageBoxBaseButton = ({ children, className, ...rest }) => {

	return (
		<Button { ...rest } className={getClassName(className)}>
			{children}
		</Button>
	);
};

MessageBoxBaseButton.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]),
	className: PropTypes.string,
};

export default MessageBoxBaseButton;
