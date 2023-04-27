import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Conversation } from '../../components';
import { inboxInfo, scenarioInfo } from '../../redux/reducers';
import { getActiveInboxSelector } from '../../redux/selectors/inboxSelectors';

const mapStateToProps = (state) => {
	const { userInfo, inboxInfo: { fetchingInbox, saveBestPracticeVideoError, inboxError },
		scenarioInfo: { evaluatedInbox }, videosInfo, imagesInfo, mediaInfo } = state;

	return {
		saveBestPracticeVideoError,
		loading: fetchingInbox,
		data: getActiveInboxSelector(state),
		currentUserId: userInfo._id,
		evaluatedInbox,
		videosInfo,
		imagesInfo,
		mediaInfo,
		inboxError,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onDeleteMessage: (data) => dispatch(inboxInfo.deleteMessage(data)),
		onSaveAsBestPracticeVideo: (data) => dispatch(inboxInfo.saveBestPracticeVideo(data)),
		onGetInbox: (data) => dispatch(inboxInfo.getInbox(data)),
		onSendMessage: (data) => dispatch(inboxInfo.sendMessage(data)),
		onEvaluate: (data) => dispatch(scenarioInfo.evaluateScenario(data)),
		onDeleteChat: (data) => dispatch(inboxInfo.deleteChat(data)),
		onComponentUnmount: () => dispatch(inboxInfo.cleanActiveInbox()),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Conversation));
