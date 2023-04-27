import React from 'react';
import { storiesOf } from '@storybook/react';
import TeamEmptyArea from './TeamEmptyArea';

storiesOf('1. Atoms / TeamEmptyArea', module)
	.add('default', () => <TeamEmptyArea text='Open a team or create new one' />);
