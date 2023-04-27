const env = process.env.REACT_APP_API_ENV || 'development';

const connections = {
	production: {
		apiHost: 'api.mobilepractice',
		FbApiKey: 'xxxxxxxxxxxxxxxxxxxxxxxx',
		FbDatabaseURL: 'https://mobile.firebaseio.com',
		adminUrl: 'https://admin.io',
		S3AssetsURL: 'https://s3-eu-west-1.amazonaws.com/mobilepractice-video-production',
};

const currentConnections = connections[env] || connections.development;

const { apiHost, FbApiKey, FbDatabaseURL, adminUrl, S3AssetsURL: S3_ASSETS_URL } = currentConnections;

const PROTOCOL = 'https';

const api = `${PROTOCOL}://${apiHost}.io/api/v1`;
const api2 = `${PROTOCOL}://${apiHost}.io/api/v2`;
const api4 = `${PROTOCOL}://${apiHost}.io/api/v4`;

const modes = {
	EDIT_MODE: 'editMode',
	VIEW_MODE: 'viewMode',
	CREATE_MODE: 'createMode',
	PRACTICE_MODE: 'practiceMode',
};

export const inboxStatuses = {
	READ: 'read',
	UNREAD: 'unread',
};

export const practiceStates = {
	NOT_STARTED: 'notStarted',
	IN_PROGRESS: 'inProgress',
	WAITING_FOR_FEEDBACK: 'waitingOnFeedback',
	COMPLETED: 'completed',
};

const chatFbFolders = {
	SCENARIO_CHAT: 'chats',
	INBOX_CHAT: 'inboxes',
	GROUP_CHAT: 'mpchat',
};

const scenarioFields = {
	CRITERIAS: '_criterias',
	STEPS: 'steps',
	SELECTED_USERS: '_users',
	BEST_PRACTICE_VIDEOS: 'examples',
	SCENARIO_NAME: 'name',
	SCENARIO_DESCRIPTION: 'info',
	TYPE: 'type',
	VIDEO_ID: 'videoId',
	DUE_DATE: 'dueDate',
	CAN_EDIT_VIDEO: 'canEditVideo',
};

const optionalScenarioFields = [
	scenarioFields.BEST_PRACTICE_VIDEOS,
	scenarioFields.VIDEO_ID,
	scenarioFields.DUE_DATE,
];

export const scenarioTypes = {
	CURRENT: 'current',
	DRAFT: 'draft',
	COMPLETED: 'complete',
};

export const messageTypes = {
	EVALUATE: 'evaluate',
	EVALUATION: 'evaluation',
	TEXT: 'text',
	UPLOADING: 'uploading',
	VIDEO: 'video',
	IMAGE: 'image',
	WELCOME: 'welcome',
	AUDIO: 'audio',
	SYSTEM: 'system-text',
	FILE: 'file',
	SYSTEM_TEXT_WITH_LINK: 'system-text-link',
};

export const messageMediaTypes = [
	messageTypes.IMAGE,
	messageTypes.AUDIO,
	messageTypes.FILE,
	messageTypes.VIDEO,
];

export const chatType = {
	INBOX: 'inbox',
	PRACTICE: 'practice',
};

export const chatSubType = {
	GROUP_CHAT: 'groupChat',
	CHAT: 'chat',
};

export const mediaPreviewTypes = {
	AUDIO: 'audio',
	VIDEO_PASTED: 'video_pasted',
	IMAGE: 'image',
	FILE: 'file',
	VIDEO: 'video',
};

const firebase = {
	apiKey: FbApiKey,
	databaseURL: FbDatabaseURL,
	EVENTS: {
		child_added: 'child_added',
		child_changed: 'child_changed',
		value: 'value',
	},
};

export const mediaLoadingStates = {
	CHECKING: 'CHECKING',
	PROCESSING: 'PROCESSING',
	COMPLETED: 'COMPLETED',
};

const copyPasteID = '05506011-9912-4a4c-8243-af535364ffdb';
const recording = {
	CODECS: 'video/webm;codecs=vp9',
	TIME_SLICE: 100,
	MAX_LENGTH: 600000,
	CONSTRAINTS: {
		hq: {
			video: {
				width: { ideal: 1280 },
				height: { ideal: 720 },
			},
			audio: true,
		},
		mq: {
			video: {
				width: { ideal: 640 },
				height: { ideal: 480 },
			},
			audio: true,
		},
	},
};

const osName = {
	ANDROID: 'Android',
	IOS: 'iOS',
	WINDOWS: 'Windows',
};

const longPressTime = 500;

const landscapeMediaQuery = '(max-height: 450px) and (min-width: 500px) and (orientation: landscape)';

const pathWithoutNavbarRegex = new RegExp(
	'/(inbox/(chat|group-chat)|scenarios/(practice-chat|group-chat|send-reminder))/(.+)',
	'g',
);

export const inboxPanelViewMode = {
	NEW: 'new',
	EDIT_ACTIVE_CHAT: 'editActiveChat',
};

export default {
	localStorageKeys: {
		USER_ACCESS_TOKEN: 'USER_ACCESS_TOKEN',
		FIREBASE_ACCESS_TOKEN: 'FIREBASE_ACCESS_TOKEN',
		LANGUAGE: 'LANGUAGE',
	},
	adminUrl,
	api,
	api2,
	api4,
	firebase,
	inboxStatuses,
	practiceStates,
	modes,
	scenarioFields,
	optionalScenarioFields,
	scenarioTypes,
	mediaLoadingStates,
	messageTypes,
	messageMediaTypes,
	mediaPreviewTypes,
	S3_ASSETS_URL,
	landscapeMediaQuery,
	longPressTime,
	chatType,
	chatSubType,
	chatFbFolders,
	copyPasteID,
	recording,
	osName,
	pathWithoutNavbarRegex,
	inboxPanelViewMode,
};
