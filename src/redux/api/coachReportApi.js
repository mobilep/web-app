import constants from '../../constants';
import { storeHelpers, getInitials } from '../../helpers';
import { httpApi } from '../../utils';
import { MATH_UTILS } from '../../utils/math';
import TIME_UTILS from '../../utils/time';
import { generateQueryParams } from '../../utils/queryParams';

const { api4 } = constants.common;

const mapOverallReport = (report) => {
	return {
		team: {
			...report.team,
			avgScore: MATH_UTILS.round(report.team.avgScore),
			responsiveness: TIME_UTILS.getRoundedDaysFromMs(report.team.responsiveness),
		},
		company: {
			avgScore: MATH_UTILS.round(report.company.avgScore),
			responsiveness: TIME_UTILS.getRoundedDaysFromMs(report.company.responsiveness),
		},
	};
};

const mapUsersScoreReport = ({ teamAvgScore, companyAvgScore, users }) => {
	return {
		teamAvgScore: MATH_UTILS.round(teamAvgScore),
		companyAvgScore: MATH_UTILS.round(companyAvgScore),
		users: users.map((user) => ({
			...user,
			name: `${user.firstName} ${user.lastName}`,
			initials: getInitials(user.firstName, user.lastName),
			value: MATH_UTILS.round(user.avgScore),
			maxValue: 5,
			withStar: true,
		})),
	};
};

const mapUsersResponsivenessReport = ({ teamResponsiveness, companyResponsiveness, users }) => {
	return {
		teamResponsiveness: TIME_UTILS.getRoundedDaysFromMs(teamResponsiveness),
		companyResponsiveness: TIME_UTILS.getRoundedDaysFromMs(companyResponsiveness),
		users: users.map((user) => ({
			...user,
			name: `${user.firstName} ${user.lastName}`,
			initials: getInitials(user.firstName, user.lastName),
			value: TIME_UTILS.getRoundedDaysFromMs(user.responsiveness),
		})),
	};
};

const mapUserResponsivenessReport = ({ teamResponsiveness, userResponsiveness, user, responsivenessByScenario }) => {
	return {
		user: {
			...user,
			name: `${user.firstName} ${user.lastName}`,
			initials: getInitials(user.firstName, user.lastName),
		},
		teamResponsiveness: TIME_UTILS.getRoundedDaysFromMs(teamResponsiveness),
		userResponsiveness: TIME_UTILS.getRoundedDaysFromMs(userResponsiveness),
		responsivenessByScenario: responsivenessByScenario.map((scenario) => ({
			...scenario,
			team: TIME_UTILS.getRoundedDaysFromMs(scenario.team),
			user: TIME_UTILS.getRoundedDaysFromMs(scenario.user),
		})),
	};
};

const mapUserScoreReport = ({ userAvgScore, teamAvgScore, user, avgByScenario }) => {
	return {
		user: {
			...user,
			name: `${user.firstName} ${user.lastName}`,
			initials: getInitials(user.firstName, user.lastName),
		},
		userAvgScore: MATH_UTILS.round(userAvgScore),
		teamAvgScore: MATH_UTILS.round(teamAvgScore),
		avgByScenario: avgByScenario.map((scenario) => ({
			...scenario,
			team: MATH_UTILS.round(scenario.team),
			user: MATH_UTILS.round(scenario.user),
		})),
	};
};

const mapUserScenarioReport = (report) => {
	const { user, criterias, userAvgScore, teamAvgScore } = report;

	return {
		...report,
		user: {
			...user,
			name: `${user.firstName} ${user.lastName}`,
			initials: getInitials(user.firstName, user.lastName),
		},
		userAvgScore: MATH_UTILS.round(userAvgScore),
		teamAvgScore: MATH_UTILS.round(teamAvgScore),
		criterias: criterias.map((criteria) => ({
			...criteria,
			team: MATH_UTILS.round(criteria.team),
			user: MATH_UTILS.round(criteria.user),
		})),
	};
};

const getOverallReport = (companyId, filters) => {
	const headers = storeHelpers.getAuthHeaders();
	const queryParams = generateQueryParams(filters);

	return httpApi.get(`${api4}/company/${companyId}/report-coach?${queryParams}`, headers)
		.then((res) => res.json())
		.then(mapOverallReport);
};

const getUsersScores = (companyId, filters) => {
	const headers = storeHelpers.getAuthHeaders();
	const queryParams = generateQueryParams(filters);

	return httpApi.get(`${api4}/company/${companyId}/report-coach/user-score?${queryParams}`, headers)
		.then((res) => res.json())
		.then(mapUsersScoreReport);
};

const getUserScore = (companyId, userId, filters) => {
	const headers = storeHelpers.getAuthHeaders();
	const queryParams = generateQueryParams(filters);

	return httpApi
		.get(`${api4}/company/${companyId}/report-coach/user-score/${userId}?${queryParams}`, headers)
		.then((res) => res.json())
		.then(mapUserScoreReport);
};

const getUsersResponsiveness = (companyId, filters) => {
	const headers = storeHelpers.getAuthHeaders();
	const queryParams = generateQueryParams(filters);

	return httpApi.get(`${api4}/company/${companyId}/report-coach/user-responsiveness?${queryParams}`, headers)
		.then((res) => res.json())
		.then(mapUsersResponsivenessReport);
};

const getUserResponsiveness = (companyId, userId, filters) => {
	const headers = storeHelpers.getAuthHeaders();
	const queryParams = generateQueryParams(filters);

	return httpApi
		.get(`${api4}/company/${companyId}/report-coach/user-responsiveness/${userId}?${queryParams}`, headers)
		.then((res) => res.json())
		.then(mapUserResponsivenessReport);
};

const getUserScenarioScore = ({ companyId, userId, scenarioId, filters }) => {
	const headers = storeHelpers.getAuthHeaders();
	const queryParams = generateQueryParams(filters);

	return httpApi
		.get(
			`${api4}/company/${companyId}/report-coach/user-score/${userId}/scenario/${scenarioId}?${queryParams}`,
			headers
		)
		.then((res) => res.json())
		.then(mapUserScenarioReport);
};

export const coachReportApi = {
	getOverallReport,
	getUsersScores,
	getUserScore,
	getUserScenarioScore,
	getUsersResponsiveness,
	getUserResponsiveness,
};
