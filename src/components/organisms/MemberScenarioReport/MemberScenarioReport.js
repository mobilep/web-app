import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { LanguageContext } from '../../../utils';
import routes from '../../../constants/routes';
import { getCoachReportLoadingSelector } from '../../../redux/selectors/coachReportSelectors';
import { coachReportInfo } from '../../../redux/reducers';
import { ViewLoader, BreadCrumbs, ReportValue, LineOnSides } from '../../atoms';
import { MobileHeader, MemberProfile, ReportDataRow, ReportValueWithStars } from '../../molecules';
import { StarIconGold } from '../../../icons';

export class MemberScenarioReport extends Component {
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
		const { userId, scenarioId } = params;
		this.props.getReport({ userId, scenarioId });
	}

	getScorePerCriteriaRows () {
		const { reports: { dataLabels } } = this.context;

		return this.props.report.criterias.map(
			({ _id, name, team, user }) => (
				<ReportDataRow
					key={_id}
					title={name}
					size='sm'
					mobileDataDirection='column'
				>
					<ReportValueWithStars value={user} label={dataLabels.user} />
					<ReportValueWithStars value={team} label={dataLabels.team} />
				</ReportDataRow>
			)
		);
	}

	getBreadCrumbsLinks ({ userName, userId, scenarioName }) {
		const { reports: { totalScoreDetails }, profile: { profile } } = this.context;

		return [
			{ text: profile, link: routes.COACH_REPORT },
			{ text: totalScoreDetails, link: routes.COACH_REPORT_BY_MEMBERS },
			{ text: userName, link: `${routes.COACH_REPORT_BY_MEMBERS}/${userId}` },
			{ text: scenarioName },
		];
	}

	onBackButtonClick = () => {
		const { user } = this.props.report;

		this.props.history.push(`${routes.COACH_REPORT_BY_MEMBERS}/${user._id}`);
	}

	handleFiltersChange = () => {
		const { user, scenarioId } = this.props.report;
		this.props.getReport({ userId: user._id, scenarioId });
	}

	render () {
		const { report, loading } = this.props;
		const {
			reports: { dataLabels, scenarioScoreDetails, scorePerCriteria },
		} = this.context;

		const { matches } = window.matchMedia('(max-width: 768px)');

		if (loading) return <ViewLoader />;
		if (!report) return null;

		const breadCrumbsLinks = this.getBreadCrumbsLinks({
			userName: report.user.name,
			userId: report.user._id,
			scenarioName: report.scenarioName,
		});

		return (
			<Fragment>
				{matches && <MobileHeader
					className='Report-mobileHeader Report-profileMobileHeader'
					title={scenarioScoreDetails}
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
					<ReportDataRow
						title={report.scenarioName}
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

					<LineOnSides className='Report-lineOnSides' text={scorePerCriteria} />

					{this.getScorePerCriteriaRows()}
				</section>
			</Fragment>

		);
	}
}

const mapStateToProps = (state) => {
	const { coachReportInfo } = state;
	return {
		report: coachReportInfo.userScenarioReport,
		loading: getCoachReportLoadingSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getReport: (data) => dispatch(coachReportInfo.getUserScenarioScore(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemberScenarioReport));

