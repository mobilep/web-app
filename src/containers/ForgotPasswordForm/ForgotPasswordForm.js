import { connect } from 'react-redux';
import { ForgotPasswordForm } from '../../components';
import { userInfo } from '../../redux/reducers';

const mapStateToProps = ({ userInfo: { signInError, fetching } }) => ({
	submitting: fetching,
	signInError,
});

const mapDispatchToProps = (dispatch) => ({
	onSubmit: (data) => dispatch(userInfo.forgotPassword(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm);
