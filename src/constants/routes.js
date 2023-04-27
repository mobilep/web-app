export default {
	CREATE_PASSWORD: '/create-password',
	CREATE_PASSWORD_SUCCESS: '/create-password-success',
	CREATE_PASSWORD_ERROR: '/create-password-error',
	RESET_PASSWORD: '/reset-password',
	FORGOT_PASSWORD: '/forgot-password',
	FORGOT_PASSWORD_SUCCESS: '/forgot-password-success',
	FORGOT_PASSWORD_ERROR: '/forgot-password-error',
	RESET_PASSWORD_SUCCESS: '/reset-password-success',
	SSO: '/sso',
	INBOX: '/inbox',
	SCENARIOS: '/scenarios',
	SCENARIOS_NEW: '/scenarios/new',
	SIGN_IN: '/signin',
	TEAM: '/groups',
	TEAM_NEW: '/groups/new',

	PROFILE: '/profile',
	LEARNER_REPORT: '/profile/learner-report',
	LEARNER_REPORT_FOR_SCENARIO: '/profile/learner-report/scenarios-score/:scenarioId',
	LEARNER_REPORT_BY_SCENARIOS: '/profile/learner-report/scenarios-score',
	LEARNER_REPORT_BY_RESPONSIVENESS: '/profile/learner-report/scenarios-responsiveness',

	COACH_REPORT: '/profile/coach-report',
	COACH_REPORT_BY_MEMBERS: '/profile/coach-report/members-score',
	COACH_REPORT_FOR_MEMBER: '/profile/coach-report/members-score/:userId',
	COACH_REPORT_FOR_MEMBER_SCENARIO: '/profile/coach-report/members-score/:userId/scenario/:scenarioId',

	COACH_REPORT_BY_RESPONSIVENESS: '/profile/coach-report/members-responsiveness',
	COACH_REPORT_FOR_MEMBER_RESPONSIVENESS: '/profile/coach-report/members-responsiveness/:userId',

	SETTINGS: '/settings',
};
