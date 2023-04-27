import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import routes from '../../../constants/routes';
import { ViewLoader, ReportValue, LineOnSides, BreadCrumbs } from './../../atoms';
import { ReportDataRow, LearnerReportFilters, ReportValueWithStars, MobileHeader } from '../../molecules';

import './styles.css';
import { learnerReportInfo } from '../../../redux/reducers';
import { getLearnerReportLoadingSelector } from '../../../redux/selectors/learnerReportSelectors';
import { StarIconGold } from '../../../icons';
import { LanguageContext } from '../../../utils';

export class LearnerReportByScenarios extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		avgByScenario: PropTypes.array,
		getOverallReport: PropTypes.func,
		history: PropTypes.object,
		loading: PropTypes.bool,
		teamValues: PropTypes.object,
		userValues: PropTypes.object,
	}

	componentDidMount () {
		if (!this.props.userValues) {
			this.props.getOverallReport();
		}
	}

	getAvgByScenariosRows () {
		const { reports: { dataLabels } } = this.context;

		return this.props.avgByScenario.map(
			({ _id, name, team, user }) => (
				<ReportDataRow
					key={_id}
					title={name}
					link={`${routes.LEARNER_REPORT_BY_SCENARIOS}/${_id}`}
					size='sm'
					mobileDataDirection={'column'}
				>
					<ReportValueWithStars value={user} label={dataLabels.me} />
					<ReportValueWithStars value={team} label={dataLabels.team} />
				</ReportDataRow>
			)
		);
	}

	getBreadCrumbsLinks () {
		const { reports: { totalScoreDetails }, profile: { profile } } = this.context;

		return [
			{ text: profile, link: routes.LEARNER_REPORT },
			{ text: totalScoreDetails },
		];
	}

	onBackButtonClick = () => {
		this.props.history.push(routes.LEARNER_REPORT);
	}

	render () {
		const { userValues, teamValues, loading } = this.props;
		const {
			reports: { dataTitles, dataDescription, dataLabels, scorePerScenario, totalScoreDetails },
		} = this.context;
		const { matches } = window.matchMedia('(max-width: 768px)');

		if (loading) return <ViewLoader />;
		if (!userValues) return null;

		const breadCrumbsLinks = this.getBreadCrumbsLinks();

		return (
			<Fragment>
				{matches && <MobileHeader
					className='Report-mobileHeader'
					title={totalScoreDetails}
					closeButtonHandler={this.onBackButtonClick}
				/>}

				<section className='container'>
					{!matches &&
						<BreadCrumbs className='Report-breadCrumbs' links={breadCrumbsLinks} />
					}

					<LearnerReportFilters />

					<ReportDataRow
						title={dataTitles.totalScore}
						description={dataDescription.totalScore}
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

					<LineOnSides className='Report-lineOnSides' text={scorePerScenario} />

					{this.getAvgByScenariosRows()}
				</section>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	const { learnerReportInfo } = state;
	return {
		userValues: learnerReportInfo.overallReport && learnerReportInfo.overallReport.user,
		teamValues: learnerReportInfo.overallReport && learnerReportInfo.overallReport.team,
		avgByScenario: learnerReportInfo.overallReport && learnerReportInfo.overallReport.avgByScenario,
		loading: getLearnerReportLoadingSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getOverallReport: () => dispatch(learnerReportInfo.getOverallReport({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnerReportByScenarios);
