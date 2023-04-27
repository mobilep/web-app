import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import Dialog from './Dialog';
import Button from '../Button';

const dialogRef = React.createRef();

storiesOf('1. Atoms / Dialog', module)
	.add('with text', () =>
		(<Fragment>
			<Dialog ref={dialogRef}>
				<div style={{ marginTop: '20px' }}>{text('Text', 'Hello! This is dialog component! Enjoy!')}</div>
			</Dialog>
			<Button primary onClick={() => dialogRef.current.showModal()}>Open dialog</Button>
		</Fragment>
		)
	);
