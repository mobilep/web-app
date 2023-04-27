import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, selectV2 } from '@storybook/addon-knobs/react';
import ScenarioTextInput from './ScenarioTextInput';

storiesOf('2. Molecules / ScenarioTextInput', module)
	.add('ScenarioTextInput', () => {
		const types = {
			Text: 'text',
			Password: 'password',
		};
		const name = 'name';
		const errorText = text('error text', 'invalid value');
		const placeholder = text('placeholder', 'Your email');
		const type = selectV2('input types', types);
		const required = boolean('required', true);
		return (
			<div style={{ marginTop: '50px', width: 'calc(100% - 155px)' }}>
				<ScenarioTextInput {...{ errorText, placeholder, type, required, name }} />
			</div>
		);
	});

