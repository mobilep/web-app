import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import routes from '../../../constants/routes';
import { LanguageContext } from '../../../utils';
import { ViewLoader, BreadCrumbs, ReportValue, LineOnSides } from '../../atoms';
import { MobileHeader, CoachReportFilters, ReportDataRow, ReportMembersList } from '../../molecules';
import { connect } from 'react-redux';
import { getCoachReportLoadingSelector } from '../../../redux/selectors/coachReportSelectors';
import { coachReportInfo } from '../../../redux/reducers';

export class MembersReportResponsiveness extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		getResponsivenessReport: PropTypes.func,
		history: PropTypes.object,
		loading: PropTypes.bool,
		usersResponsivenessReport: PropTypes.object,
	}

	componentDidMount () {
		if (!this.props.usersResponsivenessReport) {
			this.props.getResponsivenessReport();
		}
	}

	getBreadCrumbsLinks () {
		const { reports: { responsivenessDetails }, profile: { profile } } = this.context;

		return [
			{ text: profile, link: routes.COACH_REPORT },
			{ text: responsivenessDetails },
		];
	}

	onBackButtonClick = () => {
		this.props.history.push(routes.COACH_REPORT);
	}

	handleFiltersChange = () => {
		this.props.getResponsivenessReport();
	}

	render () {
		const { usersResponsivenessReport: report, loading } = this.props;
		const {
			reports: { dataTitles, dataDescription, dataLabels, teamMembersRaking, responsivenessDetails },
		} = this.context;

		if (loading) return <ViewLoader />;
		if (!report) return null;

		const breadCrumbsLinks = this.getBreadCrumbsLinks();
		const { matches } = window.matchMedia('(max-width: 768px)');

		return (
			<Fragment>
				{matches && <MobileHeader
					className='Report-mobileHeader'
					title={responsivenessDetails}
					closeButtonHandler={this.onBackButtonClick}
				/>}

				<section className='container'>
					{!matches &&
						<BreadCrumbs className='Report-breadCrumbs' links={breadCrumbsLinks} />
					}

					<CoachReportFilters onFiltersChange={this.handleFiltersChange} />

					<ReportDataRow
						title={dataTitles.responsiveness}
						description={dataDescription.responsiveness}
					>
						<ReportValue
							value={report.teamResponsiveness}
							label={dataLabels.team}
						/>
						<ReportValue
							value={report.companyResponsiveness}
							label={dataLabels.company}
						/>
					</ReportDataRow>

					<LineOnSides className='Report-lineOnSides' text={teamMembersRaking} />

					<ReportMembersList users={report.users} linkBaseUrl={routes.COACH_REPORT_BY_RESPONSIVENESS} />
				</section>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	const { coachReportInfo } = state;
	return {
		usersResponsivenessReport: coachReportInfo.usersResponsivenessReport,
		loading: getCoachReportLoadingSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getResponsivenessReport: () => dispatch(coachReportInfo.getUsersResponsiveness()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MembersReportResponsiveness);

