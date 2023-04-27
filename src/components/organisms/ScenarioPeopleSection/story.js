/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';

import ScenarioPeopleSection from './ScenarioPeopleSection';
import { groups, userItems } from './testData';

storiesOf('3. Organisms / ScenarioPeopleSection', module)
	.add('ScenarioPeopleSection', () => {
		return <ScenarioPeopleSection groupList={groups} searchUserItems={userItems} userItems={userItems} />;
	}
	);
