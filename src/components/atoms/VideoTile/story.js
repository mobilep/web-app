import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import VideoTile from './VideoTile';

storiesOf('1. Atoms / VideoTile', module)
	.add('default', () => (
		<VideoTile
			thumbnailUrl={text('Thumbnail URL', 'http://via.placeholder.com/350x150/00423b')}
			onPlayButtonClick={action('onPlayButtonClick')}
		/>
	))
	.add('uploading state', () => (
		<VideoTile
			type={VideoTile.TILE_TYPES.UPLOADING}
			uploadingProgress={number('Uploading progress', 30)}
			onCancelButtonClick={action('onCancelButtonClick')}
		/>
	))
	.add('add state', () => (
		<VideoTile
			type={VideoTile.TILE_TYPES.ADD}
			addText={text('addText', 'Add video')}
			onAddButtonClick={action('onAddButtonClick')}
		/>
	));
