import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import ErrorDialog from './ErrorDialog';
import { Button } from '../../atoms';

const errorDialogRef = React.createRef();

storiesOf('1. Atoms / ErrorDialog', module)
	.add('default', () =>
		(<Fragment>
			<ErrorDialog
				header={text('Header', 'Please give the scenario description to save it')}
				textContent={text('Message', 'Required fields: Scenario name, Scenario description.')}
				buttonLabel={text('Button label', 'Try again')}
				ref={errorDialogRef} />
			<Button primary onClick={() => {
				errorDialogRef.current.showModal();
			}}>Open dialog</Button>
		</Fragment>)
	);
