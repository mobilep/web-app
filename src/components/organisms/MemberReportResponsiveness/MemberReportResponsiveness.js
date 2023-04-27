import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { LanguageContext } from '../../../utils';
import routes from '../../../constants/routes';
import { MobileHeader, CoachReportFilters, ReportDataRow, MemberProfile } from '../../molecules';
import { BreadCrumbs, ViewLoader, ReportValue, LineOnSides } from '../../atoms';
import { getCoachReportLoadingSelector } from '../../../redux/selectors/coachReportSelectors';
import { coachReportInfo } from '../../../redux/reducers';

export class MemberReportResponsiveness extends Component {
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

		return this.props.report.responsivenessByScenario.map(
			({ _id, scenarioName, team, user }) => (
				<ReportDataRow
					key={_id}
					title={scenarioName}
					size='sm'
					compareValues='lessBetter'
				>
					<ReportValue value={user} label={dataLabels.user} />
					<ReportValue value={team} label={dataLabels.team} />
				</ReportDataRow>
			)
		);
	}

	getBreadCrumbsLinks (userName) {
		const { reports: { responsivenessDetails }, profile: { profile } } = this.context;

		return [
			{ text: profile, link: routes.COACH_REPORT },
			{ text: responsivenessDetails, link: routes.COACH_REPORT_BY_RESPONSIVENESS },
			{ text: userName },
		];
	}

	onBackButtonClick = () => {
		this.props.history.push(routes.COACH_REPORT_BY_RESPONSIVENESS);
	}

	handleFiltersChange = () => {
		const { match: { params } } = this.props;
		this.props.getReport(params.userId);
	}

	render () {
		const { report, loading } = this.props;

		const {
			reports: { dataTitles, dataDescription, dataLabels, teamMemberDetails, responsivenessPerScenario },
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
						title={dataTitles.responsiveness}
						description={dataDescription.responsiveness}
						compareValues='lessBetter'
					>
						<ReportValue
							value={report.userResponsiveness}
							label={dataLabels.user}
						/>
						<ReportValue
							value={report.teamResponsiveness}
							label={dataLabels.team}
						/>
					</ReportDataRow>

					<LineOnSides className='Report-lineOnSides' text={responsivenessPerScenario} />

					{this.getAvgByScenariosRows()}
				</section>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	const { coachReportInfo } = state;
	return {
		report: coachReportInfo.userResponsivenessReport,
		loading: getCoachReportLoadingSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getReport: (userId) => dispatch(coachReportInfo.getUserResponsiveness(userId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemberReportResponsiveness));
