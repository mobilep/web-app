import React from 'react';
import { storiesOf } from '@storybook/react';
import SignInForm from './SignInForm';
import constants from '../../../constants';

const { signIn, common } = constants.content.en;

storiesOf('2. Molecules / SignInForm', module)
	.add('Form', () => {
		return (
			<div style={{ marginTop: '50px', width: 'calc(100% - 155px)' }}>
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
			</div>
		);
	});
