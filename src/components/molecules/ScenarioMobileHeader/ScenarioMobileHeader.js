import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MobileHeader } from '..';
import constants from '../../../constants';
import './styles.css';
const { common } = constants;
const { modes: { CREATE_MODE, VIEW_MODE, PRACTICE_MODE, EDIT_MODE }, scenarioTypes: { COMPLETED } } = common;
export default class ScenarioMobileHeader extends Component {

	static propTypes = {
		buttonPrimaryText: PropTypes.string,
		buttonSecondaryText: PropTypes.string,
		canEditVideo: PropTypes.bool,
		draft: PropTypes.bool,
		mobileHeader: PropTypes.string,
		mode: PropTypes.string,
		onDraftClick: PropTypes.func,
		onPrimaryClick: PropTypes.func,
		onScenarioDeSelect: PropTypes.func,
		onSecondaryClick: PropTypes.func,
		saveDraftText: PropTypes.string,
		scenarioType: PropTypes.string,
		updateDate: PropTypes.string,
	}

	getCloseButtonHandler = () => {
		const { mode, onSecondaryClick, onScenarioDeSelect } = this.props;
		if (mode === CREATE_MODE) return onSecondaryClick;
		return onScenarioDeSelect;
	}

	/**
	 * @param {'primary' | 'secondary' | 'draft'} type
	 * @memberof ScenarioMobileHeader
	 */
	getButtonProp (type) {
		const {
			buttonPrimaryText,
			buttonSecondaryText,
			onPrimaryClick,
			onSecondaryClick,
			saveDraftText,
			onDraftClick,
		} = this.props;

		switch (type) {
			case 'primary':
				return { label: buttonPrimaryText, onClick: onPrimaryClick };
			case 'draft':
				return { label: saveDraftText, onClick: onDraftClick };
			case 'secondary':
				return { label: buttonSecondaryText, onClick: onSecondaryClick };
			default:
				return null;
		}
	}

	getButtonsProps () {
		const {	mode, scenarioType, draft, canEditVideo } = this.props;

		const isViewMode = mode === VIEW_MODE;
		const isPracticeMode = mode === PRACTICE_MODE;
		const isEditMode = mode === EDIT_MODE;
		const isCompleted = scenarioType === COMPLETED;

		const primaryBtnProp = this.getButtonProp('primary');
		const secondaryBtnProp = this.getButtonProp('secondary');
		const draftBtnProp = this.getButtonProp('draft');

		if (isViewMode && (isCompleted || !canEditVideo)) return [secondaryBtnProp];
		if (isViewMode)	return [primaryBtnProp,	secondaryBtnProp];
		if (isEditMode && !draft) return [primaryBtnProp,	secondaryBtnProp];
		if (isEditMode && draft) return [primaryBtnProp,	draftBtnProp, secondaryBtnProp];
		if (isPracticeMode || isCompleted)	return [primaryBtnProp];

		return [primaryBtnProp,	draftBtnProp];
	}

	render () {
		const {
			mode,
			mobileHeader,
			updateDate,
		} = this.props;

		const isCreateMode = mode === CREATE_MODE;
		const buttonProps = this.getButtonsProps();
		return (
			<MobileHeader
				crossIconType={isCreateMode}
				title={mobileHeader}
				closeButtonHandler={this.getCloseButtonHandler()}
				buttonsProps={buttonProps}
				description={mode === EDIT_MODE}
				descriptionText={updateDate}
			/>
		);
	}

}
