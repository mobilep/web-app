/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';

import AddItem from './AddItem';

const onEnter = ({ target }) => {
	alert(target.value);
	target.blur();
	target.value = '';
};

storiesOf('1. Atoms / AddItem', module)
	.add('AddItem', () => <AddItem onEnter={onEnter} placeholder={'Add a few criteria…'} />);
