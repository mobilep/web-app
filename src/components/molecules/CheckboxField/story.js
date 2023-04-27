import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckboxField from './CheckboxField';

storiesOf('2. Molecules / CheckboxField', module)
	.add('default', () =>
		(<CheckboxField>
			<h1>Hello world</h1>
		</CheckboxField>));
