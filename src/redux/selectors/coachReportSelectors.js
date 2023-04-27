import { createLoadingSelector } from './loadingSelectors';

export const getCoachReportLoadingSelector = createLoadingSelector(
	[
		'COACH__GET_OVERALL_REPORT',
		'COACH__GET_USERS_SCORE',
		'COACH__GET_USER_SCORE',
		'COACH__GET_USER_SCENARIO_SCORE',
		'COACH__GET_USERS_RESPONSIVENESS',
		'COACH__GET_USER_RESPONSIVENESS',
	]
);
