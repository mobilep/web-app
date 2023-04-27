import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageBoxMediaPreview from './MessageBoxMediaPreview';
import { mediaPreviewTypes } from '../../../constants/common';
import { dropboxIcon } from '../../../images';

const PDF_MEDIA = {
	media: { name: 'test.pdf', type: mediaPreviewTypes.FILE },
};

const IMAGE_MEDIA = {
	media: { name: 'cat.png', src: dropboxIcon, type: mediaPreviewTypes.IMAGE },
};

storiesOf('2. Molecules / MessageBoxMediaPreview', module)
	.add('Media: PDF', () => (
		<div style={{ width: '400px' }}>
			<MessageBoxMediaPreview {...PDF_MEDIA}	/>
		</div>
	))
	.add('Media: Image',	() => (
		<div style={{ width: '400px' }}>
			<MessageBoxMediaPreview {...IMAGE_MEDIA}	/>
		</div>
	))
	.add('Media: Image with Upload Progress',	() => (
		<div style={{ width: '400px' }}>
			<MessageBoxMediaPreview {...IMAGE_MEDIA} uploadProgress={55}	/>
		</div>
	));
