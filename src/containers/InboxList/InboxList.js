import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { InboxList } from '../../components';
import { isChatType } from '../../helpers/inboxListHelper';
import { chatType } from '../../constants/common';

const mapStateToProps = ({ inboxInfo: { fetching, inboxList } }, props) => ({
	fetching,
	inboxList: inboxList.filter(isChatType(chatType.INBOX)),
	...props,
});

export default withRouter(connect(mapStateToProps)(InboxList));
