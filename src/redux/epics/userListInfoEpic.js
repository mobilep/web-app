import { of } from 'rxjs/observable/of';
import { switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { EMPTY } from "rxjs";

import ACTIONS from '../actionTypes';
import constants from '../../constants';
import { storeHelpers } from '../../helpers';
import { httpApi } from '../../utils';
import { userListInfo } from '../reducers';

const { api } = constants.common;

const getCompanyUserListFetch = (Authorization, companyId) => {
	return httpApi.get(`${api}/company/${companyId}/user`, { Authorization });
};

const createListOfUserListInfoActions = (res) => {
	if (res.error) {
		return of(userListInfo.getCompanyUserListError(res));
	}
	return of(userListInfo.getCompanyUserListSuccess(res));
};

export const getCompanyUserListEpic = (action$, store) => {
	return action$.ofType(ACTIONS.USER_LIST__GET_INFO_REQUEST).pipe(
		switchMap(() => {
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			if (!accessToken) return EMPTY;
			return getCompanyUserListFetch(accessToken, companyId);
		}),
		switchMap((res) => fromPromise(res.json())),
		switchMap(createListOfUserListInfoActions)
	);
};
