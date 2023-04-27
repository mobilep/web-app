import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ptBR as pt, zhCN as ch, ko, ja, de, es, it, ru, fr, enGB as en } from 'date-fns/locale';
import { PrimaryNavigation, VideoStatesManager, ImageStatesManager, MediaStatesManagerConnector } from './containers';
import { ViewLoader, LandscapeNotification, Tour, SingleSignIn, ConnectionNotification } from './components';
import { Account, Inbox, Profile, Scenarios, Settings, Team } from './views';
import { LanguageContext, isFullscreenBusy } from './utils';
import { userInfo } from './redux/reducers';
import constants from './constants';
import './App.css';

const { routes, common, content } = constants;
const { Consumer: LanguageConsumer, Provider: LanguageProvider } = LanguageContext;

const accountPathes = [
	routes.FORGOT_PASSWORD,
	routes.FORGOT_PASSWORD_SUCCESS,
	routes.FORGOT_PASSWORD_ERROR,
	routes.RESET_PASSWORD,
	routes.RESET_PASSWORD_SUCCESS,
	routes.CREATE_PASSWORD,
	routes.CREATE_PASSWORD_SUCCESS,
	routes.CREATE_PASSWORD_ERROR,
];

const appPathes = [
	routes.INBOX,
	routes.SCENARIOS,
	routes.TEAM,
	routes.PROFILE,
	routes.SETTINGS,
];

const getAccountPathesPattern = (accountPathes) => `(${accountPathes.join('|')})`;
const getAppPathesPattern = (appPathes) => `(|${appPathes.join('|')})`;

const getBrowserLanguageCode = () => {
	const languageString = navigator.language || navigator.userLanguage || '';
	return languageString.split(/[_-]/)[0].toLowerCase();
};

const getInitialanguage = (languageCode, availableLanguages) => {
	if (availableLanguages.indexOf(languageCode) + 1) return languageCode;
	return 'en';
};

const browserLanguageCode = getBrowserLanguageCode();

const { LANGUAGE } = common.localStorageKeys;
const AVAILABLE_LANGUAGES = Object.keys(content);
const INITIAL_LANGUAGE = localStorage.getItem(LANGUAGE) || getInitialanguage(browserLanguageCode, AVAILABLE_LANGUAGES);

class App extends Component {

	static propTypes = {
		history: PropTypes.object,
		isVideoPlaying: PropTypes.bool,
		loading: PropTypes.bool,
		location: PropTypes.object,
		nextUrl: PropTypes.string,
		onComponentDidMount: PropTypes.func,
		onSignOut: PropTypes.func,
		userInfo: PropTypes.object,
	};

	state = {
		content: content[INITIAL_LANGUAGE],
		_contextSettings: {
			setLanguage: this.setLanguage.bind(this),
			availableLanguages: AVAILABLE_LANGUAGES,
			currentLanguage: INITIAL_LANGUAGE,
			dateFnsLanguageCode: this.detectDateFnsLanguage(INITIAL_LANGUAGE),
		},
	};

	startProtocol (url) {
		const ifrm = document.createElement('iframe');
		ifrm.setAttribute('src', `mobilepractice://${url}`);
		ifrm.style.display = 'none';
		document.body.appendChild(ifrm);
	}

	componentDidMount () {
		const { landscapeMediaQuery } = common;
		window.addEventListener('storage', this.onSignOutInOtherWindow);

		this.mql = matchMedia(landscapeMediaQuery);
		this.mql.addListener(this.handleOrientationChange);
		this.handleOrientationChange(this.mql);

		window.push = this.props.history.push; // expose to be called from electron app
		const windowHref = window.location.href;
		if (windowHref.indexOf('runMobilePracticeProtocol=true') + 1) {
			const url = windowHref.replace('runMobilePracticeProtocol=true', '');
			this.startProtocol(url);
		}

		this.setLangFromParams();

		this.props.onComponentDidMount();
	}

	setLangFromParams () {
		const queryParams = new URLSearchParams(window.location.search);
		const lang = queryParams.get('lang');
		if (lang && AVAILABLE_LANGUAGES.indexOf(lang) !== -1) {
			this.setLanguage(lang);
		}
	}

	onSignOutInOtherWindow = ({ key }) => {
		const { USER_ACCESS_TOKEN, FIREBASE_ACCESS_TOKEN } = constants.common.localStorageKeys;
		if ([USER_ACCESS_TOKEN, FIREBASE_ACCESS_TOKEN].includes(key) && !document.hasFocus()) {
			document.location.reload();
		}
	}

	componentDidUpdate ({ userInfo: { signedIn } }) {
		if (signedIn && !this.props.userInfo.signedIn) {
			this.props.history.push(routes.SIGN_IN);
		}
	}

	handleOrientationChange = ({ matches }) => {
		if (matches) {
			this.setState({ landscapeMode: true });
			document.activeElement.blur();
		} else {
			this.setState({ landscapeMode: false });
		}
	}
	detectDateFnsLanguage (language) {
		switch (language) {
			case 'fr':
				return fr;
			case 'ru':
				return ru;
			case 'es':
				return es;
			case 'it':
				return it;
			case 'de':
				return de;
			case 'ja':
				return ja;
			case 'ko':
				return ko;
			case 'ch':
				return ch;
			case 'pt':
				return pt;
			default:
				return en;
		}
	}
	/**
	 * Sets the application language.
	 *
	 * @param {string} languageCode An available language code.
	 */
	setLanguage (languageCode) {
		this.setState(({ _contextSettings }) => ({
			content: content[languageCode],
			_contextSettings: {
				..._contextSettings,
				currentLanguage: languageCode,
				dateFnsLanguageCode: this.detectDateFnsLanguage(languageCode),
			},
		}), () => localStorage.setItem(LANGUAGE, languageCode));
	}

	shouldNavigateToAccountView ({ userInfo: { signedIn }, pathname } = this.props) {
		return !signedIn || pathname === routes.CREATE_PASSWORD_SUCCESS;
	}

	getAccountPath ({ userInfo: { signedIn } } = this.props) {
		if (!signedIn) return '*';
		return getAccountPathesPattern(accountPathes);
	}

	getPrimaryNavigationClassName () {
		const { location } = this.props;
		if ((common.pathWithoutNavbarRegex.test(location.pathname))) {
			return 'App-nav App-navMobileHidden';
		}
		return 'App-nav';
	}

	/* TODO: Split render logic to different components */
	render () {
		const {
			loading,
			history,
			location: { pathname },
			userInfo: { nextUrl, firstLogIn, resetPasswordError },
			isVideoPlaying,
		} = this.props;
		const { content, _contextSettings, landscapeMode } = this.state;
		const shouldRenderLandscape = landscapeMode && !isVideoPlaying && !isFullscreenBusy();
		const { matches } = window.matchMedia('(max-width: 768px)');

		if (loading) {
			return (
				<div>
					<ConnectionNotification />
					<ViewLoader />
				</div>
			);
		}

		const languageContext = { ...content, _contextSettings };
		return (
			<LanguageProvider value={languageContext}>
				<ConnectionNotification />
				{shouldRenderLandscape ? <LandscapeNotification /> : null}
				<div style={shouldRenderLandscape ? { display: 'none' } : null}>
					<Switch>
						<Route path={routes.SSO}>
							<SingleSignIn />
						</Route>
						<Route path={this.getAccountPath()}>
							<Account {...{ nextUrl, history, pathname, resetPasswordError }} />
						</Route>
						<Route path={getAppPathesPattern(appPathes)}>
							{this.shouldNavigateToAccountView()
								? <Redirect to={routes.SIGN_IN} />
								: (
									<div className='App'>
										<LanguageConsumer>
											{
												({ common, primaryNav }) => (
													<PrimaryNavigation
														className={this.getPrimaryNavigationClassName()}
														content={{ common, primaryNav }}
													/>
												)
											}
										</LanguageConsumer>
										<div className='App-content'>
											<Switch>
												<Route path={`${routes.INBOX}/:view?/:inboxId?`} component={Inbox} />
												<Route
													path={`${routes.SCENARIOS}/:id?/:mode?`}
													render={(props) => <Scenarios {...this.props} {...props} />}
												/>
												<Route path={`${routes.TEAM}/:teamId?/:mode?`}
													component={(props) =>
														<Team {...this.props} {...props} />} />
												<Route path={routes.PROFILE} component={Profile} />
												<Route path={routes.SETTINGS} component={Settings} />
												<Route>
													<Redirect to={routes.SCENARIOS} />
												</Route>
											</Switch>
										</div>
										<VideoStatesManager />
										<ImageStatesManager />
										<MediaStatesManagerConnector />
										{matches && <Tour firstLogIn={firstLogIn} />}
									</div>
								)
							}
						</Route>
					</Switch>
				</div>
			</LanguageProvider>
		);
	}
}

const mapStateToProps = ({ appInfo, userInfo }) => {
	return {
		userInfo,
		loading: appInfo.loading,
		isVideoPlaying: appInfo.videoPlaying,
	};

};

const mapDispatchToProps = (dispatch) => ({
	onComponentDidMount: (data) => dispatch(userInfo.getUserInfo(data)),
	onSignOut: (data) => dispatch(userInfo.signOut(data)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
