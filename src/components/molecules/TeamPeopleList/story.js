import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import TeamPeopleList from './TeamPeopleList';
import { teamData } from './testData';

storiesOf('2. Molecules / TeamPeopleList', module)
	.add('default', () => <TeamPeopleList editMode={boolean('Edit mode', false)} list={teamData._users} />);
