import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScenarioUserCounter, VideoTile, VideoTileProps } from '../../atoms';
import { ScenarioTextInput, ScenarioMobileHeader } from '..';

import './styles.css';
import constants from '../../../constants';
const { common } = constants;
const { modes: { CREATE_MODE, PRACTICE_MODE } } = common;

export default class ScenarioMobileHeaderSection extends Component {

	static propTypes = {
		addText: PropTypes.string,
		buttonPrimaryText: PropTypes.string,
		buttonSecondaryText: PropTypes.string,
		canEditVideo: PropTypes.bool,
		className: PropTypes.string,
		contentEditable: PropTypes.bool,
		count: PropTypes.number,
		counterText: PropTypes.string,
		createMode: PropTypes.bool,
		description: PropTypes.string,
		descriptionPlaceholder: PropTypes.string,
		header: PropTypes.string,
		mode: PropTypes.string,
		namePlaceholder: PropTypes.string,
		onDescriptionChange: PropTypes.func,
		onHeaderChange: PropTypes.func,
		onPrimaryClick: PropTypes.func,
		onSecondaryClick: PropTypes.func,
		practiceMode: PropTypes.bool,
		scenarioType: PropTypes.string,
		showValidationDescriptionError: PropTypes.bool,
		showValidationNameError: PropTypes.bool,
		validationDescriptionError: PropTypes.string,
		validationNameError: PropTypes.string,
		videoTileProps: PropTypes.shape(VideoTileProps),
	}

	render () {
		const {
			className = '',
			contentEditable,
			count,
			counterText,
			description,
			descriptionPlaceholder,
			header,
			mode,
			namePlaceholder,
			onDescriptionChange,
			onHeaderChange,
			videoTileProps,
			showValidationNameError,
			validationNameError,
			validationDescriptionError,
			showValidationDescriptionError,
		} = this.props;

		return (
			<div className={`ScenarioMobileHeaderSection ${className}`}>
				<ScenarioMobileHeader {...this.props} />
				<div className='ScenarioMobileHeaderSection-mainDetails'>
					<div className='ScenarioMobileHeaderSection-image'>
						<VideoTile {...videoTileProps} />
					</div>
					<div className='ScenarioMobileHeaderSection-name'>
						{contentEditable
							? <ScenarioTextInput
								showError={showValidationNameError}
								errorText={validationNameError}
								onChange={onHeaderChange}
								value={header}
								placeholder={namePlaceholder}
								name='name'
								maxLength={128}
								inputClassName
									='ScenarioMobileHeaderSection-input ScenarioMobileHeaderSection-input-name' />
							: header}
					</div>
					<div className='ScenarioMobileHeaderSection-peopleCounter'>
						{mode !== PRACTICE_MODE && mode !== CREATE_MODE && count
							? <ScenarioUserCounter
								className='ScenarioMobileHeaderSection-counter'
								count={count}
								text={counterText} />
							: null}
					</div>
				</div>
				<div className='ScenarioMobileHeaderSection-description'>
					{contentEditable
						? <ScenarioTextInput
							showError={showValidationDescriptionError}
							errorText={validationDescriptionError}
							onChange={onDescriptionChange}
							value={description}
							placeholder={descriptionPlaceholder}
							name='description'
							maxLength={128}
							inputClassName='ScenarioMobileHeaderSection-input' />
						: description}
				</div>
			</div>
		);
	}
}
