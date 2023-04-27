import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import routes from '../../../constants/routes';
import { learnerReportInfo } from '../../../redux/reducers';
import { ReportDataRow, LearnerReportFilters } from '../../molecules';
import { ReportValue, ViewLoader } from '../../atoms';
import { LanguageContext } from '../../../utils';
import { StarIconGold } from '../../../icons';
import { getLearnerReportLoadingSelector } from '../../../redux/selectors/learnerReportSelectors';

export class LearnerReportOverall extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		getOverallReport: PropTypes.func,
		loading: PropTypes.bool,
		teamValues: PropTypes.object,
		userValues: PropTypes.object,
	}

	componentDidMount () {
		if (!this.props.userValues) {
			this.props.getOverallReport();
		}
	}

	render () {
		const { userValues, teamValues, loading } = this.props;
		const { reports: { dataTitles, dataDescription, dataLabels } } = this.context;

		if (loading) return <ViewLoader />;
		if (!userValues) return null;

		return (
			<section>
				<LearnerReportFilters />

				{/* TOTAL */}
				<ReportDataRow
					title={dataTitles.totalScore}
					description={dataDescription.totalScore}
					link={routes.LEARNER_REPORT_BY_SCENARIOS}
				>
					<ReportValue
						value={userValues.avgScore}
						maxValue={5}
						icon={<StarIconGold />}
						label={dataLabels.me}
					/>
					<ReportValue
						value={teamValues.avgScore}
						maxValue={5}
						icon={<StarIconGold />}
						label={dataLabels.team}
					/>
				</ReportDataRow>

				{/* RESPONSIVENESS */}
				<ReportDataRow
					title={dataTitles.responsiveness}
					description={dataDescription.responsiveness}
					link={routes.LEARNER_REPORT_BY_RESPONSIVENESS}
					compareValues='lessBetter'
				>
					<ReportValue value={userValues.responsiveness} label={dataLabels.me} />
					<ReportValue value={teamValues.responsiveness} label={dataLabels.team} />
				</ReportDataRow>

				{/* COMPLETED */}
				<ReportDataRow
					title={dataTitles.completed}
					description={dataDescription.completed}
				>
					<ReportValue value={userValues.complete} label={dataLabels.me} />
					<ReportValue value={teamValues.complete} label={dataLabels.team} />
				</ReportDataRow>

				{/* CURRENT */}
				<ReportDataRow
					title={dataTitles.current}
					description={dataDescription.current}
				>
					<ReportValue value={userValues.current} label={dataLabels.me} />
					<ReportValue value={teamValues.current} label={dataLabels.team} />
				</ReportDataRow>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	const { learnerReportInfo } = state;
	return {
		userValues: learnerReportInfo.overallReport && learnerReportInfo.overallReport.user,
		teamValues: learnerReportInfo.overallReport && learnerReportInfo.overallReport.team,
		loading: getLearnerReportLoadingSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getOverallReport: () => dispatch(learnerReportInfo.getOverallReport({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnerReportOverall);
