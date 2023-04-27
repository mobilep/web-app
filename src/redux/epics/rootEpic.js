import { combineEpics } from 'redux-observable';
import {
	createPasswordEpic,
	/* TODO: Remove or uncomment when we will know more about this functionality
		deleteUserEpic,
	*/
	forgotPasswordEpic,
	getUserInfoEpic,
	resetPasswordEpic,
	signInEpic,
	signOutEpic,
	changeAvatarEpic,
	loadUserInfoEpic,
} from './userInfo';
import {
	createInboxEpic,
	deleteChatEpic,
	deleteMessageEpic,
	getActiveInboxEpic,
	getInboxListEpic,
	getNewInboxEpic,
	sendMessageEpic,
	setActiveInboxEpic,
	setMessageEpic,
	saveBestPracticeVideoEpic,
	updateChatDataEpic,
	updateLastReadEpic,
} from './inboxInfo';
import { getCompanyUserListEpic } from './userListInfoEpic';
import {
	getScenarioListEpic,
	deleteScenarioEpic,
	createScenarioEpic,
	editScenarioEpic,
	evaluateScenarioEpic,
	getInboxDataEpic,
	sendReminderEpic,
	updateReminderEpic,
	getScenarioEpic,
} from './scenarioInfoEpic';
import { createTeamEpic, getTeamEpic, getTeamListEpic, deleteTeamEpic, updateTeamEpic } from './teamInfoEpic';
import { getCriteriaListEpic } from './criteriaInfo';
import { getCoachesListEpic, getLearnerOverallReportEpic, getScenarioReportEpic } from './learnerReportInfo';
import {
	getCoachOverallReportEpic,
	getCoachUsersScoresEpic,
	getCoachUserScoresEpic,
	getCoachUserScenarioScoresEpic,
	getCoachUsersResponsivenessEpic,
	getCoachUserResponsivenessEpic,
} from './coachReportInfo';

export default combineEpics(
	changeAvatarEpic,
	createInboxEpic,
	createPasswordEpic,
	createScenarioEpic,
	createTeamEpic,
	deleteChatEpic,
	deleteMessageEpic,
	deleteScenarioEpic,
	deleteTeamEpic,
	/*
		deleteUserEpic,
	*/
	editScenarioEpic,
	evaluateScenarioEpic,
	forgotPasswordEpic,
	getActiveInboxEpic,
	getCompanyUserListEpic,
	getCriteriaListEpic,
	getInboxDataEpic,
	sendReminderEpic,
	updateReminderEpic,
	getScenarioEpic,

	getInboxListEpic,
	getNewInboxEpic,
	getScenarioListEpic,
	getTeamEpic,
	getTeamListEpic,
	getUserInfoEpic,
	resetPasswordEpic,
	sendMessageEpic,
	setActiveInboxEpic,
	setMessageEpic,
	signInEpic,
	signOutEpic,
	updateTeamEpic,
	saveBestPracticeVideoEpic,
	updateChatDataEpic,
	updateLastReadEpic,
	loadUserInfoEpic,

	// Learner reports
	getCoachesListEpic,
	getLearnerOverallReportEpic,
	getScenarioReportEpic,

	// Coach reports
	getCoachOverallReportEpic,
	getCoachUsersScoresEpic,
	getCoachUserScoresEpic,
	getCoachUserScenarioScoresEpic,
	getCoachUsersResponsivenessEpic,
	getCoachUserResponsivenessEpic,
);
