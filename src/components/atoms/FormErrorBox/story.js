import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import FormErrorBox from './FormErrorBox';

storiesOf('1. Atoms / FormErrorBox', module)
	.add('FormErrorBox', () => {
		const message = text('error text', `Uh no, we don't recognise that email address`);
		return (
			<FormErrorBox {...{ message }} />
		);
	});
