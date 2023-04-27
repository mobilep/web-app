import firebase from 'firebase/app';
import 'firebase/auth';

const auth = () => {
	return firebase.auth();
};

export default auth;
