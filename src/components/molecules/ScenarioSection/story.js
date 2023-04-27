import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, number } from '@storybook/addon-knobs/react';
import ScenarioSection from './ScenarioSection';
import { AppendableList } from '../../molecules';

const DEFAULT_ITEMS = [
	{ content: 'Some item' },
	{ content: 'Another item' },
	{ content: 'Third item' },
];

storiesOf('2. Molecules / ScenarioSection', module)
	.add('default',
		() => (<div>
			<ScenarioSection header={text('Text', 'steps')} counter={number('Counter', 1)}>
				{boolean('List', false) && <AppendableList
					items={DEFAULT_ITEMS}
					onAddItem={action('Clicked')}
					type='step' />}
			</ScenarioSection>
		</div>));
