import React from 'react';
import { storiesOf } from '@storybook/react';
import GroupPeopleItem from './GroupPeopleItem';
import { groups } from '../GroupsPeopleList/testData';

storiesOf('2. Molecules / GroupPeopleItem', module)
	.add('default', () => (
		<GroupPeopleItem
			name={groups[0]._id}
			counter={4}
			people={groups[0]._users}
			header={groups[0].name}
			onSelectGroup={() => {}}
		/>
	)
	);
