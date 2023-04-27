import React from 'react';
import { storiesOf } from '@storybook/react';
import GroupsPeopleList from './GroupsPeopleList';
import { groups } from './testData';

storiesOf('2. Molecules / GroupsPeopleList', module)
	.add('default', () => <GroupsPeopleList groupList={groups} />);
