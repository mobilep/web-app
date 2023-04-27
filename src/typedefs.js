/**
 * @typedef {Object} PlainUser
 * @property {string} _id
 * @property {string} name
 */

/**
 * @typedef {Object} OverallReport
 * @property {OverallScores} user
 * @property {OverallScores} team
 * @property {EntityScore[]} avgByScenario
 * @property {EntityScore[]} responsivenessByScenario
 */

/**
 * @typedef {Object} EntityScore
 * @property {string} _id
 * @property {string} name
 * @property {number} team
 * @property {number} user
 */

/**
 * @typedef {Object} OverallScores
 * @property {number} avgScore
 * @property {number} current
 * @property {number} complete
 * @property {number} responsiveness
 */

/**
 * @typedef {Object} ScenarioReport
 * @property {string} scenarioId
 * @property {string} scenarioName
 * @property {number} userAvgScore
 * @property {number} teamAvgScore
 * @property {EntityScore[]} criterias
 */

