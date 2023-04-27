import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { selectV2 } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';
import { titleCaseKeys } from '../../../utils';

import AppendableList from './AppendableList';

import { LIST_TYPES } from './constants';

const CASED_TYPES = titleCaseKeys(LIST_TYPES);
const DEFAULT_ITEMS = [
	'Some item',
	'Another item',
	'Third item',
];

const DEFAULT_STATE = {
	items: DEFAULT_ITEMS,
};

storiesOf('2. Molecules / AppendableList', module)
	.add('with static list', () => (
		<AppendableList
			items={DEFAULT_ITEMS}
			onAddItem={action('Clicked')}
			type={selectV2('List type', CASED_TYPES, LIST_TYPES.CHECK)}
		/>
	))
	.add('with editable list', withState(DEFAULT_STATE)(({ store }) => (
		<AppendableList
			{...store.state}
			onRemoveItem={(index) => store.set({ items: store.state.items.filter((item, i) => index !== i) }) }
			onAddItem={(item) => store.set({ items: store.state.items.concat([item]) })}
			type={selectV2('List type', CASED_TYPES, LIST_TYPES.CHECK)}
			editable
		/>
	)));
