import React from 'react';
import { storiesOf } from '@storybook/react';

import Slider from './Slider';
import { Slide } from '../..';
import { logoImg } from '../../../images';

storiesOf('2. Molecules / Slider', module)
	.add('Slider', () => (
		<Slider>
			<Slide title='Slide 1' imageSrc={logoImg}>
				<div>Slide 1 text</div>
			</Slide>
			<Slide title='Slide 2' imageSrc={logoImg}>
				<div>Slide 2 text</div>
			</Slide>
		</Slider>
	));
