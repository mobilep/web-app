import React from 'react';
import { storiesOf } from '@storybook/react';
import PlayerBase from './PlayerBase';

storiesOf('1. Atoms / PlayerBase', module)
	.add('PlayerBase', () => {
		const streamUrl = 'https://s3-eu-west-1.amazonaws.com/mobilepractice-video/MPEG-DASH/79E5390D-0DA0-4929-B753-38BAE1271173/playlist.mpd';
		return <PlayerBase streamUrl={streamUrl} />;
	});
