import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

import './styles.css';

const getClassName = (className) => classNames('Link', className);

const Link = ({ className, children, to, ...rest }) => (
	<RouterLink to={to} { ...rest } className={getClassName(className)}>
		{children}
	</RouterLink>
);

Link.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]),
	className: PropTypes.string,
	to: PropTypes.string.isRequired,
};

export default Link;
