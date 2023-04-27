import React from 'react';
import { storiesOf } from '@storybook/react';

import { ChatForm } from './ChatForm';
import testData from './testData';

storiesOf('3. Organisms / ChatForm', module)
	.add('ChatForm', () => (
		<div>
			<ChatForm
				companyUserList={testData.companyUserList}
				groups={testData.groups}
				getData={() => {}}
				getGroupsData={() => {}}
				onValidationChange={() => {}}
			/>
		</div>
	));
