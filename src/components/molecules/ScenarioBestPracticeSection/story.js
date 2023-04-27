import React from 'react';
import { storiesOf } from '@storybook/react';
import ScenarioBestPracticeSection from './ScenarioBestPracticeSection';
import { cards } from './testData';

storiesOf('2. Molecules / ScenarioBestPracticeSection', module)
	.add('default', () => (
		<div style={{ width: '500px' }}>
			<ScenarioBestPracticeSection
				sectionHeader='BEST PRACTICE'
				cards={cards}
				countSeparator='out of'
			/>
		</div>
	));
