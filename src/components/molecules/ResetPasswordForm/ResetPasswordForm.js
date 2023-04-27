import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { iif, of } from 'rxjs';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { map } from 'rxjs/operators/map';
import { Form } from '..';
import { Dialog } from '../../atoms';

import './styles.css';
import { httpApi } from '../../../utils';
import constants from '../../../constants';

const { api4 } = constants.common;

const validatePasswordResetTokenFetch = (passwordResetToken) =>
	httpApi.get(`${api4}/auth/validate-reset-token?token=${passwordResetToken}`);

const PASSWORD_RESET_TOKEN_STATES = {
	VALID: 'VALID',
	INVALID: 'INVALID',
	LOADING: 'LOADING',
};

export default class ResetPasswordForm extends Component {
	TOKEN_STATES = PASSWORD_RESET_TOKEN_STATES;

	state = {
		confirmationPasswordPattern: '',
		passwordResetTokenState: this.TOKEN_STATES.LOADING,
	}

	componentDidMount () {
		const { navigateToSignIn } = this.props;

		this.validatePasswordResetToken()
			.subscribe((passwordResetTokenState) => {
				this.setState({ passwordResetTokenState });

				if (passwordResetTokenState === this.TOKEN_STATES.INVALID) {
					navigateToSignIn();
				}
			});
	}

	validatePasswordResetToken = () => {
		const { passwordResetToken } = this.props;

		return iif(
			() => Boolean(passwordResetToken),
			fromPromise(validatePasswordResetTokenFetch(passwordResetToken))
				.pipe(map(({ status }) => status === 204 ? this.TOKEN_STATES.VALID : this.TOKEN_STATES.INVALID)),
			of(this.TOKEN_STATES.VALID),
		);
	}

	termsAndConditionsRef = React.createRef();

	escapeRegExp (text) {
		return RegExp.escape(text);
	}

	handleSubmit = (inputValues) => {
		const { passwordResetToken } = this.props;
		const data = {
			body: {
				...inputValues,
			},
			Authorization: passwordResetToken,
		};
		this.props.onSubmit(data);
	}

	handleChange = ({ currentTarget }) => {
		const confirmationPasswordPattern = this.escapeRegExp(currentTarget.value);
		this.setState({ confirmationPasswordPattern });
	}

	getTermsAndConditionsLabel ({ termsAndConditionsContent } = this.props) {
		return (
			<Fragment>
				{termsAndConditionsContent.iAgree}&nbsp;<a
					className='ResetPasswordForm-termsLink'
					onClick={(e) => {
						e.preventDefault();
						this.termsAndConditionsRef.current.show();
					}}
				>
					&nbsp;{termsAndConditionsContent.theTerms}
				</a>
				&nbsp;{termsAndConditionsContent.iRead}
			</Fragment>
		);
	}

	render () {
		const {
			buttonLabel,
			passwordPlaceholder,
			confirmPasswordPlaceholder,
			passwordValidationMessage,
			confirmPasswordValidationMessage,
			withTermsAndConditions,
			submitting,
			resetPasswordError,
			resetPasswordErrorText,
		} = this.props;
		const {
			confirmationPasswordPattern,
			passwordResetTokenState,
		} = this.state;

		if (passwordResetTokenState === this.TOKEN_STATES.LOADING ||
			passwordResetTokenState === this.TOKEN_STATES.INVALID
		) {
			return null;
		}

		if (passwordResetTokenState === this.TOKEN_STATES.VALID) {
			return (
				<div>
					<Form {...this.props} onSubmit={this.handleSubmit} className='ResetPasswordForm'>
						<Form.TextInput
							onChange={this.handleChange}
							errorClassName='ResetPasswordForm-error'
							errorText={passwordValidationMessage}
							name='password'
							placeholder={passwordPlaceholder}
							required
							type='password'
						/>
						<Form.TextInput
							errorClassName='ResetPasswordForm-error'
							errorText={confirmPasswordValidationMessage}
							name='password'
							pattern={confirmationPasswordPattern}
							placeholder={confirmPasswordPlaceholder}
							required
							type='password'
						/>
						{resetPasswordError && (
							<div className='ResetPasswordFormError'>{ resetPasswordErrorText }</div>
						)}
						{withTermsAndConditions && (
							<Fragment>
								<Form.Checkbox
									name='terms'
									required
									errorText={this.props.termsAndConditionsContent.error}
									labelContent={this.getTermsAndConditionsLabel()}
								/>
								<Dialog
									className='ResetPasswordForm-termsAndConditionsDialog'
									ref={this.termsAndConditionsRef}>
									<div className='ResetPasswordForm-termsAndConditionsDialogContent'>
										<div
											dangerouslySetInnerHTML={{
												__html: this.props.termsAndConditionsContent.information,
											}}
										/>
									</div>
								</Dialog>
							</Fragment>
						)}
						<div>
							{/* TODO: Add arrow icon */}
							<Form.Button disabled={submitting}>{buttonLabel}</Form.Button>
						</div>
					</Form>
				</div>
			);
		}
	}
}

ResetPasswordForm.propTypes = {
	buttonLabel: PropTypes.string,
	confirmPasswordPlaceholder: PropTypes.string,
	confirmPasswordValidationMessage: PropTypes.string,
	navigateToSignIn: PropTypes.func,
	onSubmit: PropTypes.func,
	passwordPlaceholder: PropTypes.string,
	passwordResetToken: PropTypes.string.isRequired,
	passwordValidationMessage: PropTypes.string,
	resetPasswordError: PropTypes.bool,
	resetPasswordErrorText: PropTypes.string,
	submitting: PropTypes.bool,
	termsAndConditionsContent: PropTypes.object,
	termsAndConditionsText: PropTypes.string,
	withTermsAndConditions: PropTypes.bool,
};
