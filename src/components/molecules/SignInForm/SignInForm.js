import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from '..';
import { FormErrorBox } from '../../atoms';

import './styles.css';

export default class SignInForm extends Component {
	render () {
		const {
			buttonLabel,
			emailPlaceholder,
			emailValidationMessage,
			errorMessage,
			passwordPlaceholder,
			passwordValidationMessage,
			signInError,
			submitting,
		} = this.props;
		return (
			<div>
				<Form {...this.props} className='SignInForm'>
					{
						signInError && <FormErrorBox className={'SignInForm-formErrorBox'} message={errorMessage} />
					}
					<Form.TextInput
						errorClassName='SignInForm-Text-error'
						errorText={emailValidationMessage}
						name='email'
						placeholder={emailPlaceholder}
						required
						type='email'
					/>
					<Form.TextInput
						errorClassName='SignInForm-Text-error'
						errorText={passwordValidationMessage}
						name='password'
						placeholder={passwordPlaceholder}
						required
						type='password'
					/>
					<div>
						{/* TODO: Add arrow icon */}
						<Form.Button disabled={submitting} className='SignInForm-button'>{buttonLabel}</Form.Button>
					</div>
				</Form>
			</div>
		);
	}
}

SignInForm.propTypes = {
	buttonLabel: PropTypes.string,
	emailPlaceholder: PropTypes.string,
	emailValidationMessage: PropTypes.string,
	errorMessage: PropTypes.string,
	passwordPlaceholder: PropTypes.string,
	passwordValidationMessage: PropTypes.string,
	signInError: PropTypes.bool,
	submitting: PropTypes.bool,
};
