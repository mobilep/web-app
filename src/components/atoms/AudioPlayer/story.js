import React from 'react';
import { storiesOf } from '@storybook/react';

import AudioPlayer from './AudioPlayer';

const AUDIO_SRC = 'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3';

storiesOf('1. Atoms / AudioPlayer', module)
	.add('AudioPlayer', () => (
		<AudioPlayer src={AUDIO_SRC} />
	));
