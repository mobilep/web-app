import React from 'react';
import { storiesOf } from '@storybook/react';

import SliderDots from './SliderDots';

storiesOf('1. Atoms / SliderDots', module)
	.add('SliderDots', () => (
		<SliderDots total={5} activeIndex={1} />
	));
