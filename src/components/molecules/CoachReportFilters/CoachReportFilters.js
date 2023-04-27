import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { coachReportInfo } from '../../../redux/reducers';
import { LanguageContext } from '../../../utils';
import { ReportFilters } from '../';

export function CoachReportFilters ({ filters, setFilters, onFiltersChange }) {
	const { reports: { filters: filtersL10n } } = useContext(LanguageContext);

	const onPeriodSelected = ({ currentTarget: { value } }) => {
		const newFiltersValue = { ...filters, period: value };
		setFilters(newFiltersValue);
		onFiltersChange(newFiltersValue);
	};

	const getPeriodSelect = () => (
		<select onChange={onPeriodSelected} value={filters.period}>
			<option value=''>{filtersL10n.all}</option>
			<option value='lastMonth'>{filtersL10n.lastMonth}</option>
			<option value='last3Month'>{filtersL10n.last3Months}</option>
			<option value='lastYear'>{filtersL10n.lastYear}</option>
		</select>
	);

	return (
		<ReportFilters
			filters={[
				{ label: filtersL10n.period, input: getPeriodSelect() },
			]}
		/>
	);
}

CoachReportFilters.propTypes = {
	filters: PropTypes.object,
	onFiltersChange: PropTypes.func,
	setFilters: PropTypes.func,
};

CoachReportFilters.defaultProps = {
	onFiltersChange: () => {},
};

const mapStateToProps = (state) => {
	const { coachReportInfo } = state;
	return {
		filters: coachReportInfo.filters,
	};
};

const mapDispatchToProps = (dispatch) => ({
	setFilters: (filters) => dispatch(coachReportInfo.setFilters(filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachReportFilters);
