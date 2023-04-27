import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { teamInfo } from '../../redux/reducers';
import { TeamComponent } from '../../components';

const getData = (data) => {
	const { name, _users } = data;
	const body = { name, _users };
	return body;
};

const mapStateToProps = ({
	teamInfo: { fetching, teamData, createTeamError, createTeamSuccess, updateTeamError, updateTeamSuccess },
	userListInfo: { companyUserList },
	userInfo: { _id },
}, props) => ({
	fetching,
	teamData,
	companyUserList,
	currentUserId: _id,
	createTeamError,
	createTeamSuccess,
	updateTeamError,
	updateTeamSuccess,
	...props,
});

const mapDispatchToProps = (dispatch) => ({
	getData: (id) => {
		dispatch(teamInfo.getTeam(id));
	},
	createTeam: (data) => {
		const body = getData(data);
		dispatch(teamInfo.createTeam(body));
	},
	deleteTeam: (id) => {
		dispatch(teamInfo.deleteTeam(id));
	},
	updateTeam: (teamId, data) => {
		const body = getData(data);
		dispatch(teamInfo.updateTeam({ teamId, body }));
	},
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamComponent));
