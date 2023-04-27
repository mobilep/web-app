import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';
import { learnerReportInfo } from '../../../redux/reducers';
import { BreadCrumbs, ReportDataRow, ReportValueWithStars, MobileHeader } from '../..';
import routes from '../../../constants/routes';
import { LanguageContext } from '../../../utils';
import { ViewLoader, ReportValue, LineOnSides } from '../../atoms';
import { StarIconGold } from '../../../icons';
import { getLearnerReportLoadingSelector } from '../../../redux/selectors/learnerReportSelectors';

export class LearnerReportForScenario extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		getScenarioReport: PropTypes.func,
		history: PropTypes.object,
		loading: PropTypes.bool,
		match: PropTypes.object,
		scenarioReport: PropTypes.object,
	}

	static defaultProps = {}

	componentDidMount () {
		const { match: { params }, scenarioReport } = this.props;

		if (!scenarioReport) {
			this.props.getScenarioReport(params.scenarioId);
		}
	}

	getScoreByCriteriaRows () {
		const { reports: { dataLabels } } = this.context;

		return this.props.scenarioReport.criterias.map(
			({ _id, name, team, user }) => (
				<ReportDataRow
					key={_id}
					title={name}
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
		const { reports: { totalScoreDetails, scenarioScoreDetails }, profile: { profile } } = this.context;

		return [
			{ text: profile, link: routes.LEARNER_REPORT },
			{ text: totalScoreDetails, link: routes.LEARNER_REPORT_BY_SCENARIOS },
			{ text: scenarioScoreDetails },
		];
	}

	onBackButtonClick = () => {
		this.props.history.push(routes.LEARNER_REPORT_BY_SCENARIOS);
	}

	render () {
		const { scenarioReport, loading } = this.props;
		const {
			reports: { dataLabels, scorePerCriteria, scenarioScoreDetails },
		} = this.context;
		const { matches } = window.matchMedia('(max-width: 768px)');

		if (loading) return <ViewLoader />;
		if (!scenarioReport) return null;

		const breadCrumbsLinks = this.getBreadCrumbsLinks();

		return (
			<Fragment>
				{matches && <MobileHeader
					className='Report-mobileHeader'
					title={scenarioScoreDetails}
					closeButtonHandler={this.onBackButtonClick}
				/>}

				<section className='container'>
					{!matches &&
						<BreadCrumbs className='Report-breadCrumbs' links={breadCrumbsLinks} />
					}

					<ReportDataRow title={scenarioReport.scenarioName}>
						<ReportValue
							value={scenarioReport.userAvgScore}
							maxValue={5}
							icon={<StarIconGold />}
							label={dataLabels.me}
						/>
						<ReportValue
							value={scenarioReport.teamAvgScore}
							maxValue={5}
							icon={<StarIconGold />}
							label={dataLabels.team}
						/>
					</ReportDataRow>

					<LineOnSides className='Report-lineOnSides' text={scorePerCriteria} />

					{this.getScoreByCriteriaRows()}
				</section>
			</Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { learnerReportInfo } = state;
	return {
		scenarioReport: learnerReportInfo.scenarioReportsHash[ownProps.match.params.scenarioId],
		loading: getLearnerReportLoadingSelector(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getScenarioReport: (scenarioId) => dispatch(learnerReportInfo.getScenarioReport(scenarioId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LearnerReportForScenario));
