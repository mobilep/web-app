import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import EvaluateDialog from './EvaluateDialog';
import { Dialog, Button } from '../../';
import constants from '../../../constants';
import { evaluationList } from './testData';

const { evaluateDialog, common, inbox } = constants.content.en;

const dialogRef = React.createRef();

storiesOf('2. Molecules / EvaluateDialog', module)
	.add('EvaluateDialog', () => (
		<EvaluateDialog
			fullName={text('fullName', 'Alvin Lane')}
			initials={text('initials', 'AL')}
			skills={text('skills', 'Discovery Questioning Skills')}
			evaluationList={evaluationList}
			text={{ ...evaluateDialog, ...common }}
			scenarioCriterias={inbox.scenarioCriterias}
		/>
	))
	.add('EvaluateDialog inside a dialog', () => (
		<Fragment>
			<Dialog
				ref={dialogRef}
			>
				<EvaluateDialog
					fullName={text('fullName', 'Alvin Lane')}
					initials={text('initials', 'AL')}
					skills={text('skills', 'Discovery Questioning Skills')}
					onCancel={() => dialogRef.current.close()}
					evaluationList={evaluationList}
					text={{ ...evaluateDialog, ...common }}
					scenarioCriterias={inbox.scenarioCriterias}
				/>
			</Dialog>
			<Button primary onClick={() => dialogRef.current.showModal()}>Open dialog</Button>
		</Fragment>
	));

