import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.css';
import { ScenariosWrapper } from '../';
import { ViewLoader } from './../../components';
import { getInitials } from '../../helpers';
import { teamInfo, scenarioInfo, criteriaInfo, videosInfo } from '../../redux/reducers';
import constants from './../../constants';
import {
	getEnrichedScenarios, getScenariosChats, getScenariosGroupChats,
} from '../../redux/selectors/scenariosSelectors';
const { routes, common } = constants;
const { modes: { EDIT_MODE, VIEW_MODE, CREATE_MODE, PRACTICE_MODE } } = common;

const controllsHandlersFactory = (onPrimaryClick, onSecondaryClick) => (
	{
		onPrimaryClick,
		onSecondaryClick,
	}
);

const SCENARIOS_SAFE_IDS = ['new', 'practice-chat', 'group-chat', 'send-reminder'];

class Scenarios extends Component {

	static propTypes = {
		createdScenario: PropTypes.object,
		criteriaInfo: PropTypes.object,
		getCriteriaData: PropTypes.func,
		getInboxData: PropTypes.func,
		getScenarioData: PropTypes.func,
		getSingleScenarioData: PropTypes.func,
		getTeamData: PropTypes.func,
		history: PropTypes.object,
		inboxInfo: PropTypes.object,
		location: PropTypes.object,
		match: PropTypes.object,
		onCriteriaCreate: PropTypes.func,
		onReminderClose: PropTypes.func,
		onScenarioCreate: PropTypes.func,
		onScenarioDelete: PropTypes.func,
		onScenarioEdit: PropTypes.func,
		onVideoUpload: PropTypes.func,
		scenarioInfo: PropTypes.object,
		scenariosChats: PropTypes.object,
		teamInfo: PropTypes.object,
		userInfo: PropTypes.object,
		videosInfo: PropTypes.object,
	}

	getFilteredList (list, type, id) {
		if (!list) return [];

		const filteredList = list.filter((item) => {
			switch (type) {
				case 'practice':
					return item._coach._id !== id;
				case 'create':
					return item._coach._id === id;
				default:
					return true;
			}
		});

		return filteredList;
	}

	getCurrentScenario (id, scenarios) {
		if (!scenarios || !id) return;
		return scenarios.find(({ _id }) => _id === id);
	}

	isPathAllowed (routeMode, scenarioId, scenariosWithPracticeType) {
		if (routeMode === 'edit') {
			return !scenariosWithPracticeType.find(({ _id }) => _id === scenarioId);
		}
		return true;
	}

	switchToEditMode = () => {
		const { match: { params } } = this.props;
		this.navigateTo(`${routes.SCENARIOS}/${params.id}/edit`);
	}

	switchToViewMode = () => {
		const { match: { params } } = this.props;
		this.navigateTo(`${routes.SCENARIOS}/${params.id}`);
	}

	navigateTo (path) {
		this.props.history.push(path);
	}

	handleScenarioSelect = (id) => {
		this.navigateTo(`${routes.SCENARIOS}/${id}`);
	}

	handleScenarioEdit = (scenarioId, scenario) => {
		this.props.onScenarioEdit({ scenarioId, body: scenario });
		this.switchToViewMode();
	}

	handleScenarioCreate = (scenario) => {
		this.props.onScenarioCreate(scenario);
		this.navigateTo(`${routes.SCENARIOS}`);
	}

	handleScenarioDelete = () => {
		// TODO show confirmation dialog
		const { match: { params } } = this.props;
		this.props.onScenarioDelete(params.id);
	}

	handleScenarioDeSelect = () => {
		this.navigateTo(routes.SCENARIOS);
	}

	handleScenarioPractice = (inboxId) =>
		this.navigateTo(`${routes.SCENARIOS}/practice-chat/${inboxId}`);

	componentDidMount () {
		this.props.getScenarioData();
		this.props.getCriteriaData();
		this.props.getTeamData();
		const inboxId = this.props.match.params.id;
		if (inboxId && !SCENARIOS_SAFE_IDS.includes(inboxId)) {
			this.props.getInboxData(inboxId);
		}
	}

	componentDidUpdate (prevProps) {
		const {
			match,
		} = this.props;

		const existingScenario = !SCENARIOS_SAFE_IDS.includes(match.params.id) && match.params.id;
		const scenarioChanged = match.params.id !== prevProps.match.params.id;
		if (scenarioChanged && existingScenario) {
			this.props.getInboxData(match.params.id);
			this.props.getSingleScenarioData(match.params.id);
		}
	}

	headerControllsHandlersMap = {
		[EDIT_MODE]: controllsHandlersFactory(
			this.handleScenarioEdit,
			this.switchToViewMode,
		),
		[VIEW_MODE]: controllsHandlersFactory(
			this.switchToEditMode,
			this.handleScenarioDelete,
		),
		[CREATE_MODE]: controllsHandlersFactory(
			this.handleScenarioCreate,
			this.handleScenarioDeSelect,
		),
		[PRACTICE_MODE]: controllsHandlersFactory(
			this.handleScenarioPractice,
			() => {},
		),
	}

	getSelectedScenarioMode ({ match: { params } } = this.props,
		{ selectedScenario, scenariosWithCreateType, scenariosWithPracticeType }) {
		const { mode = VIEW_MODE, id } = params;
		if (id === 'new') return CREATE_MODE;
		if (mode === 'edit') return EDIT_MODE;
		if (scenariosWithCreateType.indexOf(selectedScenario) + 1) return VIEW_MODE;
		if (scenariosWithPracticeType.indexOf(selectedScenario) + 1) return PRACTICE_MODE;
	}

	updateScenarioList (list, currentUserId) {
		return list.map((item) => {
			item.authorDetails = {
				thumbnail: item._coach.avatar_md,
				initials: getInitials(item._coach.firstName, item._coach.lastName),
				avatarColor: item._coach.avatarColor,
				isCurrentUser: currentUserId === item._coach._id,
			};
			return item;
		});
	}

	render () {
		const {
			match: { params },
			scenarioInfo,
			userInfo,
			criteriaInfo,
			teamInfo,
			onCriteriaCreate,
			onVideoUpload,
			videosInfo,
			scenariosChats,
			inboxInfo,
			onReminderClose,
		} = this.props;
		const { mode: routeMode, id = '' } = params;
		const list = this.updateScenarioList(scenarioInfo.scenarioList, userInfo._id);
		const scenariosWithCreateType = this.getFilteredList(list, 'create', userInfo._id);
		const scenariosWithPracticeType = this.getFilteredList(scenarioInfo.scenarioList, 'practice', userInfo._id);
		const selectedScenario = this.getCurrentScenario(id, list);
		const isScenarioNotFound = id &&
			!SCENARIOS_SAFE_IDS.includes(id) &&
			!selectedScenario &&
			scenarioInfo.fetching === false;

		if (isScenarioNotFound) {
			return <Redirect to={routes.SCENARIOS} />;
		}

		if (!this.isPathAllowed(routeMode, id, scenariosWithPracticeType)) {
			return <Redirect to={`${routes.SCENARIOS}/${id}`} />;
		}
		const selectedScenarioMode = this.getSelectedScenarioMode(this.props, {
			selectedScenario,
			scenariosWithCreateType,
			scenariosWithPracticeType,
		});
		return (
			<div className='Scenarios'>
				{scenarioInfo.fetching === false && criteriaInfo.fetching === false
					? <ScenariosWrapper
						currentScenarioContentFetching={scenarioInfo.currentScenarioContentFetching}
						userInfo={userInfo}
						onScenarioSelect={this.handleScenarioSelect}
						onScenarioDeSelect={this.handleScenarioDeSelect}
						scenarios={list}
						scenarioListError={scenarioInfo.scenarioListError}
						selectedScenario={selectedScenario}
						selectedScenarioId={id}
						selectedScenarioMode={selectedScenarioMode}
						headerControllsHandlers={this.headerControllsHandlersMap[selectedScenarioMode]}
						onCriteriaCreate={onCriteriaCreate}
						onVideoUpload={onVideoUpload}
						teamData={teamInfo}
						criteriaData={criteriaInfo}
						inboxData={scenarioInfo.inboxData}
						createdScenario={scenarioInfo.createdScenario}
						videosInfo={videosInfo}
						scenariosChats={scenariosChats}
						activeInbox={inboxInfo.activeInbox}
						onReminderClose={onReminderClose}
					/>
					: <ViewLoader />
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const { userInfo, criteriaInfo, scenarioInfo, teamInfo, videosInfo, inboxInfo } = state;

	return {
		userInfo,
		criteriaInfo,
		scenarioInfo: {
			...scenarioInfo,
			scenarioList: getEnrichedScenarios(state),
		},
		teamInfo,
		videosInfo,
		inboxInfo,
		scenariosChats: getScenariosChats(state),
		scenariosGroupChats: getScenariosGroupChats(state),
	};
};

const mapDispatchToProps = (dispatch) => ({
	getTeamData: () => dispatch(teamInfo.getTeamList()),
	getScenarioData: () => dispatch(scenarioInfo.getScenarioList()),
	getCriteriaData: () => dispatch(criteriaInfo.getCriteriaList()),
	getInboxData: (scenarioId) => dispatch(scenarioInfo.getInboxData(scenarioId)),
	onCriteriaCreate: (criteria) => dispatch(criteriaInfo.CreateCriteriaItem(criteria)),
	onScenarioDelete: (scenarioId) => dispatch(scenarioInfo.deleteScenario(scenarioId)),
	onScenarioCreate: (scenario) => dispatch(scenarioInfo.createScenario(scenario)),
	onScenarioEdit: (scenario) => dispatch(scenarioInfo.editScenario(scenario)),
	onVideoUpload: (videoInfo) => dispatch(videosInfo.addVideos(videoInfo)),
	onReminderClose: (scenarioId) =>
		dispatch(scenarioInfo.updateReminder({ scenarioId, reminderIsVisible: false })),
	getSingleScenarioData: (scenarioId) => dispatch(scenarioInfo.getScenario({ scenarioId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scenarios);
