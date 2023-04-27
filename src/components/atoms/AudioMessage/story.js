import React from 'react';
import { storiesOf } from '@storybook/react';

import AudioMessage from './AudioMessage';

const AUDIO_SRC = 'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3';

storiesOf('1. Atoms / AudioMessage', module)
	.add('AudioMessage', () => (
		<AudioMessage audioSrc={AUDIO_SRC} loadingState='COMPLETED' />
	))
	.add('AudioMessage Loading', () => (
		<AudioMessage audioSrc={AUDIO_SRC} loadingState='CHECKING' />
	));
