import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './styles.css';
import routes from '../../../constants/routes';
import { LearnerReportOverall, CoachReportOverall } from '..';
import { LanguageContext } from '../../../utils';

export default class Reports extends Component {
	static contextType = LanguageContext;

	static propTypes = {}

	static defaultProps = {}

	render () {
		const { reports } = this.context;

		return (
			<section className='Reports'>
				<div className='Reports-TabsHeader'>
					<NavLink
						to={routes.LEARNER_REPORT}
						className='Reports-TabsButton'
						activeClassName='Reports-TabsButtonActive'
					>
						{reports.learner}
					</NavLink>
					<NavLink
						to={routes.COACH_REPORT}
						className='Reports-TabsButton'
						activeClassName='Reports-TabsButtonActive'
					>
						{reports.coach}
					</NavLink>
				</div>

				<section className='container'>
					<Switch>
						<Route path={routes.LEARNER_REPORT}>
							<LearnerReportOverall />
						</Route>
						<Route>
							<CoachReportOverall />
						</Route>
					</Switch>
				</section>
			</section>
		);
	}
}
