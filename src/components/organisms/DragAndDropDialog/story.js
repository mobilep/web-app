import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import DragAndDropDialog from './DragAndDropDialog';
import { text, boolean } from '@storybook/addon-knobs';

import { Button } from '../../index';

const dialogRef = React.createRef();

/* eslint-disable max-len */
storiesOf('3. Organisms / DragAndDropDialog', module)
	.add('DragAndDropDialog', () =>
		(<Fragment>
			<DragAndDropDialog
				fileType='video'
				ref={dialogRef}
				demo={boolean('Demo', true)}
				authorization={text('Access token',
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YjRjNWY2NmQ2MmI3NTE3YjljYzFiZTkiLCJpYXQiOjE1MzE3MzE4MjMsImV4cCI6MTU0NzI4MzgyM30.RgIYI19W0y4fe8vERudz9OpsXnFBfd0JpdYDWVl4ymg'
				)}
			/>
			<Button primary onClick={() => dialogRef.current.showModal()}>Open dialog</Button>
		</Fragment>
		)
	);
/* eslint-enable max-len */
