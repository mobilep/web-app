import React from 'react';
import { storiesOf } from '@storybook/react';
import AvatarGroup from './AvatarGroup';
import { avatars } from './testData';

storiesOf('2. Molecules / AvatarGroup', module)
	.add('default', () => <AvatarGroup avatars={avatars} />);
