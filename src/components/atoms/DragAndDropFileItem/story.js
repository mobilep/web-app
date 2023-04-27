import React from 'react';
import { storiesOf } from '@storybook/react';
import DragAndDropFileItem from './DragAndDropFileItem';

const props = {
	onCancel: () => {},
	name: 'Photo_1.pdf',
	size: 16.5,
	progress: 32,
};

storiesOf('1. Atoms / DragAndDropFileItem', module)
	.add('DragAndDropFileItem', () => (
		<DragAndDropFileItem { ...props } />
	));
