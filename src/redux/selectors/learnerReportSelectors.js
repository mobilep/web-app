import { createSelector } from 'reselect';
import { createLoadingSelector } from './loadingSelectors';

const getLearnerReportInfo = (state) => state.learnerReportInfo;

export const getOverallReport = createSelector(
	[getLearnerReportInfo],
	(reportInfo) => reportInfo.overallReport,
);

export const getLearnerReportLoadingSelector = createLoadingSelector(
	[
		'LEARNER__GET_COACHES',
		'LEARNER__GET_OVERALL_REPORT',
		'LEARNER__GET_SCENARIO_REPORT',
	]
);
