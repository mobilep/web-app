import React from 'react';
import { storiesOf } from '@storybook/react';
import DragAndDropFileInfo from './DragAndDropFileInfo';

storiesOf('1. Atoms / DragAndDropFileInfo', module)
	.add('DragAndDropFileInfo', () => (
		<DragAndDropFileInfo
			formatNamesArray={['jpg', 'svg']}
			maxFileSize={100}
			fileCountText='You can add only 1 file.'
			formatsText='Formats:'
			maxFileSizeText='The maximum file size is'
		/>
	));
