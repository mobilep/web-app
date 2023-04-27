import React from 'react';
import { storiesOf } from '@storybook/react';
import DropArea from './DropArea';

storiesOf('1. Atoms / DropArea', module)
	.add('DropArea', () => <DropArea text='Drop files here' />);
