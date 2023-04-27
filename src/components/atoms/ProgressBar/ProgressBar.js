import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const getClassName = (classname) => classNames('ProgressBar', { [classname]: classname });

const ProgressBar = ({ value, className }) => (
	<div className={getClassName(className)}>
		<div className='ProgressBar-number'>{value} %</div>
		<div className='ProgressBar-bar' />
		<div className='ProgressBar-value' style={{ width: `${value}%` }} />
	</div>
);

ProgressBar.propTypes = {
	className: PropTypes.string,
	value: PropTypes.number,
};

export default ProgressBar;
