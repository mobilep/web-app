import React from 'react';
import { storiesOf } from '@storybook/react';

import MemberProfile from './MemberProfile';

const MEMBER = {
	name: 'John Doe',
	initials: 'JD',
	avatarColor: '#ffd',
	avatar_sm: 'https://s3-eu-west-1.amazonaws.com/mobilepractice-photo/public/100/5f549515-ee86-40f2-9104-5c6a8a80beb7.jpg',
	company: 'SG Corp',
};

storiesOf('2. Molecules / MemberProfile', module)
	.add('MemberProfile',
		() => (
			<div style={{ width: '700px' }}>
				<MemberProfile member={MEMBER} />
			</div>
		));
