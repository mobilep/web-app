import React from 'react';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import UserLabel from './UserLabel';

storiesOf('1. Atoms / UserLabel', module)
	.add('UserLabel', () => <UserLabel initials={text('initials', 'JT')} fullName={text('fullName', 'Jane Taylor')} />);
