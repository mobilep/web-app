import React from 'react';
import { storiesOf } from '@storybook/react';
import DragAndDropBrowse from './DragAndDropBrowse';

storiesOf('1. Atoms / DragAndDropBrowse', module)
	.add('DragAndDropBrowse', () => (
		<DragAndDropBrowse
			text='Drag and drop files here or'
			buttonLabel='Browse'
		/>
	));
