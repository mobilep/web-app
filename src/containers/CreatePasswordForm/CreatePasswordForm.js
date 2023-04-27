import { connect } from 'react-redux';
import { ResetPasswordForm } from '../../components';
import { userInfo } from '../../redux/reducers';

const mapStateToProps = ({ userInfo: { fetching } }) => ({
	submitting: fetching,
});

const mapDispatchToProps = (dispatch) => ({
	withTermsAndConditions: true,
	onSubmit: (data) => {
		dispatch(userInfo.signOut());
		dispatch(userInfo.createPassword(data));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordForm);
