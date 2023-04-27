import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { VideoTile } from '../';
import VideoTileCardWrapper from './VideoTileCardWrapper';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../../redux/reducers';

const store = createStore(reducers);

storiesOf('1. Atoms / VideoTileCardWrapper', module)
	.add('VideoTileCardWrapper', () => (
		<div>
			<Provider store={store}>
				<VideoTileCardWrapper description='Practice example' duration={17}>
					<VideoTile
						thumbnailUrl={text('Thumbnail URL', 'http://via.placeholder.com/350x150/00423b')}
						onPlayButtonClick={action('onPlayButtonClick')}
					/>
				</VideoTileCardWrapper>
			</Provider>
		</div>
	));
