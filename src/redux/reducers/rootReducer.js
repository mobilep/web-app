import { combineReducers } from 'redux';
import userInfo from './userInfo';
import criteriaInfo from './criteriaInfo';
import inboxInfo from './inboxInfo';
import userListInfo from './userListInfo';
import scenarioInfo from './scenarioInfo';
import teamInfo from './teamInfo';
import appInfo from './appInfo';
import videosInfo from './videosInfo';
import imagesInfo from './imagesInfo';
import mediaInfo from './mediaInfo';
import learnerReportInfo from './learnerReportInfo';
import coachReportInfo from './coachReportInfo';
import loadingInfo from './loadingInfo';

const rootReducer = combineReducers({
	appInfo,
	userInfo,
	criteriaInfo,
	inboxInfo,
	userListInfo,
	scenarioInfo,
	teamInfo,
	videosInfo,
	imagesInfo,
	mediaInfo,
	learnerReportInfo,
	coachReportInfo,
	loadingInfo,
	browserInfo: (state = {}) => state,
});

export default rootReducer;
