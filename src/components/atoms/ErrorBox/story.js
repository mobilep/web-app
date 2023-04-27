import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import ErrorBox from './ErrorBox';

storiesOf('1. Atoms / ErrorBox', module)
	.add('ErrorBox', () => {
		const message = text('error text', `Uh no, we don't recognise that email address`);
		return (
			<ErrorBox {...{ message }} />
		);
	});
