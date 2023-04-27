import React from 'react';
import PropTypes from 'prop-types';
import { StarsRating } from '../../atoms';
import './styles.css';

export default function ReportValueWithStars ({ label, value }) {
	return (
		<div className='ReportValueWithStars'>
			<div className='ReportValueWithStars-label'>{label}</div>
			<div className='ReportValueWithStars-value'>{value}</div>
			<StarsRating value={value} />
		</div>
	);
}

ReportValueWithStars.propTypes = {
	label: PropTypes.string,
	value: PropTypes.number,
};
