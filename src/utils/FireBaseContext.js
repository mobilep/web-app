import React, { createContext } from 'react';

const { Provider, Consumer } = createContext();

export const withFireBaseContext = (Component) => (props) => (
	<Consumer>
		{(fireBaseDB) => <Component {...props} fireBaseDB={fireBaseDB} />}
	</Consumer>
);

export const FireBaseContextProvider = Provider;
