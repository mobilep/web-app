import React, { createContext } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import constants from '../constants';

const { en: defaultLanguage } = constants.content;

const LanguageContext = createContext({
	...defaultLanguage,
	_contextSettings: {
		availableLanguages: [],
		currentLanguage: '',
		setLanguage: () => {},
	},
});

// NOTE: This pattern is an update, reflective of a more structured context.
export const withLanguageContext = (Component) => {
	const Wrapper = (props) => (
		<LanguageContext.Consumer>
			{(content) => <Component {...props} content={content} contextSettings={content._contextSettings} />}
		</LanguageContext.Consumer>
	);

	return hoistNonReactStatics(Wrapper, Component);

};

export default LanguageContext;
