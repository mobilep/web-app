import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, selectV2 } from '@storybook/addon-knobs/react';
import TextInput from './TextInput';

storiesOf('2. Molecules / TextInput', module)
	.add('Text input', () => {
		const types = {
			Text: 'text',
			Password: 'password',
			Email: 'email',
		};
		const name = 'name';
		const errorText = text('error text', 'invalid value');
		const placeholder = text('placeholder', 'Your email');
		const type = selectV2('input types', types, 'email');
		const required = boolean('required', true);
		return (
			<div style={{ marginTop: '50px', width: 'calc(100% - 155px)' }}>
				<TextInput {...{ errorText, placeholder, type, required, name }} />
			</div>
		);
	});

