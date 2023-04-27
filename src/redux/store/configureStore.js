import userAgent from 'ua-parser-js';
import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import constants from '../../constants';
import rootReducer from '../reducers';
import rootEpic from '../epics';

const { USER_ACCESS_TOKEN } = constants.common.localStorageKeys;

const getBrowserInfo = (parserFn) =>
	(userAgent) => {
		const { browser, engine, os } = parserFn(userAgent);
		return {
			browser,
			engine,
			os,
		};
	};

export const createInitialStore = () => {
	const accessToken = localStorage.getItem(USER_ACCESS_TOKEN);
	const loading = !!accessToken;
	const browserInfo = getBrowserInfo(userAgent)(navigator.userAgent);
	return {
		userInfo: { accessToken },
		appInfo: { loading },
		browserInfo,
	};
};

export default (initialState = {}) => {
	let composeEnhancers = compose;
	const epicMiddleware = createEpicMiddleware();
	const enhancers = [applyMiddleware(epicMiddleware)];

	if (process.env.NODE_ENV === 'development') {
		if (module.hot && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
			composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 20 });
		}
	}
	const store = createStore(
		rootReducer,
		initialState,
		composeEnhancers(...enhancers)
	);

	epicMiddleware.run(rootEpic);

	return store;
};
