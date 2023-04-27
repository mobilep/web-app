import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from '..';

export default class ForgotPasswordForm extends Component {
	render () {
		const {
			buttonLabel,
			emailPlaceholder,
			emailValidationMessage,
			errorMessage,
			signInError,
			submitting,
		} = this.props;
		return (
			<div>
				<Form {...this.props} className='ForgotPasswordForm'>
					<Form.TextInput
						errorClassName='ForgotPassword-error'
						errorText={emailValidationMessage}
						name='email'
						placeholder={emailPlaceholder}
						required
						type='email'
					/>
					{
						signInError && errorMessage
					}
					<div>
						{/* TODO: Add arrow icon */}
						<Form.Button disabled={submitting}>{buttonLabel}</Form.Button>
					</div>
				</Form>
			</div>
		);
	}
}

ForgotPasswordForm.propTypes = {
	buttonLabel: PropTypes.string,
	emailPlaceholder: PropTypes.string,
	emailValidationMessage: PropTypes.string,
	errorMessage: PropTypes.string,
	signInError: PropTypes.bool,
	submitting: PropTypes.bool,
};
