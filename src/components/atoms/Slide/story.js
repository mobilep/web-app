import React from 'react';
import { storiesOf } from '@storybook/react';

import Slide from './Slide';
import { logoImg } from '../../../images';

storiesOf('1. Atoms / Slide', module)
	.add('Slide', () => (
		<Slide title='Welcome to MP' imageSrc={logoImg}>
			<div>Lorem ipsum dolor</div>
		</Slide>
	));
