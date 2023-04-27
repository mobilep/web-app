import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs';
import BestPracticeCard from './BestPracticeCard';

storiesOf('2. Molecules / BestPracticeCard', module)
	.add('default', () => (
		<div style={{ width: '500px' }}>
			<BestPracticeCard
				header={text('Header', 'Discovery Questioning Skillsquestion.')}
				description={
					text('Description', 'Practice asking discovery questions when meeting someone for the first time.')
				}
				thumbnailUrl={text('Thumbnail', 'http://via.placeholder.com/350x150/00423b')}
				index={number('Index', 1)}
				separator={text('Separator', 'out of')}
				count={number('Count', 5)}
				createOrEditMode={boolean('Create/edit mode', false)}
				addText='Add video' />
		</div>
	));
