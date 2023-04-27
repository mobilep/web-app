import React from 'react';
import { shallow } from 'enzyme';

import ForgotPasswordForm from './ForgotPasswordForm';

const PROPS = {
	buttonLabel: 'Label',
	emailPlaceholder: 'Email',
	emailValidationMessage: 'Email validation message',
	errorMessage: 'Error message',
};

describe('Molecule - ForgotPasswordForm', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<ForgotPasswordForm
				{...PROPS}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render in submitting state', () => {
		const wrapper = shallow(
			<ForgotPasswordForm
				{...PROPS}
				submitting
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render with a sign-in error', () => {
		const wrapper = shallow(
			<ForgotPasswordForm
				{...PROPS}
				signInError
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
