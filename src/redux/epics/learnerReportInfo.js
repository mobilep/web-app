import { switchMap, map, catchError } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/internal/observable/of';

import ACTIONS from '../actionTypes';
import { storeHelpers } from '../../helpers';
import { learnerReportApi } from '../api/learnerReportApi';
import learnerReportInfo from '../reducers/learnerReportInfo';
import TIME_UTILS from '../../utils/time';

export const getCoachesListEpic = (actions$, state$) => {
	return actions$.ofType(ACTIONS.LEARNER__GET_COACHES_REQUEST).pipe(
		switchMap(() => {
			const companyId = storeHelpers.getCompanyId(state$);
			return fromPromise(learnerReportApi.getCoachesList(companyId))
				.pipe(
					map((coaches) => learnerReportInfo.getCoachesListSuccess(coaches)),
					catchError(() => of(learnerReportInfo.getCoachesListFailure()))
				);
		}),
	);
};

export const getLearnerOverallReportEpic = (actions$, state$) => {
	return actions$.ofType(ACTIONS.LEARNER__GET_OVERALL_REPORT_REQUEST, ACTIONS.LEARNER__SET_FILTERS).pipe(
		switchMap(({ payload }) => {
			const filters = { ...payload, ...TIME_UTILS.getPeriodDatesRange(payload.period) };
			const companyId = storeHelpers.getCompanyId(state$);
			return fromPromise(learnerReportApi.getOverallReport(companyId, filters))
				.pipe(
					map((report) => learnerReportInfo.getOverallReportSuccess(report)),
					catchError(() => of(learnerReportInfo.getOverallReportFailure()))
				);
		}),
	);
};

export const getScenarioReportEpic = (actions$, state$) => {
	return actions$.ofType(ACTIONS.LEARNER__GET_SCENARIO_REPORT_REQUEST).pipe(
		switchMap(({ payload: scenarioId }) => {
			const companyId = storeHelpers.getCompanyId(state$);

			return fromPromise(learnerReportApi.getScenarioReport(companyId, scenarioId))
				.pipe(
					map((report) => learnerReportInfo.getScenarioReportSuccess(report)),
					catchError(() => of(learnerReportInfo.getScenarioReportFailure()))
				);
		}),
	);
};
