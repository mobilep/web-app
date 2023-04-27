import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TeamCardList } from '../../components';
import { teamInfo, userListInfo } from '../../redux/reducers';

const mapStateToProps = ({
	teamInfo: { teamList, fetching },
	userListInfo: { companyUserList },
}, props) => ({
	fetching,
	teamList,
	companyUserList,
	...props,
});

const mapDispatchToProps = (dispatch, props) => ({
	getData: () => {
		dispatch(teamInfo.getTeamList());
		if (!props.companyUserList) {
			dispatch(userListInfo.getCompanyUserList());
		}
	},
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TeamCardList));
