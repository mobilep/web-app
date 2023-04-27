import { of } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { switchMap, map, catchError } from 'rxjs/operators';

import ACTIONS from '../actionTypes';
import { coachReportApi } from '../api/coachReportApi';
import { storeHelpers } from '../../helpers';
import coachReportInfo from '../reducers/coachReportInfo';
import TIME_UTILS from '../../utils/time';

const getFiltersFromStore = (store$) => {
	const state = store$.value;
	return state.coachReportInfo.filters;
};

const getFilters = (store$) => {
	const savedFilters = getFiltersFromStore(store$);
	return { ...savedFilters, ...TIME_UTILS.getPeriodDatesRange(savedFilters.period) };
};

export const getCoachOverallReportEpic = (actions$, state$) => {
	return actions$.ofType(ACTIONS.COACH__GET_OVERALL_REPORT_REQUEST).pipe(
		switchMap(() => {
			const companyId = storeHelpers.getCompanyId(state$);
			const filters = getFilters(state$);

			return fromPromise(coachReportApi.getOverallReport(companyId, filters))
				.pipe(
					map((report) => coachReportInfo.getOverallReportSuccess(report)),
					catchError(() => of(coachReportInfo.getOverallReportFailure()))
				);
		}),
	);
};

export const getCoachUsersScoresEpic = (actions$, state$) => {
	return actions$.ofType(ACTIONS.COACH__GET_USERS_SCORE_REQUEST).pipe(
		switchMap(() => {
			const companyId = storeHelpers.getCompanyId(state$);
			const filters = getFilters(state$);

			return fromPromise(coachReportApi.getUsersScores(companyId, filters))
				.pipe(
					map((report) => coachReportInfo.getUsersScoreSuccess(report)),
					catchError(() => of(coachReportInfo.getUsersScoreFailure()))
				);
		}),
	);
};

export const getCoachUserScoresEpic = (actions$, state$) => {
	return actions$.ofType(ACTIONS.COACH__GET_USER_SCORE_REQUEST).pipe(
		switchMap(({ payload: userId }) => {
			const companyId = storeHelpers.getCompanyId(state$);
			const filters = getFilters(state$);

			return fromPromise(coachReportApi.getUserScore(companyId, userId, filters))
				.pipe(
					map((report) => coachReportInfo.getUserScoreSuccess(report)),
					catchError(() => of(coachReportInfo.getUserScoreFailure()))
				);
		}),
	);
};

export const getCoachUserScenarioScoresEpic = (actions$, state$) => {
	return actions$.ofType(ACTIONS.COACH__GET_USER_SCENARIO_SCORE_REQUEST).pipe(
		switchMap(({ payload: { userId, scenarioId } }) => {
			const companyId = storeHelpers.getCompanyId(state$);
			const filters = getFilters(state$);

			return fromPromise(
				coachReportApi.getUserScenarioScore({ companyId, userId, scenarioId, filters })
			)
				.pipe(
					map((report) => coachReportInfo.getUserScenarioScoreSuccess(report)),
					catchError(() => of(coachReportInfo.getUserScenarioScoreFailure()))
				);
		}),
	);
};

export const getCoachUsersResponsivenessEpic = (actions$, state$) => {
	return actions$.ofType(ACTIONS.COACH__GET_USERS_RESPONSIVENESS_REQUEST).pipe(
		switchMap(() => {
			const companyId = storeHelpers.getCompanyId(state$);
			const filters = getFilters(state$);

			return fromPromise(coachReportApi.getUsersResponsiveness(companyId, filters))
				.pipe(
					map((report) => coachReportInfo.getUsersResponsivenessSuccess(report)),
					catchError(() => of(coachReportInfo.getUsersResponsivenessFailure()))
				);
		}),
	);
};

export const getCoachUserResponsivenessEpic = (actions$, state$) => {
	return actions$.ofType(ACTIONS.COACH__GET_USER_RESPONSIVENESS_REQUEST).pipe(
		switchMap(({ payload: userId }) => {
			const companyId = storeHelpers.getCompanyId(state$);
			const filters = getFilters(state$);

			return fromPromise(coachReportApi.getUserResponsiveness(companyId, userId, filters))
				.pipe(
					map((report) => coachReportInfo.getUserResponsivenessSuccess(report)),
					catchError(() => of(coachReportInfo.getUserResponsivenessFailure()))
				);
		}),
	);
};
