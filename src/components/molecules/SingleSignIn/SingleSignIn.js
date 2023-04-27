import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { saveAccessToken, saveFirebaseToken } from '../../../helpers/storageHelpers';
import routes from '../../../constants/routes';

class SingleSignIn extends Component {
	static propTypes = {
		history: PropTypes.object,
	}

	componentDidMount () {
		this.parseQueryParams();
	}

	parseQueryParams () {
		const queryParams = new URLSearchParams(window.location.search);
		const accessToken = queryParams.get('accessToken');
		const fbtoken = queryParams.get('fbtoken');
		const nextUrl = queryParams.get('nextUrl');

		if (accessToken && fbtoken && nextUrl) {
			saveAccessToken(accessToken);
			saveFirebaseToken(fbtoken);
			// window.location.href is used to reload the page to get auth data
			window.location.href = nextUrl;
		} else {
			this.props.history.push(routes.SIGN_IN);
		}
	}

	render () {
		return null;
	}
}

export default withRouter(SingleSignIn);
