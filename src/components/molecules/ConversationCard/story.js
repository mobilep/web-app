import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, date } from '@storybook/addon-knobs';

import ConversationCard from './ConversationCard';

const defaultValue = new Date('Apr 19 2018');

storiesOf('2. Molecules / ConversationCard', module)
	.add('with text', () => (
		<ConversationCard
			personInitials={text('Person initials', 'al')}
			avatar={text('Person avatar', 'https://i.ytimg.com/vi/tESeU278FpU/maxresdefault.jpg')}
			person={text('Person name', 'Alvin Lane')}
			message={text('Message', 'Hello! How are you today, my dear?')}
			date={date('Date', defaultValue)}
			lastIncoming={boolean('Last message incoming', false)}
			unread={boolean('Unread', false)}
			active={boolean('Active', false)}
			practiceCard={boolean('Practice', false)}
			evaluated={boolean('Practice', false)}
			evaluationMark={5}
		/>
	));
