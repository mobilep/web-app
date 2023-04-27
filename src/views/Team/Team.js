import React, { Component } from 'react';
import PropTypes from 'prop-types';
import constants from './../../constants';
import { withLanguageContext } from '../../utils/LanguageContext';
import { Button, SecondaryNavigation, TeamEmptyArea } from './../../components/atoms';
import { TeamCardList, TeamComponent } from '../../containers';
import './styles.css';

const { routes } = constants;

class Team extends Component {

	static propTypes = {
		content: PropTypes.object,
		location: PropTypes.object,
		match: PropTypes.object,
	}

	render () {
		const {
			match: { params },
			location: { pathname },
			content: { common, teams },
		} = this.props;

		const matchCreateMode = params.teamId === 'new';
		const matchEditMode = params.mode === 'edit';
		const navHidden = this.props.location.pathname !== '/groups' &&
		this.props.location.pathname.includes('/groups');

		return (
			<div className='Team'>
				<SecondaryNavigation
					headerClassName='Team-header'
					headerText={teams.teams}
					actionButton={!pathname.includes(routes.TEAM_NEW)
						? <Button
							to={routes.TEAM_NEW}
							className='Button-text'
						>
							{common.new}
						</Button>
						: null
					}
					className={navHidden ? 'Team-secondary-nav' : ''}
				>
					<TeamCardList
						activeCard={params.teamId}
						emptyMessage={teams.empty}
					/>
				</SecondaryNavigation>
				{params.teamId
					? <TeamComponent
						editMode={matchEditMode}
						createMode={matchCreateMode}
						teamId={params.teamId}
					/>
					: <TeamEmptyArea className='Team-empty' text={teams.emptyAreaText} />}
			</div>
		);
	}

}

export default withLanguageContext(Team);
