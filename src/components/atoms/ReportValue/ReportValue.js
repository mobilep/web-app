import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const getClassName = (className) => classNames('ReportValue', className);

export default function ReportValue ({ value, label, maxValue, icon, size, className, accent }) {
	return (
		<div className={getClassName(className)} data-size={size} data-accent={accent}>
			<div className='ReportValue-value'>
				{icon && <span className='ReportValue-icon'>{icon}</span>}
				{value}{maxValue && <span className='ReportValue-maxValue'>/{maxValue}</span>}
			</div>
			<div className='ReportValue-label'>{label}</div>
		</div>
	);
}

ReportValue.propTypes = {
	accent: PropTypes.oneOf(['success', 'danger']),
	className: PropTypes.string,
	icon: PropTypes.element,
	label: PropTypes.string,
	maxValue: PropTypes.number,
	size: PropTypes.oneOf(['xs', 'sm', 'md']),
	value: PropTypes.number,
};
