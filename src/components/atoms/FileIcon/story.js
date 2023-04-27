import React from 'react';
import { storiesOf } from '@storybook/react';

import FileIcon from './FileIcon';

storiesOf('1. Atoms / FileIcon', module)
	.add('FileIcon', () => {
		return (
			<FileIcon fileName='file.pdf' />
		);
	});
