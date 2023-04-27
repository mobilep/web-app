import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from '../../constants/routes';
import { ProfileComponent } from '../../containers';
import {
	Reports, LearnerReportResponsiveness, LearnerReportByScenarios,
	LearnerReportForScenario, CoachReportByMembers, MembersReportResponsiveness,
	MemberReportResponsiveness, MemberReportScore, MemberScenarioReport,
} from '../../components';

import './styles.css';
import { learnerReportInfo, coachReportInfo } from '../../redux/reducers';

class Profile extends Component {

	static propTypes = {
		avatarInfo: PropTypes.object,
		children: PropTypes.any,
		history: PropTypes.object,
		resetCoachReportData: PropTypes.func,
		resetLearnerReportData: PropTypes.func,
	}

	componentWillUnmount () {
		this.props.resetLearnerReportData();
		this.props.resetCoachReportData();
	}

	render () {
		const { avatarInfo = {}, history } = this.props;

		return (
			<div className='Profile'>
				<Switch>
					<Route path={routes.LEARNER_REPORT_FOR_SCENARIO} >
						<LearnerReportForScenario />
					</Route>
					<Route path={routes.LEARNER_REPORT_BY_SCENARIOS} >
						<LearnerReportByScenarios history={history} />
					</Route>
					<Route path={routes.LEARNER_REPORT_BY_RESPONSIVENESS} >
						<LearnerReportResponsiveness history={history} />
					</Route>
					<Route path={routes.COACH_REPORT_FOR_MEMBER_SCENARIO} >
						<MemberScenarioReport />
					</Route>
					<Route path={routes.COACH_REPORT_FOR_MEMBER} >
						<MemberReportScore />
					</Route>
					<Route path={routes.COACH_REPORT_BY_MEMBERS} >
						<CoachReportByMembers history={history} />
					</Route>
					<Route path={routes.COACH_REPORT_FOR_MEMBER_RESPONSIVENESS} >
						<MemberReportResponsiveness />
					</Route>
					<Route path={routes.COACH_REPORT_BY_RESPONSIVENESS} >
						<MembersReportResponsiveness history={history} />
					</Route>
					<Route>
						<Fragment>
							<ProfileComponent	userAvatarStatus={avatarInfo.state}	/>
							<Reports />
						</Fragment>
					</Route>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ imagesInfo, userInfo }) => {
	return {
		avatarInfo: imagesInfo[userInfo.avatarId],
	};
};

const mapDispatchToProps = (dispatch) => ({
	resetLearnerReportData: () => dispatch(learnerReportInfo.resetData()),
	resetCoachReportData: () => dispatch(coachReportInfo.resetData()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));

