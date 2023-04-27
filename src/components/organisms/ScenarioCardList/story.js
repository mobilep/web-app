import React from 'react';
import { storiesOf } from '@storybook/react';
import ScenarioCardList from './ScenarioCardList';
import { list } from './testData';

storiesOf('3. Organisms / ScenarioCardList', module)
	.add('default', () => (<ScenarioCardList scenarios={list}	/>));
