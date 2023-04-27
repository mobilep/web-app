import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, number, selectV2 } from '@storybook/addon-knobs';
import { titleCaseKeys } from '../../../utils';

import AppendableListItem from './AppendableListItem';

import { TYPES } from './constants';

const CASED_TYPES = titleCaseKeys(TYPES);

storiesOf('1. Atoms / AppendableListItem', module)
	.add('with text', () => (
		<AppendableListItem
			type={selectV2('Type', CASED_TYPES, TYPES.STEP)}
			index={number('Index', 0)}
			onClick={action('onClick')}
		>
			{text('Text', 'Add a few steps...')}
		</AppendableListItem>
	));
