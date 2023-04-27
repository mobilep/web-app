import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import SuccessSubmit from './SuccessSubmit';

storiesOf('2. Molecules / SuccessSubmit', module)
	.add('Success submitt', () => {
		const buttonLabel = text('buttonLabel', 'Create password');
		const title = text('title', 'Success!');
		const message = text('message', 'Email is verified. Now you can create password.');
		return (
			<SuccessSubmit {...{ buttonLabel, title, message }} />
		);
	});

