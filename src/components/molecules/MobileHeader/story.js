import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';

import MobileHeader from './MobileHeader';
import MobileHeaderProps from './testData';

const props = () => (
	{
		title: text('Title', MobileHeaderProps.title),
		buttonsProps: MobileHeaderProps.buttonsProps,
		crossIconType: boolean('Cross Icon Type', false),
	}
);

storiesOf('2. Molecules / MobileHeader', module)
	.add('MobileHeader', () => (
		<MobileHeader {...props()} />
	));
