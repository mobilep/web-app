import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const SecondaryNavigation = ({
	actionButton = null,
	children,
	className,
	headerClassName,
	headerText = '',
}) => {
	return (
		<div className={classNames('SecondaryNavigation', className)}>
			<div className={classNames('SecondaryNavigation-header', headerClassName)}>
				<h3 className='SecondaryNavigation-headerText'>{headerText}</h3>
				{actionButton}
			</div>
			<div className='SecondaryNavigation-content'>
				{children}
			</div>
		</div>
	);
};

SecondaryNavigation.propTypes = {
	actionButton: PropTypes.element,
	children: PropTypes.any,
	className: PropTypes.string,
	headerClassName: PropTypes.string,
	headerText: PropTypes.string,
};

export default SecondaryNavigation;
