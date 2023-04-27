import { connect } from 'react-redux';
import { SignInForm } from '../../components';
import { userInfo } from '../../redux/reducers';

const mapStateToProps = ({ userInfo: { signInError, fetching } }) => ({
	submitting: fetching,
	signInError,
});

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (data) => {
		dispatch(userInfo.signOut());
		dispatch(userInfo.signIn(data));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
