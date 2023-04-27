import '../../typedefs'; // JSDOC TYPES
import constants from '../../constants';
import { storeHelpers } from '../../helpers';
import { httpApi } from '../../utils';
import { generateQueryParams } from '../../utils/queryParams';
import TIME_UTILS from '../../utils/time';
import { MATH_UTILS } from '../../utils/math';

const { api4 } = constants.common;

/**
 * @param {OverallReport} report
 * @returns {OverallReport}
 */
const mapOverallReport = ({ user, team, avgByScenario, responsivenessByScenario }) => {
	return {
		user: {
			...user,
			avgScore: MATH_UTILS.round(user.avgScore),
			responsiveness: TIME_UTILS.getRoundedDaysFromMs(user.responsiveness),
		},
		team: {
			...team,
			avgScore: MATH_UTILS.round(team.avgScore),
			responsiveness: TIME_UTILS.getRoundedDaysFromMs(team.responsiveness),
		},
		avgByScenario: avgByScenario.map((scenario) => ({
			...scenario,
			team: MATH_UTILS.round(scenario.team),
			user: MATH_UTILS.round(scenario.user),
		})),
		responsivenessByScenario: responsivenessByScenario.map((scenario) => ({
			...scenario,
			team: TIME_UTILS.getRoundedDaysFromMs(scenario.team),
			user: TIME_UTILS.getRoundedDaysFromMs(scenario.user),
		})),
	};
};

/**
 *
 *
 * @param {ScenarioReport} report
 * @returns {ScenarioReport}
 */
const mapScenarioReport = ({ userAvgScore, teamAvgScore, criterias, scenarioName, scenarioId }) => {
	return {
		scenarioId,
		scenarioName,
		userAvgScore: MATH_UTILS.round(userAvgScore),
		teamAvgScore: MATH_UTILS.round(teamAvgScore),
		criterias: criterias.map((criteria) => ({
			...criteria,
			team: MATH_UTILS.round(criteria.team),
			user: MATH_UTILS.round(criteria.user),
		})),
	};
};

/**
 * @param {string} companyId
 * @returns {Promise<PlainUser[]>}
 */
const getCoachesList = (companyId) => {
	const headers = storeHelpers.getAuthHeaders();

	return httpApi.get(`${api4}/company/${companyId}/coach`, headers)
		.then((res) => res.json());
};

/**
 * @param {string} companyId
 * @returns {Promise<OverallReport>}
 */
const getOverallReport = (companyId, filters) => {
	const headers = storeHelpers.getAuthHeaders();
	const queryParams = generateQueryParams(filters);

	return httpApi.get(`${api4}/company/${companyId}/report-learner?${queryParams}`, headers)
		.then((res) => res.json())
		.then((report) => mapOverallReport(report));
};

/**
 * @param {string} companyId
 * @param {string} scenarioId
 * @return {Promise<ScenarioReport>}
 */
const getScenarioReport = (companyId, scenarioId) => {
	const headers = storeHelpers.getAuthHeaders();

	return httpApi.get(`${api4}/company/${companyId}/scenario-learner/${scenarioId}`, headers)
		.then((res) => res.json())
		.then((report) => mapScenarioReport(report));
};

export const learnerReportApi = {
	getCoachesList,
	getOverallReport,
	getScenarioReport,
};
