import React from 'react';
import { storiesOf } from '@storybook/react';

import Tutorials from './Tutorials';
import Tour from '../Tour';

storiesOf('2. Molecules / Tutorials', module)
	.add('Tutorials', () => (
		<React.Fragment>
			<Tour />
			<Tutorials />
		</React.Fragment>
	));
