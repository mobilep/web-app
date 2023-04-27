import { initializeApp } from 'firebase/app';

import constants from '../constants';

const { firebase: { apiKey, databaseURL } } = constants.common;

const initialize = () => {
	const config = {
		apiKey,
		databaseURL,
	};

	initializeApp(config);
};

export default initialize;
