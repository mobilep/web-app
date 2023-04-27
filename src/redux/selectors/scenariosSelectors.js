import { createSelector } from 'reselect';
import { sortByField, mergeUnique } from '../../helpers/arrayHelpers';
import { inboxStatuses, practiceStates, scenarioTypes } from '../../constants/common';
import { isScenarioInboxUnread, hasState } from '../../helpers/messageHelpers';
import { objectHelpers } from '../../helpers';
import { getPracticeState } from './commonMethods';

const getAllScenarios = (state) => state.scenarioInfo.scenarioList;
const getVideosInfo = (state) => state.videosInfo;
const getInboxList = (state) => state.inboxInfo.inboxList;
const getUserInfo = (state) => state.userInfo;

export const getActiveInboxes = createSelector(
	[getInboxList],
	(inboxes) => inboxes.filter(isActiveInbox)
);

export const getSortedScenarios = createSelector(
	[getAllScenarios],
	(scenarios) => {
		return scenarios.sort(sortByField((v) => +new Date(v), 'updatedAt', 'DESC'));
	}
);

export const getScenariosChats = createSelector(
	[getInboxList],
	(inboxes) => getScenariosWithInboxes(inboxes),
);

export const getScenariosGroupChats = createSelector(
	[getInboxList],
	(inboxes) => getGroupChatsByScenario(inboxes),
);

export const getEnrichedScenarios = createSelector(
	[getSortedScenarios, getScenariosChats, getScenariosGroupChats, getVideosInfo],
	(scenarios, scenariosChats, scenariosGroupChats, videosInfo) => {
		const enrichedScenarios = scenarios.map(enrichScenario({ videosInfo, scenariosChats, scenariosGroupChats }));

		return enrichedScenarios;
	}
);

// get number of scenarios where some action is required
export const getNumberOfScenariosWithActions = createSelector(
	[getActiveInboxes, getAllScenarios, getUserInfo],
	(inboxList, scenarios, userInfo) => {
		const unreadScenarioInboxesIds = inboxList
			.filter(isScenarioInboxUnread)
			.map(({ _scenario }) => _scenario._id || _scenario);

		const scenariosWithReminderVisible = 	scenarios
			.filter(hasReminder)
			.filter(isCoach(userInfo._id))
			.map(objectHelpers.pluck('_id'));

		return mergeUnique(unreadScenarioInboxesIds, scenariosWithReminderVisible).length;
	}
);

// HELPER FUNCTIONS
// Get hash map of [scenarioId]: inbox[]
function getScenariosWithInboxes (inboxList) {
	return inboxList
		.filter(({ _scenario, users }) => !!_scenario && !users)
		.reduce((acc, inbox) => {
			inbox.state = getPracticeState(inbox);
			const scenarioId = inbox._scenario._id || inbox._scenario;
			acc[scenarioId] = [...(acc[scenarioId] || []), inbox];

			return acc;
		}, {});
}

// Get hash map of [scenarioId]: groupChat
function getGroupChatsByScenario (inboxList) {
	return inboxList
		.filter(({ users, _scenario }) => !!users && !!_scenario)
		.reduce((acc, chat) => {
			const scenarioId = chat._scenario._id || chat._scenario;
			acc[scenarioId] = chat;

			return acc;
		}, {});
}

function enrichScenario ({ videosInfo, scenariosChats, scenariosGroupChats }) {
	return (scenario) => {
		const scenarioGroupChat = scenariosGroupChats[scenario._id];
		const scenarioInboxes = scenariosChats[scenario._id] || [];

		const video = videosInfo[scenario.videoId] || scenario.video;
		const examples = scenario.examples.map(exampleWithVideoInfo(videosInfo));
		const unreadMessagesGroupChat = getUnreadChatMessagesCount(scenarioGroupChat);
		const groupChatId = scenario.groupChat && scenario.groupChat.match(/\w+$/)[0];
		const inboxId = scenarioInboxes[0] ? scenarioInboxes[0]._id : null; // learner practice chat
		const unreadPracticeChats =	scenarioInboxes.filter(isScenarioInboxUnread).length; // coach unread chats
		const unreadPracticeMessagesForLearner = getUnreadChatMessagesCount(scenarioInboxes[0]);
		const practiceStatus = {
			...scenario.practiceStatus,
			unreadPracticeChats,
			unreadPracticeMessagesForLearner,
		};
		const waitingForFeedback = scenarioInboxes.filter(hasState(practiceStates.WAITING_FOR_FEEDBACK)).length;
		const isLearnerWaitingForFeedback = checkLearnerWaitingForFeedback(scenarioInboxes[0]);

		return {
			...scenario,
			video,
			examples,
			unreadMessagesGroupChat,
			groupChatId,
			inboxId,
			practiceStatus,
			waitingForFeedback,
			isLearnerWaitingForFeedback,
		};
	};
}

function checkLearnerWaitingForFeedback (scenarioInbox) {
	if (!scenarioInbox) return false;

	return hasState(practiceStates.IN_PROGRESS)(scenarioInbox);
}

function getUnreadChatMessagesCount (scenarioChat) {
	if (!scenarioChat) return null;

	return scenarioChat.status === inboxStatuses.READ
		? 0
		: scenarioChat.unreadMessagesCount;
}

function exampleWithVideoInfo (videosInfo) {
	return (example) => {
		return { ...example, video: videosInfo[example.videoId] || example.video };
	};
}

function hasReminder (scenario) {
	return scenario.reminderIsVisible;
}

function isCoach (currentUserId) {
	return function (scenario) {
		return scenario._coach._id === currentUserId;
	};
}

function isActiveInbox (inbox) {
	const isDraftPractice = inbox._scenario && inbox._scenario.type === scenarioTypes.DRAFT;

	return !isDraftPractice;
}
