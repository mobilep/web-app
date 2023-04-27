import React from 'react';
import { storiesOf } from '@storybook/react';
import AddFileButton from './AddFileButton';
import { ImageIcon, PdfIcon } from '../../../icons';
import { FILE_TYPE } from '../../../constants/files';

const IMAGE_BUTTON_PROPS = {
	icon: <ImageIcon />,
	type: FILE_TYPE.IMAGE,
};

const DOCUMENT_BUTTON_PROPS = {
	icon: <PdfIcon />,
	type: FILE_TYPE.FILE,
};

storiesOf('1. Atoms / AddFileButton', module)
	.add('Add Image', () => (
		<div style={{ width: '400px' }}>
			<AddFileButton {...IMAGE_BUTTON_PROPS} />
		</div>
	))
	.add('Add PDF File', () => (
		<div style={{ width: '400px' }}>
			<AddFileButton {...DOCUMENT_BUTTON_PROPS} />
		</div>
	));
