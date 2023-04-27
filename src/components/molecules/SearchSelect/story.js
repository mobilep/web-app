/* eslint-disable no-alert */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import SearchSelect from './SearchSelect';
import { items } from './testData';

storiesOf('2. Molecules / SearchSelect', module)
	.add('SearchSelect', withState({ items: [] })(({ store }) => (
		<SearchSelect {...store.state} onSearch={(query) => {
			const itemsProps = items.filter(({ value }) =>
				value.toLowerCase().includes(query));
			store.set({ items: itemsProps });
		}} />
	)));
