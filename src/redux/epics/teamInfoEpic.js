import ACTIONS from '../actionTypes';
import { httpApi } from '../../utils';
import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { switchMap } from 'rxjs/operators';
import { teamInfo } from '../reducers';
import { storeHelpers } from '../../helpers';
import constants from '../../constants';
import { EMPTY } from "rxjs";

const { api, api4 } = constants.common;

const createTeam = (Authorization, companyId, body) => {
	return httpApi.post(`${api4}/company/${companyId}/team`, body, { Authorization });
};

const getTeam = (Authorization, companyId, teamId) => {
	return httpApi.get(`${api}/company/${companyId}/team/${teamId}`, { Authorization });
};

const getTeamList = (Authorization, companyId) => {
	return httpApi.get(`${api}/company/${companyId}/team`, { Authorization });
};

const deleteTeam = (Authorization, companyId, teamId) => {
	return httpApi.delete(`${api}/company/${companyId}/team/${teamId}`, { Authorization });
};

const updateTeam = (Authorization, companyId, teamId, body) => {
	return httpApi.patch(`${api4}/company/${companyId}/team/${teamId}`, body, { Authorization });
};

/*
	(res === null || res.error)
	quick temporary fix, backend shoud return object with error instead of null
*/
const generateCreateTeamAction = (res) => {
	if (res === null || res.error) {
		return of(teamInfo.createTeamError(res));
	}
	return of(teamInfo.createTeamSuccess(res));
};

const createGetTeamAction = (res) => {
	if (res === null || res.error) {
		return of(teamInfo.getTeamError(res));
	}
	return of(teamInfo.getTeamSuccess(res));
};

const createGetTeamListAction = (res) => {
	if (res === null || res.error) {
		return of(teamInfo.getTeamListError(res));
	}
	return of(teamInfo.getTeamListSuccess(res));
};

const createDeleteTeamAction = (res) => {
	if (res === null || res.error) {
		return of(teamInfo.deleteTeamError(res));
	}
	return of(teamInfo.deleteTeamSuccess(res));
};

const createUpdateTeamAction = (res) => {
	if (res === null || res.error) {
		return of(teamInfo.updateTeamError(res));
	}
	return of(teamInfo.updateTeamSuccess(res));
};

export const createTeamEpic = (action$, store) => {
	return action$.ofType(ACTIONS.TEAM__CREATE_REQUEST).pipe(
		switchMap(({ payload }) => {
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			if (!accessToken) return EMPTY;
			return createTeam(accessToken, companyId, payload);
		}),
		switchMap((res) => fromPromise(res.json())),
		switchMap(generateCreateTeamAction)
	);
};

export const getTeamEpic = (action$, store) => {
	return action$.ofType(ACTIONS.TEAM__GET_TEAM_REQUEST).pipe(
		switchMap(({ payload: teamId }) => {
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			if (!accessToken) return EMPTY;
			return getTeam(accessToken, companyId, teamId);
		}),
		switchMap((res) => fromPromise(res.json())),
		switchMap(createGetTeamAction)
	);
};

export const getTeamListEpic = (action$, store) => {
	return action$.ofType(ACTIONS.TEAM__GET_TEAM_LIST_REQUEST).pipe(
		switchMap(() => {
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			if (!accessToken) return EMPTY;
			return getTeamList(accessToken, companyId);
		}),
		switchMap((res) => fromPromise(res.json())),
		switchMap(createGetTeamListAction)
	);
};

export const deleteTeamEpic = (action$, store) => {
	return action$.ofType(ACTIONS.TEAM__DELETE_REQUEST).pipe(
		switchMap(({ payload: teamId }) => {
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			if (!accessToken) return EMPTY;
			return deleteTeam(accessToken, companyId, teamId);
		}),
		switchMap((res) => fromPromise(res.json())),
		switchMap(createDeleteTeamAction)
	);
};

export const updateTeamEpic = (action$, store) => {
	return action$.ofType(ACTIONS.TEAM__UPDATE_REQUEST).pipe(
		switchMap(({ payload: { teamId, body } }
		) => {
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			if (!accessToken) return EMPTY;
			return updateTeam(accessToken, companyId, teamId, body);
		}),
		switchMap((res) => fromPromise(res.json())),
		switchMap(createUpdateTeamAction)
	);
};
