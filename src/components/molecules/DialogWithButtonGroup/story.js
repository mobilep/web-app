import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';

import DialogWithButtonGroup from './';
import { Button } from '../../atoms';

const dialogRef = React.createRef();

storiesOf('2. Molecules / DialogWithButtonGroup', module)
	.add('default', () => (
		<Fragment>
			<DialogWithButtonGroup
				actionButtonLabel={text('Action button label', 'Action')}
				cancelButtonLabel={text('Cancel button label', 'Cancel')}
				ref={dialogRef}
			>
				<h2>Dialog content is here.</h2>
			</DialogWithButtonGroup>
			<Button primary onClick={() => dialogRef.current.showModal()}>Open dialog</Button>
		</Fragment>
	));

