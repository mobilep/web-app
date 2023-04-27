import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import NewMessageCard from './NewMessageCard';

storiesOf('2. Molecules / NewMessageCard', module)
	.add('with text', () => (
		<NewMessageCard
			personInitials={text('Person initials', 'al')}
			avatar={text('Person avatar', 'https://i.ytimg.com/vi/tESeU278FpU/maxresdefault.jpg')}
			person={text('Person name', 'Alvin Lane')}
			active={boolean('Active', false)}
		/>
	));
