/* eslint-disable max-len */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, number } from '@storybook/addon-knobs/react';

import Message from './Message';

storiesOf('2. Molecules / Message', module)
	.add('Text', () => (
		<Message
			message={{
				type: 'text',
				content: text('Message text', 'Ea ipsum amet elit ullamco nulla qui laborum ea dolore sunt ex laborum quis ex.'),
			}}
			incoming={boolean('Incoming', true)}
			singleOrLast={boolean('Single or last', true)}
			onContextMenu={action('onVideoMessageCancelUpload')}
		/>
	))
	.add('Video', () => (
		<Message
			message={{
				type: 'video',
				content: {
					thumbnailUrl: 'http://via.placeholder.com/350x150/00423b?text=video%20message',
				},
			}}
		/>
	))
	.add('Evaluation', () => (
		<Message
			message={{
				type: 'evaluation',
				content: {
					text: text('Message text', 'Duis incididunt consectetur nulla proident elit.'),
					avgMark: number('Average mark', 5),
				},
			}}
			incoming={boolean('Incoming', true)}
			viewDetailsText={'View details'}
		/>
	))
	.add('Image', () => (
		<Message
			message={{
				type: 'image',
				content: {
					link: 'https://via.placeholder.com/150',
					text: 'Image with text',
				},
				timeString: 'King, 08:33',
				loadingState: 'COMPLETED',
			}}
			incoming={boolean('Incoming', true)}
		/>
	))
	.add('Audio', () => (
		<Message
			message={{
				type: 'audio',
				content: {
					link: 'https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3',
					text: 'Audio with text',
				},
				timeString: 'King, 08:33',
				loadingState: 'COMPLETED',
			}}
			incoming={boolean('Incoming', true)}
		/>
	))
	.add('File', () => (
		<Message
			message={{
				type: 'file',
				content: {
					link: 'https://rx.health/wp-content/uploads/2017/09/RxHealth_PDF_Placeholder.pdf',
					text: 'File with text',
					originalName: 'Test.pdf',
				},
				timeString: 'King, 08:33',
				loadingState: 'COMPLETED',
			}}
			incoming={boolean('Incoming', true)}
		/>
	));
