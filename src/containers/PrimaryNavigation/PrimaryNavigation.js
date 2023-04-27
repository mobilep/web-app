import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PrimaryNavigation } from '../../components';
import { userInfo } from '../../redux/reducers';
import { getNumberOfScenariosWithActions } from '../../redux/selectors/scenariosSelectors';
import { getNumberOfUnreadInboxes } from '../../redux/selectors/inboxSelectors';

const mapStateToProps = (state) => ({
	unreadInboxCount: getNumberOfUnreadInboxes(state),
	unreadScenariosCount: getNumberOfScenariosWithActions(state),
});

const mapDispatchToProps = (dispatch) => ({
	onSignOut: () => dispatch(userInfo.signOut()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrimaryNavigation));
