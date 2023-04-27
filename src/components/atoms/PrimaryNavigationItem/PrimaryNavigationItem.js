import React from 'react';
import { Button } from '..';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.css';

const getClassName = (className) => classNames('PrimaryNavigationItem', { [className]: className });

const PrimaryNavigationItem = ({ children, className, ...rest }) => (
	<Button
		{ ...rest }
		className={getClassName(className)}
		activeClassName='PrimaryNavigationItem-active'
	>
		{children}
	</Button>
);

PrimaryNavigationItem.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]),
	className: PropTypes.string,
};

export default PrimaryNavigationItem;
