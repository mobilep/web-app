import { of } from 'rxjs/observable/of';
import { fromPromise } from 'rxjs/observable/fromPromise';
import {
	concat,
	ignoreElements,
	map,
	switchMap,
	tap,
	delay,
	merge,
	catchError,
} from 'rxjs/operators';
import { combineLatest, EMPTY } from 'rxjs';
import ACTIONS from '../actionTypes';
import constants from '../../constants';
import { httpApi } from '../../utils';
import { storeHelpers } from '../../helpers';
import { appInfo, userInfo, inboxInfo, imagesInfo } from '../reducers';
import { auth as firebaseAuth } from '../../firebase';
import { chatsSubscriptionsService } from '../..';
import {
	removeAccessToken,
	removeFirebaseToken,
	saveAccessToken,
	saveFirebaseToken,
} from '../../helpers/storageHelpers';

const { routes } = constants;

const { api, api4 } = constants.common;
const { FIREBASE_ACCESS_TOKEN } = constants.common.localStorageKeys;

const signInFetch = (body) => httpApi.put(`${api}/auth`, body);
const getUserInfoFetch = (Authorization) => httpApi.get(`${api4}/user`, { Authorization });
const generateUrlToResetPassword = (resetPasswordPath, location = window.location) => {
	const { origin } = location;
	return `${origin}${resetPasswordPath}`;
};
const forgotPasswordFetch = (body) =>
	httpApi.post(`${api4}/auth/client-forgot-password`, body);

const resetPasswordFetch = (body, Authorization) =>
	httpApi.post(`${api4}/auth/new-password`, body, { Authorization });

const createPasswordFetch = (body, Authorization) =>
	httpApi.post(`${api}/auth/create-password`, body, { Authorization });

/*
const deleteUserFetch = (userId, Authorization) =>
	httpApi.delete(`${api}/user/${userId}`, { Authorization });
*/

const changeAvatarFetch = (userId, companyId, body, Authorization) =>
	httpApi.patch(`${api}/company/${companyId}/user/${userId}`, body, { Authorization });

const createListOfUSerInfoActions = ([res]) => {
	if (res.error) {
		return of(appInfo.updateLoadState(false), userInfo.signOut());
	}
	const action$ = of(userInfo.getUserInfoSuccess(res));
	return action$.pipe(
		concat(of(imagesInfo.addAvatarImage(res))),
		concat(of(appInfo.updateLoadState(false)).pipe(delay(1000)))
	);
};

let firebaseAuthRef;

export const signInEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__SIGN_IN__REQUEST).pipe(
		switchMap(({ payload }) => signInFetch(payload)),
		switchMap((res) => fromPromise(res.json())),
		tap(({ accessToken, fbtoken }) => {
			if (accessToken) {
				saveAccessToken(accessToken);
			}

			if (fbtoken) {
				saveFirebaseToken(fbtoken);
			}
		}),
		switchMap((res) => {
			const { fbtoken } = res;
			firebaseAuthRef = firebaseAuth();
			const res$ = of(res);
			const fireBaseSignIn$ = res.error
				? of(null)
				: fromPromise(firebaseAuthRef.signInWithCustomToken(fbtoken)).pipe(
					catchError((error) => {
						return error;
					}),
				);
			return combineLatest(res$, fireBaseSignIn$);
		}),
		switchMap(([res]) => {
			if (res.error) return of(userInfo.signInError());
			return of(userInfo.signInSuccess(res))
				.pipe(concat(of(inboxInfo.getInboxList())));
		})
	);
};

export const signOutEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__SIGN_OUT).pipe(
		tap(() => {
			removeAccessToken();
			removeFirebaseToken();
			chatsSubscriptionsService.reset();
			if (firebaseAuthRef) {
				firebaseAuthRef.signOut();
			}
		}),
		ignoreElements()
	);
};

export const getUserInfoEpic = (action$, store) => {
	return action$.ofType(ACTIONS.USER__GET_INFO__REQUEST).pipe(
		switchMap(() => {
			const accessToken = storeHelpers.getAccessToken(store);
			if (!accessToken) return EMPTY;
			return getUserInfoFetch(accessToken);
		}),
		switchMap((res) => fromPromise(res.json())),
		switchMap((res) => {
			const res$ = of(res);
			let fireBaseSignIn$ = of(null);
			if (res.error) {
				removeAccessToken();
				removeFirebaseToken();
				return combineLatest(res$, fireBaseSignIn$);
			} else {
				const fbtoken = localStorage.getItem(FIREBASE_ACCESS_TOKEN);
				firebaseAuthRef = firebaseAuth();
				fireBaseSignIn$ = fromPromise(firebaseAuthRef.signInWithCustomToken(fbtoken)).pipe(
					catchError((error) => of({ error })),
				);

			}
			return combineLatest(res$, fireBaseSignIn$);
		}),
		switchMap(createListOfUSerInfoActions)
	);
};

export const loadUserInfoEpic = (action$, store) => {
	return action$.ofType(ACTIONS.USER__LOAD_INFO__REQUEST).pipe(
		switchMap(() => {
			const accessToken = storeHelpers.getAccessToken(store);
			if (!accessToken) return EMPTY;
			return getUserInfoFetch(accessToken);
		}),
		switchMap((res) => fromPromise(res.json())),
		map((res) => userInfo.getUserInfoSuccess(res)),
	);
};

export const forgotPasswordEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__FORGOT_PASSWORD__REQUEST).pipe(
		map(({ payload }) => {
			const resetClient = generateUrlToResetPassword(routes.RESET_PASSWORD);
			return { ...payload, resetClient };
		}),
		switchMap((body) => forgotPasswordFetch(body)),
		switchMap(({ status }) => {
			let nextUrl = routes.FORGOT_PASSWORD_SUCCESS;
			let action = userInfo.locationUpdate({ nextUrl });
			if (status !== 200) {
				nextUrl = routes.FORGOT_PASSWORD_ERROR;
				action = userInfo.locationUpdate({ nextUrl });
			}
			nextUrl = '';
			return of(action)
				.pipe(merge(of(userInfo.locationUpdate({ nextUrl }))));
		})
	);
};

export const resetPasswordEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__RESET_PASSWORD__REQUEST).pipe(
		switchMap(({ payload: { body, Authorization } }) => resetPasswordFetch(body, Authorization)),
		switchMap((res) => {
			if (res.status !== 200) {
				return of(userInfo.resetPasswordError());
			} else {
				return fromPromise(res.json()).pipe(
					tap(({ accessToken, fbtoken }) => {
						if (accessToken) {
							saveAccessToken(accessToken);
						}

						if (fbtoken) {
							saveFirebaseToken(fbtoken);
						}
					}),
					switchMap((res) => {
						const { fbtoken } = res;
						firebaseAuthRef = firebaseAuth();
						const res$ = of(res);
						const fireBaseSignIn$ = res.error
							? of(null)
							: fromPromise(firebaseAuthRef.signInWithCustomToken(fbtoken)).pipe(
								catchError((error) => {
									return error;
								}),
							);
						return combineLatest(res$, fireBaseSignIn$);
					}),
					switchMap(([res]) => {
						return of(userInfo.locationUpdate({ nextUrl: routes.SCENARIOS }))
							.pipe(
								merge(of(userInfo.locationUpdate({ nextUrl: '' }))),
								merge(of(userInfo.signInSuccess(res)))
							);
					})
				);
			}
		})
	);
};

export const createPasswordEpic = (action$) => {
	return action$.ofType(ACTIONS.USER__CREATE_PASSWORD__REQUEST).pipe(
		switchMap(({ payload: { body, Authorization } }) => createPasswordFetch(body, Authorization)),
		switchMap((res) => fromPromise(res.json())),
		tap(({ accessToken, fbtoken }) => {
			if (accessToken) {
				saveAccessToken(accessToken);
			}

			if (fbtoken) {
				saveFirebaseToken(fbtoken);
			}
		}),
		switchMap((res) => {
			const { fbtoken } = res;
			firebaseAuthRef = firebaseAuth();
			const res$ = of(res);
			const fireBaseSignIn$ = res.error
				? of(null)
				: fromPromise(firebaseAuthRef.signInWithCustomToken(fbtoken)).pipe(
					catchError((error) => {
						return error;
					}),
				);
			return combineLatest(res$, fireBaseSignIn$);
		}),
		switchMap(([res]) => {
			let nextUrl = routes.SCENARIOS;
			let action = userInfo.locationUpdate({ nextUrl });
			if (res.error) {
				nextUrl = routes.CREATE_PASSWORD_ERROR;
				action = userInfo.locationUpdate({ nextUrl });
				return of(action)
					.pipe(merge(of(userInfo.locationUpdate({ nextUrl: '' }))));
			}
			nextUrl = '';
			return of(action)
				.pipe(
					merge(of(userInfo.locationUpdate({ nextUrl }))),
					merge(of(userInfo.signInSuccess(res)))
				);
		})
	);
};
/* TODO: Remove or uncomment when we will know more about this functionality
export const deleteUserEpic = (action$, store) => {
	return action$.ofType(ACTIONS.USER__DELETE_SELF__REQUEST).pipe(
		switchMap(() => deleteUserFetch(
			storeHelpers.getCurrentUserId(store),
			storeHelpers.getAccessToken(store)
		)),
		switchMap((res) => {
			return res.ok && res.status === 204
				? of(userInfo.deleteUserSuccess(), userInfo.signOut())
				: of(userInfo.deleteUserError());
		})
	);
};
*/
export const changeAvatarEpic = (action$, store) => {
	return action$.ofType(ACTIONS.USER__CHANGE_AVATAR_REQUEST).pipe(
		switchMap(({ payload }) => {
			const body = {
				avatarId: payload,
			};
			const userId = storeHelpers.getCurrentUserId(store);
			const companyId = storeHelpers.getCompanyId(store);
			const accessToken = storeHelpers.getAccessToken(store);

			return changeAvatarFetch(userId, companyId, body, accessToken);
		}),
		switchMap((res) => fromPromise(res.json())),

		switchMap((res) => {
			if (res.error) return of(userInfo.changeAvatarError());
			const { avatarId, avatar_lg, avatar_md, avatar_sm } = res;
			return [
				userInfo.changeAvatarSuccess(res),
				imagesInfo.addAvatarImage({
					avatarId, avatar_lg, avatar_md, avatar_sm,
				}),
			];
		})
	);
};
