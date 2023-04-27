import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function ReportFilters ({ filters }) {
	const getFilterElement = (filter) => (
		<label key={filter.label} className='ReportFilters-filter'>
			<span className='ReportFilters-labelText'>{filter.label}</span>
			{filter.input}
		</label>
	);

	return (
		<section className='ReportFilters'>
			{filters.map(getFilterElement)}
		</section>
	);
}

ReportFilters.propTypes = {
	filters: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, input: PropTypes.element })),
};

ReportFilters.defaultProps = {
	filters: [],
};
