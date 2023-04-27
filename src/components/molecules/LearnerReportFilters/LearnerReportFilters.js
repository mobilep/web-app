import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';
import { learnerReportInfo } from '../../../redux/reducers';
import { LanguageContext } from '../../../utils';
import ReportFilters from '../ReportFilters';

export function LearnerReportFilters ({ filters, coachesList, setFilters, getCoaches, coachesLoaded }) {
	const { reports: { coach, filters: filtersL10n } } = useContext(LanguageContext);

	useEffect(() => {
		if (!coachesLoaded) getCoaches();
	}, []);

	const onPeriodSelected = ({ currentTarget: { value } }) => {
		setFilters({ ...filters, period: value });
	};

	const onCoachSelected = ({ currentTarget: { value } }) => {
		setFilters({ ...filters, coach: value });
	};

	const getCoachesOptions = () => {
		return coachesList.map(({ _id, name }) => {
			return <option value={_id} key={_id}>{name}</option>;
		});
	};

	const getPeriodSelect = () => (
		<select onChange={onPeriodSelected} value={filters.period}>
			<option value=''>{filtersL10n.all}</option>
			<option value='lastMonth'>{filtersL10n.lastMonth}</option>
			<option value='last3Month'>{filtersL10n.last3Months}</option>
			<option value='lastYear'>{filtersL10n.lastYear}</option>
		</select>
	);

	const getCoachesSelect = () => (
		<select onChange={onCoachSelected} value={filters.coach}>
			<option value=''>{filtersL10n.all}</option>
			{getCoachesOptions()}
		</select>
	);

	return (
		<ReportFilters
			filters={[
				{ label: coach, input: getCoachesSelect() },
				{ label: filtersL10n.period, input: getPeriodSelect() },
			]}
		/>
	);
}

LearnerReportFilters.propTypes = {
	coachesList: PropTypes.array,
	coachesLoaded: PropTypes.bool,
	filters: PropTypes.object,
	getCoaches: PropTypes.func,
	setFilters: PropTypes.func,
};

const mapStateToProps = (state) => {
	const { learnerReportInfo } = state;
	return {
		coachesList: learnerReportInfo.coachesList,
		filters: learnerReportInfo.filters,
		coachesLoaded: learnerReportInfo.coachesLoaded,
	};
};

const mapDispatchToProps = (dispatch) => ({
	setFilters: (filters) => dispatch(learnerReportInfo.setFilters(filters)),
	getCoaches: () => dispatch(learnerReportInfo.getCoachesList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnerReportFilters);

