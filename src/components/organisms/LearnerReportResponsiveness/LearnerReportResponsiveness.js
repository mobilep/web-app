import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { getLearnerReportLoadingSelector } from '../../../redux/selectors/learnerReportSelectors';
import { connect } from 'react-redux';
import { learnerReportInfo } from '../../../redux/reducers';
import { LanguageContext } from '../../../utils';
import routes from '../../../constants/routes';
import { ViewLoader } from '../../atoms';
import { MobileHeader, LearnerReportFilters, BreadCrumbs, ReportDataRow, ReportValue, LineOnSides } from '../..';

export class LearnerReportResponsiveness extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		getOverallReport: PropTypes.func,
		history: PropTypes.object,
		loading: PropTypes.bool,
		responsivenessByScenario: PropTypes.array,
		teamValues: PropTypes.object,
		userValues: PropTypes.object,
	}

	componentDidMount () {
		if (!this.props.userValues) {
			this.props.getOverallReport();
		}
	}

	getResponsivenessByScenariosRows () {
		const { reports: { dataLabels } } = this.context;

		return this.props.responsivenessByScenario.map(
			({ _id, name, team, user }) => (
				<ReportDataRow
					key={_id}
					title={name}
					size='sm'
					compareValues='lessBetter'
				>
					<ReportValue value={user} label={dataLabels.me} />
					<ReportValue value={team} label={dataLabels.team} />
				</ReportDataRow>
			)
		);
	}

	getBreadCrumbsLinks () {
		const { reports: { responsivenessDetails }, profile: { profile } } = this.context;

		return [
			{ text: profile, link: routes.LEARNER_REPORT },
			{ text: responsivenessDetails },
		];
	}

	onBackButtonClick = () => {
		this.props.history.push(routes.LEARNER_REPORT);
	}

	render () {
		const { userValues, teamValues, loading } = this.props;
		const {
			reports: {
				responsivenessDetails,
				responsivenessPerScenario,
				dataTitles,
				dataDescription,
				dataLabels,
			},
		} = this.context;
		if (loading) return <ViewLoader />;
		if (!userValues) return null;

		const { matches } = window.matchMedia('(max-width: 768px)');
		const breadCrumbsLinks = this.getBreadCrumbsLinks();

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

					<LearnerReportFilters />

					<ReportDataRow
						title={dataTitles.responsiveness}
						description={dataDescription.responsiveness}
						compareValues='lessBetter'
					>
						<ReportValue
							value={userValues.responsiveness}
							label={dataLabels.me}
						/>
						<ReportValue
							value={teamValues.responsiveness}
							label={dataLabels.team}
						/>
					</ReportDataRow>

					<LineOnSides className='Report-lineOnSides' text={responsivenessPerScenario} />

					{this.getResponsivenessByScenariosRows()}
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
		responsivenessByScenario: learnerReportInfo.overallReport &&
			learnerReportInfo.overallReport.responsivenessByScenario,
		loading: getLearnerReportLoadingSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getOverallReport: () => dispatch(learnerReportInfo.getOverallReport({})),
});

export default connect(mapStateToProps, mapDispatchToProps)(LearnerReportResponsiveness);

