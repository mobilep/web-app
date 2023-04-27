import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	AppendableList,
	AppendableCriteriaList,
	ScenarioPeopleSection,
	ScenarioBestPracticeSection,
	ScenarioHeaderSection,
	ScenarioSection,
	ViewLoader,
	ScenarioDueDatePicker,
	ScenarioControls,
} from '../../';
import constants from '../../../constants';
import './styles.css';
import { LanguageContext } from '../../../utils';

const { common } = constants;
const { modes: { EDIT_MODE, CREATE_MODE } } = common;
const { Consumer: LanguageConsumer } = LanguageContext;

export default class ScenarioContent extends Component {

	static propTypes = {
		authorDetails: PropTypes.object,
		availableCriteriaItems: PropTypes.array,
		bestPracticeCards: PropTypes.array,
		canEditVideo: PropTypes.bool,
		content: PropTypes.object,
		criterias: PropTypes.array,
		currentScenarioContentFetching: PropTypes.bool,
		defaultDueDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
		description: PropTypes.string,
		draft: PropTypes.bool,
		dueDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
		fallBackVideoUrl: PropTypes.string,
		headerControllsHandlers: PropTypes.object,
		inboxData: PropTypes.array,
		mode: PropTypes.string,
		name: PropTypes.string,
		onBestPracticeRemove: PropTypes.func,
		onBestPracticeVideoAdd: PropTypes.func,
		onCriteriaCreate: PropTypes.func,
		onCriteriaRemove: PropTypes.func,
		onCriteriaSearch: PropTypes.func,
		onCriteriaSelect: PropTypes.func,
		onCurrentStepValueChange: PropTypes.func,
		onDescriptionChange: PropTypes.func,
		onDraftClick: PropTypes.func,
		onDueDateChange: PropTypes.func,
		onGroupSelect: PropTypes.func,
		onNameChange: PropTypes.func,
		onScenarioDeSelect: PropTypes.func,
		onStepAdd: PropTypes.func,
		onStepRemove: PropTypes.func,
		onUserRemove: PropTypes.func,
		onUserSearch: PropTypes.func,
		onUserSelect: PropTypes.func,
		onVideoChange: PropTypes.func,
		scenarioHeader: PropTypes.func,
		searchCriteriaItems: PropTypes.array,
		searchUserItems: PropTypes.array,
		selectedUsersCounter: PropTypes.number,
		showValidationCriteriasError: PropTypes.bool,
		showValidationDescriptionError: PropTypes.bool,
		showValidationNameError: PropTypes.bool,
		showValidationStepsError: PropTypes.bool,
		steps: PropTypes.array,
		teamData: PropTypes.object,
		type: PropTypes.string,
		updateDate: PropTypes.string,
		userItems: PropTypes.array,
		userSearchFetching: PropTypes.bool,
		validationCriteriasError: PropTypes.string,
		validationDescriptionError: PropTypes.string,
		validationNameError: PropTypes.string,
		validationStepsError: PropTypes.string,
		videoId: PropTypes.string,
		videoState: PropTypes.string,
		videoThumbnailUrl: PropTypes.string,
		videoUrl: PropTypes.string,
	}

	isContentEditable ({ mode } = this.props) {
		return mode === EDIT_MODE || mode === CREATE_MODE;
	}

	shouldRenderBestPracticeSection ({ bestPracticeCards = [] } = this.props) {
		return this.isContentEditable() || !!bestPracticeCards.length;
	}

	render () {
		const {
			authorDetails,
			availableCriteriaItems,
			bestPracticeCards,
			content,
			criterias,
			currentScenarioContentFetching,
			description,
			draft,
			fallBackVideoUrl,
			headerControllsHandlers,
			inboxData,
			mode,
			name,
			onBestPracticeRemove,
			onBestPracticeVideoAdd,
			onCriteriaCreate,
			onCriteriaRemove,
			onCriteriaSearch,
			onCriteriaSelect,
			onCurrentStepValueChange,
			onDueDateChange,
			onDescriptionChange,
			onDraftClick,
			onGroupSelect,
			onNameChange,
			onScenarioDeSelect,
			onStepAdd,
			onStepRemove,
			onUserRemove,
			onUserSearch,
			onUserSelect,
			onVideoChange,
			searchUserItems,
			selectedUsersCounter,
			showValidationCriteriasError,
			showValidationDescriptionError,
			showValidationNameError,
			showValidationStepsError,
			steps,
			teamData = {},
			type,
			updateDate,
			userItems,
			userSearchFetching,
			validationCriteriasError,
			validationDescriptionError,
			validationNameError,
			validationStepsError,
			videoId,
			videoState,
			videoThumbnailUrl,
			videoUrl,
			dueDate,
			defaultDueDate,
			canEditVideo,
		} = this.props;
		if (currentScenarioContentFetching) return <ViewLoader />;
		const isEditable = this.isContentEditable();

		return (
			<LanguageConsumer>
				{({ common, scenarios, _contextSettings: { dateFnsLanguageCode } }) => (
					<div className='Scenarios-content'>
						<ScenarioControls
							{...content.headerSection[mode]}
							{...headerControllsHandlers}
							onDraftClick={onDraftClick}
							mode={mode}
							draft={draft}
							scenarioType={type}
							updateDate={updateDate}
							canEditVideo={canEditVideo}
						/>

						<div className='Scenarios-body'>
							<ScenarioHeaderSection
								addVideoText={common.addVideo}
								changeVideoText={common.changeVideo}
								authorDetails={authorDetails || {}}
								showValidationNameError={showValidationNameError}
								validationNameError={validationNameError}
								scenarioType={type}
								showValidationDescriptionError={showValidationDescriptionError}
								validationDescriptionError={validationDescriptionError}
								mode={mode}
								canEditVideo={canEditVideo}
								count={selectedUsersCounter}
								header={name}
								description={description}
								thumbnailUrl={videoThumbnailUrl}
								videoState={videoState}
								videoUrl={videoUrl}
								videoId={videoId}
								fallBackVideoUrl={fallBackVideoUrl}
								onHeaderChange={onNameChange}
								onDescriptionChange={onDescriptionChange}
								onScenarioDeSelect={onScenarioDeSelect}
								onVideoChange={onVideoChange}
								{...content.headerSection[mode]}
								{...headerControllsHandlers}
								mobileHeader={scenarios.scenario}
								draft={draft}
								saveDraftText={scenarios.saveDraftButton}
								onDraftClick={onDraftClick}
								updateDate={updateDate}
							/>
							<div className='Scenarios-sectionsBlock'>
								{/* STEPS */}
								<ScenarioSection
									showValidationError={showValidationStepsError}
									errorText={validationStepsError}
									className='Scenarios-steps'
									header={content.steps}>
									<AppendableList
										editable={isEditable}
										placeholder={content.addSteps}
										onChangeItem={onCurrentStepValueChange}
										items={steps}
										onAddItem={onStepAdd}
										type={'step'}
										onRemoveItem={onStepRemove}
									/>
									{isEditable && !steps.length &&
										<div className='Scenarios-sectionExample'>{scenarios.stepExample}</div>
									}
								</ScenarioSection>

								{/* PEOPLE */}
								<ScenarioSection
									className='Scenarios-people'
									header={content.peopleSection.peoplePracticing} counter={selectedUsersCounter}>
									<ScenarioPeopleSection
										userSearchFetching={userSearchFetching}
										editable={isEditable}
										userItems={userItems}
										searchUserItems={searchUserItems}
										onUserSelect={onUserSelect}
										onGroupSelect={onGroupSelect}
										onUserRemove={onUserRemove}
										onUserSearch={onUserSearch}
										groupList={teamData.teamList || []}
										inboxData={inboxData}
									/>
								</ScenarioSection>
								<div className='Scenarios-peopleDropdown' />

								{/* CRITERIA */}
								<ScenarioSection
									showValidationError={showValidationCriteriasError}
									errorText={validationCriteriasError}
									className='Scenarios-criterias'
									header={content.evaluationCriteria}>
									<AppendableCriteriaList
										editable={isEditable}
										content={content.criteriaSection}
										criteriaItems={criterias}
										onCriteriaRemove={onCriteriaRemove}
										onCriteriaCreate={onCriteriaCreate}
										availableCriteriaItems={availableCriteriaItems}
										onCriteriaSelect={onCriteriaSelect}
										onCriteriaSearch={onCriteriaSearch}
									/>
									{isEditable && !criterias.length &&
										<div className='Scenarios-sectionExample'>
											{scenarios.evaluationCriteriaExample}
										</div>
									}
								</ScenarioSection>

								{/* BEST PRACTICES */}
								{this.shouldRenderBestPracticeSection() &&
									<ScenarioBestPracticeSection
										{...{ [mode]: true }}
										onVideoAdd={onBestPracticeVideoAdd}
										onVideoRemove={onBestPracticeRemove}
										cards={bestPracticeCards}
										className='Scenarios-bestPractice'
									/>}

								{/* DUE DATE */}
								{(dueDate || isEditable) &&
									<ScenarioSection
										className='Scenarios-dueDate'
										header={content.dueDate}
									>
										<ScenarioDueDatePicker
											selectedDate={dueDate || defaultDueDate}
											editable={isEditable}
											locale={dateFnsLanguageCode}
											onDateChange={onDueDateChange}
										/>
									</ScenarioSection>
								}
							</div>
						</div>
					</div>
				)}
			</LanguageConsumer>
		);
	}

}
