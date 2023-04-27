import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { LanguageContext } from '../../../utils';
import routes from '../../../constants/routes';
import { MobileHeader, CoachReportFilters, ReportDataRow, MemberProfile, ReportValueWithStars } from '../../molecules';
import { BreadCrumbs, ViewLoader, LineOnSides, ReportValue } from '../../atoms';
import { getCoachReportLoadingSelector } from '../../../redux/selectors/coachReportSelectors';
import { coachReportInfo } from '../../../redux/reducers';
import { StarIconGold } from '../../../icons';

export class MemberReportScore extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		getReport: PropTypes.func,
		history: PropTypes.object,
		loading: PropTypes.bool,
		match: PropTypes.object,
		report: PropTypes.object,
	}

	componentDidMount () {
		const { match: { params } } = this.props;
		this.props.getReport(params.userId);
	}

	getAvgByScenariosRows () {
		const { reports: { dataLabels } } = this.context;
		const { match: { params } } = this.props;

		return this.props.report.avgByScenario.map(
			({ _id, scenarioName, team, user }) => (
				<ReportDataRow
					key={_id}
					title={scenarioName}
					size='sm'
					link={`${routes.COACH_REPORT_BY_MEMBERS}/${params.userId}/scenario/${_id}`}
					mobileDataDirection='column'
				>
					<ReportValueWithStars value={user} label={dataLabels.user} />
					<ReportValueWithStars value={team} label={dataLabels.team} />
				</ReportDataRow>
			)
		);
	}

	getBreadCrumbsLinks (userName) {
		const { reports: { totalScoreDetails }, profile: { profile } } = this.context;

		return [
			{ text: profile, link: routes.COACH_REPORT },
			{ text: totalScoreDetails, link: routes.COACH_REPORT_BY_MEMBERS },
			{ text: userName },
		];
	}

	onBackButtonClick = () => {
		this.props.history.push(routes.COACH_REPORT_BY_MEMBERS);
	}

	handleFiltersChange = () => {
		const { match: { params } } = this.props;
		this.props.getReport(params.userId);
	}

	render () {
		const { report, loading } = this.props;

		const {
			reports: { dataTitles, dataDescription, dataLabels, teamMemberDetails, scorePerScenario },
		} = this.context;
		const { matches } = window.matchMedia('(max-width: 768px)');

		if (loading) return <ViewLoader />;
		if (!report) return null;

		const breadCrumbsLinks = this.getBreadCrumbsLinks(report.user.name);

		return (
			<Fragment>
				{matches && <MobileHeader
					className='Report-mobileHeader Report-profileMobileHeader'
					title={teamMemberDetails}
					closeButtonHandler={this.onBackButtonClick}
				/>}

				<div className='Report-headerWrapper'>
					<div className='container'>
						{!matches &&
							<BreadCrumbs className='Report-breadCrumbs' links={breadCrumbsLinks} />
						}

						<MemberProfile	member={report.user} />
					</div>
				</div>

				<section className='container'>
					<CoachReportFilters onFiltersChange={this.handleFiltersChange} />

					<ReportDataRow
						title={dataTitles.totalScore}
						description={dataDescription.totalScore}
					>
						<ReportValue
							value={report.userAvgScore}
							label={dataLabels.user}
							maxValue={5}
							icon={<StarIconGold />}
						/>
						<ReportValue
							value={report.teamAvgScore}
							label={dataLabels.team}
							maxValue={5}
							icon={<StarIconGold />}
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
	const { coachReportInfo } = state;
	return {
		report: coachReportInfo.userScoreReport,
		loading: getCoachReportLoadingSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getReport: (userId) => dispatch(coachReportInfo.getUserScore(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemberReportScore));
