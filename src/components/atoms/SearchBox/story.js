import React from 'react';
import { text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import SearchBox from './SearchBox';

storiesOf('1. Atoms / SearchBox', module)
	.add('SearchBox', () => <SearchBox name={'somename'} category={text('category', 'To:')} />);
