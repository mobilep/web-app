import React from 'react';
import { storiesOf } from '@storybook/react';

import FileMessage from './FileMessage';

storiesOf('1. Atoms / FileMessage', module)
	.add('FileMessage', () => {
		return (
			<FileMessage fileName='file.pdf' fileLink='test.pdf' />
		);
	});
