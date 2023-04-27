import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import SuccessSubmit from './ErrorSubmit';

storiesOf('2. Molecules / ErrorSubmit', module)
	.add('Error submitt', () => {
		const buttonLabel = text('buttonLabel', 'Try again');
		const title = text('title', 'Ooops!');
		const message = text('message', 'Looks like your email cannot be send.');
		return (
			<SuccessSubmit {...{ buttonLabel, title, message }} />
		);
	});

