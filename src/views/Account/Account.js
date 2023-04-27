import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LogoIcon } from '../../icons';
import { Link, SuccessSubmit, ErrorSubmit } from '../../components';
import { CreatePasswordForm, SignInForm, ResetPasswordForm, ForgotPasswordForm } from '../../containers';
import { LanguageContext } from '../../utils';
import constants from '../../constants';
import './styles.css';

const { routes } = constants;
const { Consumer: LanguageConsumer } = LanguageContext;

const Account = ({ nextUrl, history, pathname, resetPasswordError }) => {

	const handleGoForgotPassBtnClick = () => history.push(routes.FORGOT_PASSWORD);
	const handleGoSignInBtnClick = () => history.push(routes.SIGN_IN);
	const handleGoHomeBtnClick = () => history.push(routes.SCENARIOS);
	const handleGoBackBtnClick = () => history.go(-1);

	const shouldPushHistory = (nextUrl) => nextUrl === routes.CREATE_PASSWORD_ERROR;

	return (
		<LanguageConsumer>
			{({ common, createPassword, signIn, forgotPassword, resetPassword, termsAndConditions }) => (
				<div className='Account'>
					{nextUrl && nextUrl !== pathname && <Redirect push={shouldPushHistory(nextUrl)} to={nextUrl} />}
					<header className='Account-header'>
						<div className='Account-logoWrapper'>
							<LogoIcon />
							<span>{common.mobilePractice}</span>
						</div>
					</header>
					<div className='Account-content'>
						<Switch>
							<Route path={routes.FORGOT_PASSWORD}>
								<div className='Account-formWrapper'>
									<ForgotPasswordForm
										header={forgotPassword.title}
										paragraph={forgotPassword.description}
										buttonLabel={forgotPassword.reset}
										emailPlaceholder={forgotPassword.email}
										emailValidationMessage={common.emailError}
									/>
									<div className='Account-linkWrapper'>
										<Link to={routes.SIGN_IN}>
											{forgotPassword.justRemember}
										</Link>
									</div>
								</div>
							</Route>
							<Route path={routes.FORGOT_PASSWORD_SUCCESS}>
								<SuccessSubmit
									onButtonClick={handleGoSignInBtnClick}
									buttonLabel={forgotPassword.success.cta}
									message={forgotPassword.success.message}
									title={forgotPassword.success.title}
								/>
							</Route>
							<Route path={routes.FORGOT_PASSWORD_ERROR}>
								<ErrorSubmit
									onButtonClick={handleGoForgotPassBtnClick}
									buttonLabel={forgotPassword.error.cta}
									message={forgotPassword.error.message}
									title={forgotPassword.error.title}
								/>
							</Route>
							<Route
								path={`${routes.RESET_PASSWORD}/:passwordResetToken/:userEmail`}
								render={({ match }) => (
									<div className='Account-formWrapper'>
										<ResetPasswordForm
											{...match.params}
											resetPasswordError={resetPasswordError}
											resetPasswordErrorText={resetPassword.error.alreadyUsed}
											navigateToSignIn={handleGoSignInBtnClick}
											header={resetPassword.title}
											paragraph={resetPassword.description}
											buttonLabel={resetPassword.confirm}
											errorMessage={resetPassword.resetPasswordError}
											emailPlaceholder={resetPassword.email}
											emailValidationMessage={common.emailError}
											passwordPlaceholder={resetPassword.newPassword}
											confirmPasswordPlaceholder={resetPassword.confirmPassword}
											confirmPasswordValidationMessage={common.confirmPasswordError}
											passwordValidationMessage={common.passwordError}
										/>
									</div>
								)}
							/>
							<Route path={routes.RESET_PASSWORD_SUCCESS}>
								<SuccessSubmit
									onButtonClick={handleGoSignInBtnClick}
									buttonLabel={resetPassword.success.cta}
									message={resetPassword.success.message}
									title={resetPassword.success.title}
								/>
							</Route>
							<Route
								path={`${routes.CREATE_PASSWORD}/:passwordResetToken/:userEmail`}
								render={({ match }) => (
									<div className='Account-formWrapper'>
										<CreatePasswordForm
											{...match.params}
											navigateToSignIn={handleGoSignInBtnClick}
											termsAndConditionsContent={termsAndConditions}
											header={createPassword.title}
											paragraph={createPassword.description}
											buttonLabel={createPassword.confirm}
											errorMessage={createPassword.createPasswordError}
											emailPlaceholder={createPassword.email}
											emailValidationMessage={common.emailError}
											passwordPlaceholder={createPassword.newPassword}
											confirmPasswordPlaceholder={createPassword.confirmPassword}
											confirmPasswordValidationMessage={common.confirmPasswordError}
											passwordValidationMessage={common.passwordError}
										/>
									</div>
								)}
							/>
							<Route path={routes.CREATE_PASSWORD_SUCCESS}>
								<SuccessSubmit
									onButtonClick={handleGoHomeBtnClick}
									buttonLabel={createPassword.success.cta}
									message={createPassword.success.message}
									title={createPassword.success.title}
								/>
							</Route>
							<Route path={routes.CREATE_PASSWORD_ERROR}>
								<ErrorSubmit
									onButtonClick={handleGoBackBtnClick}
									buttonLabel={createPassword.error.cta}
									message={createPassword.error.message}
									title={createPassword.error.title}
								/>
							</Route>
							<Route>
								<div className='Account-formWrapper'>
									<SignInForm
										header={signIn.title}
										paragraph={signIn.description}
										buttonLabel={signIn.signIn}
										errorMessage={signIn.signInError}
										emailPlaceholder={signIn.email}
										emailValidationMessage={common.emailError}
										passwordPlaceholder={signIn.password}
										passwordValidationMessage={common.passwordError}
									/>
									<div className='Account-linkWrapper'>
										<Link to={routes.FORGOT_PASSWORD}>
											{signIn.forgotPassword}
										</Link>
									</div>
								</div>
							</Route>
						</Switch>
					</div>
				</div>
			)}
		</LanguageConsumer>
	);
};

Account.propTypes = {
	history: PropTypes.object,
	nextUrl: PropTypes.string,
	pathname: PropTypes.string,
	resetPasswordError: PropTypes.bool,
};

export default Account;

