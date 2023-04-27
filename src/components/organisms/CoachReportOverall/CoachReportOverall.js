import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';
import { LanguageContext } from '../../../utils';
import coachReportInfo from '../../../redux/reducers/coachReportInfo';
import { ReportDataRow, CoachReportFilters } from '../../molecules';
import { ReportValue, ViewLoader } from '../../atoms';
import { StarIconGold } from '../../../icons';
import { getCoachReportLoadingSelector } from '../../../redux/selectors/coachReportSelectors';
import routes from '../../../constants/routes';

export class CoachReportOverall extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		companyValues: PropTypes.object,
		getOverallReport: PropTypes.func,
		loading: PropTypes.bool,
		teamValues: PropTypes.object,
	}

	componentDidMount () {
		if (!this.props.teamValues) {
			this.props.getOverallReport();
		}
	}

	handleFiltersChange = () => {
		this.props.getOverallReport();
	}

	render () {
		const { companyValues, teamValues, loading } = this.props;
		const { reports: { dataTitles, dataDescription, dataLabels } } = this.context;

		if (loading) return <ViewLoader />;
		if (!teamValues) return null;

		return (
			<section>
				<CoachReportFilters onFiltersChange={this.handleFiltersChange} />

				{/* TOTAL */}
				<ReportDataRow
					title={dataTitles.totalScore}
					description={dataDescription.totalScore}
					link={routes.COACH_REPORT_BY_MEMBERS}
				>
					<ReportValue
						value={teamValues.avgScore}
						maxValue={5}
						icon={<StarIconGold />}
						label={dataLabels.team}
					/>
					<ReportValue
						value={companyValues.avgScore}
						maxValue={5}
						icon={<StarIconGold />}
						label={dataLabels.company}
					/>
				</ReportDataRow>

				{/* RESPONSIVENESS */}
				<ReportDataRow
					title={dataTitles.responsiveness}
					description={dataDescription.responsiveness}
					link={routes.COACH_REPORT_BY_RESPONSIVENESS}
					compareValues='lessBetter'
				>
					<ReportValue value={teamValues.responsiveness} label={dataLabels.team} />
					<ReportValue value={companyValues.responsiveness} label={dataLabels.company} />
				</ReportDataRow>

				{/* RANKING */}
				<ReportDataRow
					title={dataTitles.ranking}
					description={dataDescription.ranking}
				>
					<ReportValue
						value={teamValues.scoreRanking.currentPosition}
						maxValue={teamValues.scoreRanking.total}
						label={dataLabels.score}
					/>
					<ReportValue
						value={teamValues.responsivenessRanking.currentPosition}
						maxValue={teamValues.responsivenessRanking.total}
						label={dataLabels.responsiveness}
					/>
				</ReportDataRow>

				{/* COMPLETED */}
				<ReportDataRow
					title={dataTitles.completed}
					description={dataDescription.completed}
				>
					<ReportValue value={teamValues.complete} label={dataLabels.team} />
				</ReportDataRow>

				{/* CURRENT */}
				<ReportDataRow
					title={dataTitles.current}
					description={dataDescription.current}
				>
					<ReportValue value={teamValues.current} label={dataLabels.team} />
				</ReportDataRow>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	const { coachReportInfo } = state;
	return {
		companyValues: coachReportInfo.overAllReport && coachReportInfo.overAllReport.company,
		teamValues: coachReportInfo.overAllReport && coachReportInfo.overAllReport.team,
		loading: getCoachReportLoadingSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getOverallReport: () => dispatch(coachReportInfo.getOverallReport()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachReportOverall);
