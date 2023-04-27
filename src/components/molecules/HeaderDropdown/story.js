import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import HeaderDropdown from './HeaderDropdown';
import buttonsProps from './testData';

storiesOf('2. Molecules / HeaderDropdown', module)
	.add('HeaderDropdown', () => (
		<div style={{ marginLeft: '190px', marginTop: '150px' }}>
			<HeaderDropdown demo buttonsProps={buttonsProps} attachMenu={boolean('Attach menu', false)} />
		</div>
	));
