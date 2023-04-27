import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactOutlineManager from 'react-outline-manager';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { subscribe, initialize, ChatsSubscriptionManager } from './firebase';
import { FireBaseContextProvider } from './utils';
import './polyfills';
import configureStore, { createInitialStore } from './redux/store';

import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reduxInitialState = createInitialStore();
const store = configureStore(reduxInitialState);

initialize();

export const db = subscribe(store);
export const chatsSubscriptionsService = new ChatsSubscriptionManager(store);

ReactDOM.render(
	<Provider store={store}>
		<ReactOutlineManager toggle>
			<FireBaseContextProvider value={db}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</FireBaseContextProvider>
		</ReactOutlineManager>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
