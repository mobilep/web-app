import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import TeamCardList from './TeamCardList';
import { cards } from './testData';

storiesOf('2. Molecules / TeamCardList', module)
	.addDecorator(StoryRouter())
	.add('default', () => <TeamCardList teamList={cards} activeCard='5b3b84595d7f59044c6759ea' getData={() => {}} />);
