import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import TeamCard from './TeamCard';
import { avatars } from '../AvatarGroup/testData';

storiesOf('2. Molecules / TeamCard', module)
	.add('default', () =>
		(<TeamCard
			active={boolean('Active', false)}
			counter={15}
			header='Techmagic team'
			people={avatars}
		/>)
	);
