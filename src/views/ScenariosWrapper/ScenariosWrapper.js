import React, { createRef, Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { EMPTY, Subject } from 'rxjs';
import { tap, debounceTime, takeWhile, filter, switchMap, map, catchError } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import classNames from 'classnames';
import { Switch, Route, withRouter } from 'react-router-dom';
import { format, isToday, addDays, endOfDay } from 'date-fns';
import { LanguageContext, httpApi } from '../../utils';
import constants from '../../constants';

import Conversation from '../../containers/Conversation';

import {
	Button,
	Dialog,
	ErrorSubmit,
	SecondaryNavigation,
	ScenarioContent,
	ScenarioEmptyArea,
	CoachPracticeChats,
	ClosablePanel,
	SendReminderPage,
} from '../../components';

import './styles.css';
import TIME from '../../constants/time';
import { ScenarioCardList } from '../../components/organisms';
import { matchId } from '../../helpers/arrayHelpers';

const { Consumer: LanguageConsumer } = LanguageContext;
const { routes, common } = constants;
const {
	modes: { EDIT_MODE, CREATE_MODE, PRACTICE_MODE, VIEW_MODE },
	api,
	scenarioFields,
	optionalScenarioFields,
	chatSubType,
} = common;
const {
	CRITERIAS,
	STEPS,
	SELECTED_USERS,
	BEST_PRACTICE_VIDEOS,
	SCENARIO_NAME,
	SCENARIO_DESCRIPTION,
	TYPE,
	VIDEO_ID,
	DUE_DATE,
	CAN_EDIT_VIDEO,
} = scenarioFields;

const initialState = {
	currentScenario: {},
	videoThumbnailUrl: '',
	currentScanarioId: '',
	availableUserItems: [],
	currentStepValue: '',
	cancelMode: false,
	[VIDEO_ID]: '',
	[CRITERIAS]: [],
	[STEPS]: [],
	[SELECTED_USERS]: [],
	[SCENARIO_NAME]: '',
	[SCENARIO_DESCRIPTION]: '',
	[BEST_PRACTICE_VIDEOS]: [],
	[TYPE]: '',
	[DUE_DATE]: +addDays(endOfDay(+new Date()), TIME.SCENARIO_DEFAULT_DUE_DAYS),
};

class ScenariosWrapper extends Component {

	constructor (props) {
		super(props);
		const { selectedScenarioMode, selectedScenario } = this.props;
		if (selectedScenarioMode === EDIT_MODE) {
			const currentScenario = this.mapScenarioData(selectedScenario);
			this.state = { ...currentScenario };
		} else {
			this.state = { ...initialState };
		}

		this.userSearchStream$ = new Subject();
		this.userSearchStream$
			.pipe(
				filter((query) => query.trim().length),
				tap(() => this.setState({ userSearchFetching: true, availableUserItems: [] })),
				debounceTime(150),
				switchMap((query) => {
					const { _company: companyId, accessToken: Authorization } = this.props.userInfo;
					return fromPromise(
						httpApi.get(`${api}/company/${companyId}/user?filter=${query}`, { Authorization })
					).pipe(catchError((error) => of({ error })));
				}),
				switchMap((res) => {
					if (res.error) return of({ error: res.error });
					return fromPromise(res.json()).pipe(catchError((error) => of({ error })));
				}),
				switchMap((res) => {
					this.setState({ userSearchFetching: false });
					if (res.error) {
						return EMPTY;
					}
					return of(res);
				}),
				map((response) => {
					const { _id } = this.props.userInfo;
					const users = ScenariosWrapper.mapUsersItems(response)
						.filter(({ id }) => !this.state[SELECTED_USERS]
							.some((user) => user.id === id))
						.filter(({ id }) => id !== _id);
					return users;
				}),
				takeWhile(() => !this.userSearchStream$.isStopped)
			)
			.subscribe((users) => this.setState({ availableUserItems: users }));

	}

	componentWillUnmount () {
		this.userSearchStream$.unsubscribe();
	}

	static propTypes = {
		activeInbox: PropTypes.object,
		createdScenario: PropTypes.object,
		criteriaData: PropTypes.object,
		currentScenarioContentFetching: PropTypes.bool,
		headerControllsHandlers: PropTypes.object,
		id: PropTypes.string,
		inboxData: PropTypes.array,
		match: PropTypes.object,
		mode: PropTypes.string,
		onCriteriaCreate: PropTypes.func,
		onReminderClose: PropTypes.func,
		onScenarioDeSelect: PropTypes.func,
		onScenarioSelect: PropTypes.func,
		onVideoUpload: PropTypes.func,
		scenarioListError: PropTypes.bool,
		scenarios: PropTypes.array,
		scenariosChats: PropTypes.object,
		selectedScenario: PropTypes.object,
		selectedScenarioId: PropTypes.string,
		selectedScenarioMode: PropTypes.string,
		teamData: PropTypes.object,
		userInfo: PropTypes.object,
		videosInfo: PropTypes.object,
	}

	validationDialogRef = createRef();

	static mapUsersItems (users) {
		return users.map((user) => {
			return {
				id: user._id,
				initials: user.firstName.charAt(0) + user.lastName.charAt(0),
				fullName: `${user.firstName} ${user.lastName}`,
				imgUrl: user.avatar_sm,
				firstName: user.firstName,
				lastName: user.lastName,
			};
		});
	}

	getSecondaryNavigationMobileClassName (selectedScenarioId, scenarioData) {
		return classNames({
			'ScenariosWrapper-secondaryNavigation': true,
			'ScenariosWrapper-NavigationMobileHidden': selectedScenarioId ||
				scenarioData ||
				this.state.coachPanelScenarioId,
		});
	}

	getClassName ({ selectedScenarioId, currentScenarioContentFetching } = this.props) {
		return classNames({
			'ScenariosWrapper-content-currentScenarioContentFetching': currentScenarioContentFetching,
			'ScenariosWrapper-content': true,
			'Scenarios-content-mobileHidden': !selectedScenarioId,
		});
	}

	mapBestPracticeExamples (examples, videosInfo = this.props.videosInfo) {
		return examples.map((example) => {
			const video = videosInfo[example.videoId];
			return {
				...example,
				video,
			};
		});
	}

	mapScenarioData (currentScenario) {
		if (!currentScenario) return;
		const { video } = currentScenario;
		return {
			authorDetails: currentScenario.authorDetails,
			videoState: video.state,
			videoUrl: video.url,
			fallBackVideoUrl: video.fallBackUrl,
			videoThumbnailUrl: video.thumbnailUrl,
			availableUserItems: [],
			[VIDEO_ID]: currentScenario.videoId,
			[SCENARIO_NAME]: currentScenario.name,
			[SCENARIO_DESCRIPTION]: currentScenario.info,
			[BEST_PRACTICE_VIDEOS]: currentScenario.examples,
			[STEPS]: currentScenario.steps,
			[CRITERIAS]: currentScenario._criterias,
			[SELECTED_USERS]: ScenariosWrapper.mapUsersItems(currentScenario._users),
			[TYPE]: currentScenario.type,
			[DUE_DATE]: +new Date(currentScenario[DUE_DATE]),
			[CAN_EDIT_VIDEO]: !currentScenario.hasOwnProperty(CAN_EDIT_VIDEO) || currentScenario[CAN_EDIT_VIDEO],
		};
	}

	mapVideoData (videoData) {
		return {
			videoUrl: videoData.video.dashList,
			fallBackVideoUrl: videoData.video.playList,
			videoThumbnailUrl: videoData.video.thumb,
			state: videoData,
		};
	}

	handleUserSearch = (query) =>
		this.userSearchStream$.next(query)

	handleCriteriaCreate = async (name) => {
		const { onCriteriaCreate, userInfo } = this.props;
		const { _company: companyId, accessToken: Authorization } = userInfo;
		const body = { name };
		const res = await httpApi.post(`${api}/company/${companyId}/criteria`, body, { Authorization });
		if (res.status === 200) {
			const newCriteria = await res.json();
			this.handleItemAdd(
				CRITERIAS,
				() => onCriteriaCreate(newCriteria)
			)(newCriteria);
		}
	}

	getPracticeInboxId = async () => {
		const { selectedScenarioId, userInfo } = this.props;
		const { _company: companyId, accessToken: Authorization } = userInfo;
		const res = await httpApi.get(
			`${api}/company/${companyId}/scenario/${selectedScenarioId}/practice`,
			{ Authorization }
		);
		return await res.json();
	}

	handleUserRemove = (userId) => {
		const selectedUsers = this.state[SELECTED_USERS]
			.filter(({ id }) => id !== userId);
		this.setState({ [SELECTED_USERS]: selectedUsers });
	}

	handleGroupSelect = (selected, groupUsers) => {
		let selectedUsers = [];
		const filteredUsers = this.state[SELECTED_USERS].filter(({ id }) =>
			!groupUsers.some((user) => user._id === id)
		);
		if (!selected) {
			selectedUsers = [...filteredUsers, ...ScenariosWrapper.mapUsersItems(groupUsers)];
		} else {
			selectedUsers = filteredUsers;
		}
		this.setState({ [SELECTED_USERS]: [...selectedUsers] });
	}

	handleItemAdd = (itemsName, cb = () => {}) =>
		(item) => {
			this.setState({ [itemsName]: [...this.state[itemsName], item] }, cb);
		}

	handleItemChange = (itemName, cb = () => {}) =>
		(value) =>
			this.setState({ [itemName]: value }, cb);

	handleItemRemove = (itemsName, cb = () => {}) =>
		(itemIndex) => {
			const items = this.state[itemsName]
				.filter((item, index) => itemIndex !== index);
			this.setState({ [itemsName]: items }, cb);
		}

	static getDerivedStateFromProps (props, state) {
		if (props.selectedScenarioMode === EDIT_MODE) {
			const { selectedScenario } = props;
			if (
				selectedScenario.video.state !== state.videoState &&
				selectedScenario.video.videoId === state.videoId
			) {
				return {
					...state,
					videoState: selectedScenario.video.state,
				};
			}
		}
		return null;
	}

	componentDidUpdate (prevProps) {
		const { selectedScenarioMode, selectedScenario, createdScenario, onScenarioSelect, match } = this.props;

		if (selectedScenarioMode !== prevProps.selectedScenarioMode) {
			if (selectedScenarioMode === EDIT_MODE) {
				const currentScenario = this.mapScenarioData(selectedScenario);
				// eslint-disable-next-line react/no-did-update-set-state
				this.setState({ ...currentScenario });
			}
			if (selectedScenarioMode === CREATE_MODE) {
				// eslint-disable-next-line react/no-did-update-set-state
				this.setState({ ...initialState });
			}
		}
		if (createdScenario && !prevProps.createdScenario) {
			onScenarioSelect(createdScenario._id);
		}
		if (createdScenario && prevProps.createdScenario && createdScenario._id !== prevProps.createdScenario._id) {
			onScenarioSelect(createdScenario._id);
		}

		if (match && match.url !== prevProps.match.url) {
			this.onRouteChanged();
		}
	}

	onRouteChanged () {
		this.handlePanelClose();
	}

	processScenarioDataForSubmit (type = 'current', state = this.state, requiredVideo = true) {
		const { currentStepValue } = state;
		const criteriaIds = state[CRITERIAS]
			.map(({ _id }) => _id);

		const userIds = state[SELECTED_USERS]
			.map(({ id }) => id);

		const bestPracticeVideos = state[BEST_PRACTICE_VIDEOS]
			.map(({ videoId, name, duration }) => ({ videoId, name, duration }));

		const steps = [...state[STEPS]];

		if (currentStepValue && currentStepValue.trim()) {
			steps.push(currentStepValue);
		}

		let scenarioData = {
			type,
			[STEPS]: steps,
			[SCENARIO_NAME]: state[SCENARIO_NAME],
			[SCENARIO_DESCRIPTION]: state[SCENARIO_DESCRIPTION],
			[BEST_PRACTICE_VIDEOS]: bestPracticeVideos,
			[CRITERIAS]: criteriaIds,
			[SELECTED_USERS]: userIds,
			[DUE_DATE]: state[DUE_DATE] || initialState[DUE_DATE],
		};

		if (state[VIDEO_ID] || requiredVideo) {
			scenarioData = {
				...scenarioData,
				[VIDEO_ID]: state[VIDEO_ID],
			};
		}

		return scenarioData;
	}

	getInvalidFields (scenarioData) {
		return Object.keys(scenarioData)
			.filter((field) => {
				const isEmpty = !scenarioData[field] || scenarioData[field].length === 0;
				const isRequired = !optionalScenarioFields.includes(field);
				return isEmpty && isRequired;
			})
			.reduce((prev, current) => {
				prev[current] = true;
				return prev;
			}, {});
	}

	getValidationMessage (fieldsDescription, invalidFields = {}) {
		return Object.keys(invalidFields).reduce((acc, current) => {
			if (fieldsDescription[current]) {
				acc.push(fieldsDescription[current].name);
			}
			return acc;
		}, []).join(', ');

	}

	handleCloseValidationDialog = () =>
		this.validationDialogRef.current.close();

	getHeaderControllsHandlers = () => {
		const { headerControllsHandlers, selectedScenarioMode, selectedScenarioId } = this.props;
		const { onPrimaryClick, onSecondaryClick } = headerControllsHandlers;
		if (selectedScenarioMode === CREATE_MODE || selectedScenarioMode === EDIT_MODE) {
			const handlePrimaryClick = () => {
				const scenarioData = this.processScenarioDataForSubmit();
				this.setState({ currentStepValue: ' ' });
				const invalidFields = this.getInvalidFields(scenarioData);
				const isValid = Object.keys(invalidFields).length === 0;
				if (!isValid) {
					return this.setState({ showValidationError: true, cancelMode: false },
						() => this.validationDialogRef.current.showModal());
				}
				if (selectedScenarioMode === CREATE_MODE) {
					onPrimaryClick(scenarioData);
				} else {
					onPrimaryClick(selectedScenarioId, scenarioData);
				}
			};

			const handleSecondaryClick = () => {
				if (selectedScenarioMode === EDIT_MODE) {
					return onSecondaryClick();
				} else {
					return this.setState({ cancelMode: true }, this.validationDialogRef.current.showModal());
				}
			};

			return {
				onPrimaryClick: handlePrimaryClick,
				onSecondaryClick: handleSecondaryClick,
			};
		}
		if (selectedScenarioMode === VIEW_MODE) {
			const handleSecondaryClick = () => {
				return this.validationDialogRef.current.showModal();
			};
			return {
				onPrimaryClick,
				onSecondaryClick: handleSecondaryClick,
			};
		}
		if (selectedScenarioMode === PRACTICE_MODE) {
			const handlePrimaryClick = async () => {
				try {
					const [practiceInfo = {}] = await this.getPracticeInboxId();
					const practiceInboxId = practiceInfo._id;
					onPrimaryClick(practiceInboxId);
				} catch (error) {
					/* eslint-disable no-alert */
					alert(error);
				}
			};
			return {
				onPrimaryClick: handlePrimaryClick,
				onSecondaryClick,
			};
		}
		return headerControllsHandlers;
	}

	handleDraftScenarioCreation = () => {
		const { headerControllsHandlers, selectedScenarioId } = this.props;
		const { onPrimaryClick } = headerControllsHandlers;
		const scenarioData = this.processScenarioDataForSubmit('draft', this.state, false);
		this.setState({ currentStepValue: '' });
		scenarioData.type = 'draft';
		if (selectedScenarioId && selectedScenarioId !== 'new') {
			onPrimaryClick(selectedScenarioId, scenarioData);
		} else {
			onPrimaryClick(scenarioData);
		}
		this.validationDialogRef.current.close();
	}

	handleCancelScenarioCreation = () => {
		this.props.onScenarioDeSelect();
		this.validationDialogRef.current.close();
	}

	getDialogClassName = (viewMode) => classNames({
		'ScenariosWrapper-validationDialog': true,
		'ScenarioWrapper-delete-dialog': viewMode,
	});

	handleDeleteClick = () => {
		const { headerControllsHandlers } = this.props;
		headerControllsHandlers.onSecondaryClick();
		this.validationDialogRef.current.close();
	};

	handleCancelScenarioDeletion = () => {
		this.validationDialogRef.current.close();
	}

	handleChangeCurrentStepValue = (currentStepValue) => {
		this.setState({ currentStepValue });
	}

	handleDueDateChange = (dueDate) => {
		this.setState({ dueDate });
	}

	renderDialog (scenarios, invalidFields) {
		const { selectedScenarioMode } = this.props;
		const { cancelMode } = this.state;
		const { validation:
			{
				fields,
				title,
				buttonLabel,
				saveDraftMessage,
				deleteUnsaved,
				saveDraftButton,
				deleteChangesButton,
			},
		} = scenarios;
		const viewMode = selectedScenarioMode === VIEW_MODE;

		return (<Dialog
			className={this.getDialogClassName(viewMode)}
			ref={this.validationDialogRef}>
			{!viewMode
				? <ErrorSubmit
					className='ScenariosWrapper-error-submit'
					{...scenarios.validation}
					onButtonClick={cancelMode ? this.handleCancelScenarioCreation : this.handleCloseValidationDialog}
					message={cancelMode ? saveDraftMessage : this.getValidationMessage(fields, invalidFields)}
					title={cancelMode ? deleteUnsaved : title}
					onSecondaryButtonClick={cancelMode ? this.handleDraftScenarioCreation : () => {}}
					secondaryButtonLabel={saveDraftButton}
					buttonLabel={cancelMode ? deleteChangesButton : buttonLabel}
				/>
				: <Fragment><div className='ScenariosWrapper-dialog-content'>{scenarios.deleteScenario}</div>
					<div className='ScenariosWrapper-dialog-buttonGroup'>
						<Button color='grey' onClick={this.handleCancelScenarioDeletion}>{scenarios.cancel}</Button>
						<Button onClick={this.handleDeleteClick}>{scenarios.delete}</Button>
					</div>
				</Fragment>}
		</Dialog>);
	}

	sortUsers = (prevUser, user) => {
		if (prevUser.firstName.toLowerCase() > user.firstName.toLowerCase()) {
			return 1;
		}
		if (prevUser.firstName.toLowerCase() < user.firstName.toLowerCase()) {
			return -1;
		}
		return 0;
	}

	getDateString (savedText, date) {
		const timestamp = +new Date(date);

		if (isToday(timestamp)) {
			return `${savedText} ${format(timestamp, 'HH:mm')}`;
		}
		return `${savedText} ${format(timestamp, 'dd/MM/yyyy')}`;
	}

	handlePanelOpen = (coachPanelScenarioId) => {
		this.setState({ coachPanelScenarioId });
	}

	handlePanelClose = () => {
		this.setState({ coachPanelScenarioId: null });
	}

	getCoachScenarioIdToHighlight () {
		const { activeInbox } = this.props;

		if (activeInbox && activeInbox._scenario && !activeInbox._moderator) {
			return activeInbox._scenario._id;
		}
	}

	render () {
		const {
			onScenarioDeSelect,
			onReminderClose,
			scenarios: list,
			selectedScenario,
			selectedScenarioId,
			selectedScenarioMode,
			criteriaData,
			teamData,
			inboxData,
			videosInfo,
			currentScenarioContentFetching,
			scenariosChats,
			activeInbox,
		} = this.props;
		const isContentEditable = selectedScenarioMode === CREATE_MODE || selectedScenarioMode === EDIT_MODE;
		const scenarioData = isContentEditable ? this.state : this.mapScenarioData(selectedScenario);
		const coachPanelScenario = list.find(matchId(this.state.coachPanelScenarioId));
		if (isContentEditable) {
			scenarioData[BEST_PRACTICE_VIDEOS] = this.mapBestPracticeExamples(scenarioData[BEST_PRACTICE_VIDEOS]);
		}

		const secondaryNavigationClassName = this.getSecondaryNavigationMobileClassName(
			selectedScenarioId,
			scenarioData
		);
		const className = this.getClassName();
		const viewMode = selectedScenarioMode === VIEW_MODE;
		const users = scenarioData && scenarioData[SELECTED_USERS].sort(this.sortUsers);
		const videoId = scenarioData && scenarioData[VIDEO_ID];
		const videoData = videosInfo[videoId] || {};

		let invalidFields = {};

		if (this.state.showValidationError && isContentEditable) {
			const scenarioData = this.processScenarioDataForSubmit();
			invalidFields = this.getInvalidFields(scenarioData);
		}

		const coachScenarioIdToHighlight = this.getCoachScenarioIdToHighlight();

		return (
			<LanguageConsumer>
				{({ common, scenarios }) => (
					<Fragment>
						<SecondaryNavigation
							className={secondaryNavigationClassName}
							headerText={scenarios.myScenarios}
							headerClassName='Scenarios-mobile-header'
							actionButton={
								<Button	to={routes.SCENARIOS_NEW}	className='Button-text'>
									{common.new}
								</Button>}
						>
							<ScenarioCardList
								scenarios={list}
								activeCoachPanelId={this.state.coachPanelScenarioId}
								activePracticeScenarioId={coachScenarioIdToHighlight}
								onCoachPanelOpen={this.handlePanelOpen}
								onCoachPanelClose={this.handlePanelClose}
							/>
						</SecondaryNavigation>

						{this.renderDialog(scenarios, invalidFields)}

						{/* MAIN CONTENT AREA */}
						<div className='ScenariosWrapper-container'>
							{this.state.coachPanelScenarioId &&
								<ClosablePanel
									className='ScenariosWrapper-sidebarPanel'
									title={scenarios.coach}
									onClose={this.handlePanelClose}
								>
									<CoachPracticeChats
										practiceChats={scenariosChats[this.state.coachPanelScenarioId] || []}
										activeInboxId={activeInbox && activeInbox._id}
										dueDate={
											coachPanelScenario.dueDate ? new Date(coachPanelScenario.dueDate) : null
										}
										scenarioId={this.state.coachPanelScenarioId}
										onClose={this.handlePanelClose}
										reminderIsVisible={coachPanelScenario.reminderIsVisible}
										onReminderClose={onReminderClose}
									/>
								</ClosablePanel>
							}
							<Switch>
								<Route exact path='/scenarios'>
									<ScenarioEmptyArea text={scenarios.emptyState} />
								</Route>
								<Route path='/scenarios/practice-chat/:inboxId'>
									<Conversation />
								</Route>
								<Route path='/scenarios/group-chat/:inboxId'>
									<Conversation chatType={chatSubType.GROUP_CHAT} />
								</Route>
								<Route path='/scenarios/send-reminder/:scenarioId'>
									<SendReminderPage />
								</Route>
								<Route path='/scenarios/:id?/:mode'>
									{ scenarioData &&
									<div className={className}>
										<ScenarioContent
											authorDetails={selectedScenario ? selectedScenario.authorDetails : {}}
											currentScenarioContentFetching={currentScenarioContentFetching}
											showValidationNameError={invalidFields.name}
											showValidationDescriptionError={!!invalidFields[SCENARIO_DESCRIPTION]}
											showValidationStepsError={!!invalidFields[STEPS]}
											showValidationCriteriasError={!!invalidFields[CRITERIAS]}
											validationNameError={
												scenarios.validation.fields[SCENARIO_NAME].errorMessage
											}
											validationDescriptionError={
												scenarios.validation.fields[SCENARIO_DESCRIPTION].errorMessage
											}
											validationStepsError={scenarios.validation.fields[STEPS].errorMessage}
											validationCriteriasError={
												scenarios.validation.fields[CRITERIAS].errorMessage
											}
											videoThumbnailUrl={videoData.thumbnailUrl}
											videoState={videoData.state}
											videoUrl={videoData.url}
											videoId={videoData.id}
											fallBackVideoUrl={videoData.fallBackUrl}
											name={scenarioData[SCENARIO_NAME]}
											description={scenarioData[SCENARIO_DESCRIPTION]}
											mode={selectedScenarioMode}
											onNameChange={this.handleItemChange(SCENARIO_NAME)}
											onDescriptionChange={this.handleItemChange(SCENARIO_DESCRIPTION)}
											onVideoChange={this.handleItemChange(
												VIDEO_ID,
												() => this.props.onVideoUpload({ videoId: this.state[VIDEO_ID] })
											)}
											onBestPracticeVideoAdd={this.handleItemAdd(
												BEST_PRACTICE_VIDEOS,
												() => {
													const videos = this.state[BEST_PRACTICE_VIDEOS]
														.map(({ videoId }) => ({ videoId }));
													this.props.onVideoUpload(videos);
												}
											)}
											onBestPracticeRemove={this.handleItemRemove(BEST_PRACTICE_VIDEOS)}
											content={scenarios}
											onScenarioDeSelect={onScenarioDeSelect}
											onStepAdd={this.handleItemAdd(STEPS)}
											onStepRemove={this.handleItemRemove(STEPS)}
											onCriteriaCreate={this.handleCriteriaCreate}
											onCriteriaSelect={this.handleItemAdd(CRITERIAS)}
											onCriteriaRemove={this.handleItemRemove(CRITERIAS)}
											onUserSelect={this.handleItemAdd(
												SELECTED_USERS,
												() => this.setState({ availableUserItems: [] })
											)}
											onGroupSelect={this.handleGroupSelect}
											onUserRemove={this.handleUserRemove}
											onUserSearch={this.handleUserSearch}
											userSearchFetching={this.state.userSearchFetching}
											onCriteriaSearch={this.handleCriteriaSearch}
											selectedUsersCounter={scenarioData[SELECTED_USERS].length}
											onCurrentStepValueChange={this.handleChangeCurrentStepValue}
											onDueDateChange={this.handleDueDateChange}
											userItems={users}
											searchUserItems={scenarioData.availableUserItems}
											steps={scenarioData[STEPS]}
											criterias={scenarioData[CRITERIAS]}
											type={scenarioData[TYPE]}
											dueDate={scenarioData[DUE_DATE]}
											defaultDueDate={initialState[DUE_DATE]}
											bestPracticeCards={scenarioData[BEST_PRACTICE_VIDEOS]}
											canEditVideo={
												selectedScenarioMode === CREATE_MODE || scenarioData[CAN_EDIT_VIDEO]
											}
											availableCriteriaItems={criteriaData.criteriaList}
											headerControllsHandlers={this.getHeaderControllsHandlers()}
											teamData={teamData}
											inboxData={(viewMode && inboxData) || []}
											draft={selectedScenario && selectedScenario.type === 'draft'}
											onDraftClick={this.handleDraftScenarioCreation}
											updateDate={selectedScenario &&
											this.getDateString(scenarios.saved, selectedScenario.updatedAt)}
										/>
									</div>
									}
								</Route>
							</Switch>
						</div>
					</Fragment>
				)}
			</LanguageConsumer>
		);
	}
}

export default withRouter(ScenariosWrapper);
