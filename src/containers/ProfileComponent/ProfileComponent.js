import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ProfileComponent } from '../../components';
import { userInfo } from '../../redux/reducers';

const mapStateToProps = ({
	userInfo: {
		firstName,
		lastName,
		name,
		companyName,
		avatarColor,
		avatar_md,
		createdScenarios,
		isCompanyAdmin,
		isSysAdmin,
		isManager,
		_company,
	},
}) => ({
	firstName,
	lastName,
	name,
	companyName,
	avatarColor,
	avatar_md,
	createdScenarios,
	isCompanyAdmin,
	isSysAdmin,
	isManager,
	_company,
});

const mapDispatchToProps = (dispatch) => ({
	onSignOut: () => dispatch(userInfo.signOut()),
	onLoadUserInfo: () => dispatch(userInfo.loadUserInfo()),
	onAvatarChange: (avatarId) => {
		return dispatch(userInfo.changeAvatar(avatarId));
	},
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileComponent));
