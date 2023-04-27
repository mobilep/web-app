import React from 'react';
import { storiesOf } from '@storybook/react';

import ViewDetailsLink from './ViewDetailsLink';

storiesOf('1. Atoms / ViewDetailsLink', module)
	.add('with text', () => <ViewDetailsLink>Yo</ViewDetailsLink>);
