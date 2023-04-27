import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { BreadCrumbs, ReportValue, ViewLoader, LineOnSides } from '../../atoms';
import routes from '../../../constants/routes';
import { LanguageContext } from '../../../utils';
import { CoachReportFilters, ReportDataRow, MobileHeader, ReportMembersList } from '../../molecules';
import { coachReportInfo } from '../../../redux/reducers';
import { getCoachReportLoadingSelector } from '../../../redux/selectors/coachReportSelectors';
import { StarIconGold } from '../../../icons';

class CoachReportByMembers extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		getUsersScore: PropTypes.func,
		history: PropTypes.object,
		loading: PropTypes.bool,
		usersScoreReport: PropTypes.object,
	}

	componentDidMount () {
		if (!this.props.usersScoreReport) {
			this.props.getUsersScore();
		}
	}

	getBreadCrumbsLinks () {
		const { reports: { totalScoreDetails }, profile: { profile } } = this.context;

		return [
			{ text: profile, link: routes.COACH_REPORT },
			{ text: totalScoreDetails },
		];
	}

	onBackButtonClick = () => {
		this.props.history.push(routes.COACH_REPORT);
	}

	handleFiltersChange = () => {
		this.props.getUsersScore();
	}

	render () {
		const { usersScoreReport, loading } = this.props;
		const {
			reports: { dataTitles, dataDescription, dataLabels, teamMembersRaking, totalScoreDetails },
		} = this.context;

		if (loading) return <ViewLoader />;
		if (!usersScoreReport) return null;

		const breadCrumbsLinks = this.getBreadCrumbsLinks();
		const { matches } = window.matchMedia('(max-width: 768px)');

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

					<CoachReportFilters onFiltersChange={this.handleFiltersChange} />

					<ReportDataRow
						title={dataTitles.totalScore}
						description={dataDescription.totalScore}
					>
						<ReportValue
							value={usersScoreReport.teamAvgScore}
							maxValue={5}
							icon={<StarIconGold />}
							label={dataLabels.team}
						/>
						<ReportValue
							value={usersScoreReport.companyAvgScore}
							maxValue={5}
							icon={<StarIconGold />}
							label={dataLabels.company}
						/>
					</ReportDataRow>

					<LineOnSides className='Report-lineOnSides' text={teamMembersRaking} />

					<ReportMembersList users={usersScoreReport.users} linkBaseUrl={routes.COACH_REPORT_BY_MEMBERS} />
				</section>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	const { coachReportInfo } = state;
	return {
		usersScoreReport: coachReportInfo.usersScoreReport,
		loading: getCoachReportLoadingSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getUsersScore: () => dispatch(coachReportInfo.getUsersScore()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoachReportByMembers);

