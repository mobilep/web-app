import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withLanguageContext } from '../../../utils/LanguageContext';
import { Button } from '../../atoms';
import './styles.css';

import constants from '../../../constants';
const { common } = constants;
const { modes: { EDIT_MODE, CREATE_MODE, PRACTICE_MODE, VIEW_MODE }, scenarioTypes: { COMPLETED } } = common;

class ScenarioControls extends Component {
	static propTypes = {
		buttonPrimaryText: PropTypes.string,
		buttonSecondaryText: PropTypes.string,
		canEditVideo: PropTypes.bool,
		content: PropTypes.object,
		draft: PropTypes.bool,
		mode: PropTypes.string,
		onDraftClick: PropTypes.func,
		onPrimaryClick: PropTypes.func,
		onSecondaryClick: PropTypes.func,
		scenarioType: PropTypes.string,
		updateDate: PropTypes.string,
	}

	getControlsAvailabilityConfig () {
		const { draft, mode, scenarioType, canEditVideo } = this.props;

		return {
			secondaryActionAvailable: mode !== PRACTICE_MODE,
			draftActionAvailable: (mode === EDIT_MODE && draft) || (mode === CREATE_MODE),
			primaryActionAvailable: (scenarioType !== COMPLETED || mode === PRACTICE_MODE) &&
				(mode !== VIEW_MODE || canEditVideo),
		};
	}

	getStateLabel () {
		const { mode, content } = this.props;
		const { scenarios } = content;

		return mode === CREATE_MODE
			? scenarios.newScenarioInstructions
			: scenarios.instructions;
	}

	render () {
		const {
			content, buttonPrimaryText,	buttonSecondaryText, updateDate, mode,
			onDraftClick, onSecondaryClick, onPrimaryClick,
		} = this.props;
		const { scenarios } = content;
		const {
			draftActionAvailable, primaryActionAvailable, secondaryActionAvailable,
		} = this.getControlsAvailabilityConfig();

		return (
			<div className='ScenarioControls'>
				<div className='ScenarioControls-stateLabel'>
					{this.getStateLabel()}
					{mode === EDIT_MODE && ` / ${updateDate} ` }
				</div>

				{/* SECONDARY BUTTON */}
				{secondaryActionAvailable &&
					<Button
						className='Button-text ScenarioControls-btn'
						onClick={onSecondaryClick}
					>
						{buttonSecondaryText}
					</Button>
				}

				{/* DRAFT BUTTON */}
				{draftActionAvailable &&
					<Button
						onClick={onDraftClick}
						className='Button-text ScenarioControls-btn'
					>
						{scenarios.saveDraftButton}
					</Button>
				}

				{/* PRIMARY BUTTON */}
				{primaryActionAvailable &&
					<Button
						onClick={onPrimaryClick}
						className='Button-text ScenarioControls-btn'
					>
						{buttonPrimaryText}
					</Button>
				}
			</div>
		);
	}
}

export default withLanguageContext(ScenarioControls);
