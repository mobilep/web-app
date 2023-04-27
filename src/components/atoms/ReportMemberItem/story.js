import React from 'react';
import { storiesOf } from '@storybook/react';

import ReportMemberItem from './';
import { userProp, userPropWithStar } from './testData';

storiesOf('1. Atoms / ReportMemberItem', module)
	.add('default', () => (
		<div style={{ width: '500px' }}>
			<ReportMemberItem user={userProp} rank={1} />
		</div>
	))
	.add('with star', () => (
		<div style={{ width: '500px' }}>
			<ReportMemberItem user={userPropWithStar} rank={1} />
		</div>
	));
