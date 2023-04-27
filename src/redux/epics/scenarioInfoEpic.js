import { map, switchMap, concat, withLatestFrom } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { EMPTY, forkJoin } from 'rxjs';

import ACTIONS from '../actionTypes';
import constants from '../../constants';
import { httpApi } from '../../utils';
import { storeHelpers, getMessageBody } from '../../helpers';
import { scenarioInfo, videosInfo, inboxInfo } from '../reducers';
import { scenarioApi } from '../api/scenarioApi';

const { api, api4 } = constants.common;

const getScenarioListFetch = (Authorization, companyId) => {
	return httpApi.get(`${api4}/company/${companyId}/scenario`, { Authorization });
};
const deleteScenarioFetch = (Authorization, companyId, scenarioId) => {
	return httpApi.delete(`${api4}/company/${companyId}/scenario/${scenarioId}`, { Authorization });
};

const createScenarioFetch = (Authorization, companyId, body) => {
	return httpApi.post(`${api4}/company/${companyId}/scenario`, body, { Authorization });
};

const editScenarioFetch = (Authorization, scenarioId, companyId, body) => {
	return httpApi.patch(`${api4}/company/${companyId}/scenario/${scenarioId}`, body, { Authorization });
};

const evaluateScenarioFetch = (Authorization, companyId, scenarioId, practiceId, body) =>
	httpApi.patch(
		`${api4}/company/${companyId}/scenario/${scenarioId}/practice/${practiceId}`,
		body,
		{ Authorization },
	);

const getInboxDataFetch = (Authorization, companyId, scenarioId) =>
	httpApi.get(`${api}/company/${companyId}/scenario/${scenarioId}/practice`, { Authorization });

const createScenarioListInfoAction = (res, videosInfoData = {}) => {
	if (res.error) {
		return of(scenarioInfo.getScenarioListError(res));
	} else {
		const actions$ = of(scenarioInfo.getScenarioListSuccess(res));
		const videos = res
			.map(({ video, examples }) => {
				return [...examples, video];
			})
			.reduce((prev, acc) => [...prev, ...acc], [])
			.filter(({ videoId }) => !videosInfoData[videoId]);
		return actions$.pipe(
			concat(
				of(videosInfo.addVideos(videos), inboxInfo.getInboxList()),
			)
		);
	}
};

export const getScenarioListEpic = (action$, store$) => {
	return action$.ofType(ACTIONS.SCENARIO__GET_LIST_REQUEST, ACTIONS.INBOX__GET_NEW__REQUEST_SUCCESS).pipe(
		switchMap(() => {
			const accessToken = storeHelpers.getAccessToken(store$);
			const companyId = storeHelpers.getCompanyId(store$);
			if (!accessToken) return EMPTY;
			return getScenarioListFetch(accessToken, companyId);
		}),
		switchMap((res) => fromPromise(res.json())),
		withLatestFrom(store$),
		switchMap(([res, store]) => createScenarioListInfoAction(res, store.videosInfo))
	);
};

export const deleteScenarioEpic = (action$, store) => {
	return action$.ofType(ACTIONS.SCENARIO__DELETE_REQUEST).pipe(
		switchMap(
			({ payload }) => {
				const accessToken = storeHelpers.getAccessToken(store);
				const companyId = storeHelpers.getCompanyId(store);

				return forkJoin(of(payload), deleteScenarioFetch(accessToken, companyId, payload));
			}),
		switchMap(([payload, res]) => {
			if (res.status < 200 || res.status >= 300) {
				return of(scenarioInfo.deleteScenarioError());
			}

			return of(
				scenarioInfo.deleteScenariotSuccess(payload),
				inboxInfo.getInboxList(),
			);
		})
	);
};

export const createScenarioEpic = (action$, store) => {
	return action$.ofType(ACTIONS.SCENARIO__CREATE_REQUEST).pipe(
		switchMap(
			({ payload }) => {
				const accessToken = storeHelpers.getAccessToken(store);
				const companyId = storeHelpers.getCompanyId(store);
				return createScenarioFetch(accessToken, companyId, payload);
			}
		),
		switchMap((res) => res.json()),
		switchMap((res) => {
			if (res.error) return scenarioInfo.createScenarioError();
			return of(
				scenarioInfo.createScenarioSuccess({
					...res,
					unreadMessagesGroupChat: 0,
					practiceStatus: res.practiceStatus || {},
				}),
				inboxInfo.getInboxList(),
			);
		})
	);
};

export const editScenarioEpic = (action$, store) => {
	return action$.ofType(ACTIONS.SCENARIO__EDIT_REQUEST).pipe(
		switchMap(
			({ payload: { scenarioId, body } }) => {
				const accessToken = storeHelpers.getAccessToken(store);
				const companyId = storeHelpers.getCompanyId(store);
				return editScenarioFetch(accessToken, scenarioId, companyId, body);
			}
		),
		switchMap((res) => res.json()),
		switchMap((res) => {
			if (res.error) return scenarioInfo.editScenarioError();
			const { _id: scenarioId } = res;
			return of(
				scenarioInfo.editScenarioSuccess(res),
				scenarioInfo.getInboxData(scenarioId),
				inboxInfo.getInboxList(),
			);
		})
	);
};

export const evaluateScenarioEpic = (action$, store) => {
	return action$.ofType(ACTIONS.SCENARIO__EVALUATE_REQUEST).pipe(
		switchMap(
			({ payload: { scenarioId, body, practiceId } }) => {
				const accessToken = storeHelpers.getAccessToken(store);
				const companyId = storeHelpers.getCompanyId(store);
				return evaluateScenarioFetch(accessToken, companyId, scenarioId, practiceId, body);
			}
		),
		switchMap((res) => res.json()),
		switchMap((res) => {
			if (res.error) return scenarioInfo.evaluateScenarioError();

			return of(
				scenarioInfo.evaluateScenarioSuccess(res),
				inboxInfo.inboxEvaluateSuccess({ inboxId: res._id })
			);
		})
	);
};

export const getInboxDataEpic = (action$, store) => {
	return action$.ofType(ACTIONS.SCENARIO__GET_INBOX_DATA_REQUEST).pipe(
		switchMap(
			({ payload }) => {
				const accessToken = storeHelpers.getAccessToken(store);
				const companyId = storeHelpers.getCompanyId(store);
				return getInboxDataFetch(accessToken, companyId, payload);
			}
		),
		switchMap((res) => res.json()),
		map((res) => {
			if (res.error) return scenarioInfo.getInboxDataError();
			const currentUserId = storeHelpers.getCurrentUserId(store);
			res = res.map((inbox) => ({ currentUserId, ...inbox }));
			return scenarioInfo.getInboxDataSuccess(res);
		}),

	);
};

export const sendReminderEpic = (action$, store) => {
	return action$.ofType(ACTIONS.SCENARIO__SEND_REMINDER_REQUEST)
		.pipe(
			switchMap(({ payload }) => {
				const { scenarioId, message: { content, type } } = payload;
				const companyId = storeHelpers.getCompanyId(store);

				return scenarioApi
					.sendReminder({ companyId, scenarioId, message: getMessageBody(content, type) })
					.then((res) => ({ res, _id: scenarioId }));
			}),
			map(({ res, _id }) => {
				if (res.error) return scenarioInfo.sendReminderError();

				return scenarioInfo.sendReminderSuccess({ _id, reminderIsVisible: false });
			})
		);
};

export const updateReminderEpic = (action$, store) => {
	return action$.ofType(ACTIONS.SCENARIO__REMINDER_UPDATE_REQUEST)
		.pipe(
			switchMap(({ payload }) => {
				const { scenarioId, reminderIsVisible } = payload;
				const companyId = storeHelpers.getCompanyId(store);

				return scenarioApi
					.updateReminderState({ companyId, scenarioId, reminderIsVisible });
			}),
			switchMap((res) => res.json()),
			map((res) => {
				if (res.error) return scenarioInfo.updateReminderError();

				const { _id, reminderIsVisible, updatedAt } = res;

				return scenarioInfo.updateReminderSuccess({ _id, reminderIsVisible, updatedAt });
			})
		);
};

export const getScenarioEpic = (action$, store) => {
	return action$.ofType(ACTIONS.SCENARIO__GET_REQUEST)
		.pipe(
			switchMap(({ payload }) => {
				const { scenarioId } = payload;
				const companyId = storeHelpers.getCompanyId(store);

				return scenarioApi
					.getOne({ companyId, scenarioId });
			}),
			switchMap((res) => res.json()),
			map((res) => {
				if (res.error) return scenarioInfo.getScenarioError();

				return scenarioInfo.getScenarioSuccess(res);
			})
		);
};
