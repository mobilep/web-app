import { map, switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';

import ACTIONS from '../actionTypes';
import constants from '../../constants';
import { httpApi } from '../../utils';
import { storeHelpers } from '../../helpers';
import { criteriaInfo } from '../reducers';

const { api4 } = constants.common;

const getCriteriaListFetch = (Authorization, companyId) => {
	return httpApi.get(`${api4}/company/${companyId}/criteria`, { Authorization });
};

export const getCriteriaListEpic = (action$, store) => {
	return action$.ofType(ACTIONS.SCENARIO__GET_LIST_REQUEST).pipe(
		switchMap(() => {
			const accessToken = storeHelpers.getAccessToken(store);
			const companyId = storeHelpers.getCompanyId(store);
			return getCriteriaListFetch(accessToken, companyId);
		}),
		switchMap((res) => fromPromise(res.json())),
		map((criteriaList) => criteriaInfo.getCriteriaListSuccess(criteriaList))
	);
};

