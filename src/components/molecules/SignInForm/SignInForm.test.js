import React from 'react';
import { shallow } from 'enzyme';

import SignInForm from './SignInForm';

describe('Molecule - SignInForm', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<SignInForm
				header='Header'
				paragraph='Paragraph'
				buttonLabel='Button'
				errorMessage='Error'
				emailPlaceholder='Email'
				emailValidationMessage='Validation'
				passwordPlaceholder='Password'
				passwordValidationMessage='Error'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
