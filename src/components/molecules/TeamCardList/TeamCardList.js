import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TeamCard from '../TeamCard';
import classNames from 'classnames';

import './styles.css';

export default class TeamCardList extends Component {

	static propTypes = {
		activeCard: PropTypes.string,
		companyUserList: PropTypes.array,
		emptyMessage: PropTypes.string,
		fetching: PropTypes.bool,
		getData: PropTypes.func,
		onSelectCard: PropTypes.func,
		teamList: PropTypes.array,
	}

	state = {
		activeCard: null,
	}

	componentDidMount () {
		if (!this.props.companyUserList) {
			this.props.getData();
		}
	}

	genClassName = (props) => classNames('TeamCardList', {
		'TeamCardList-active': props.location.pathname === '/groups',
	});

	renderList = ({ teamList, activeCard }) => {
		if (!teamList) return;

		return teamList.map((item, index) => {
			const key = `tc-${index}`;

			return (
				<li
					className='TeamCardList-item'
					key={key}
				>
					<NavLink
						to={`/groups/${item._id}`}
						className='TeamCardList-link'
						activeClassName='TeamCardList-link-active'
					>
						<TeamCard
							active={activeCard === item._id}
							counter={item._users.length}
							header={item.name}
							people={item._users}
						/>
					</NavLink>
				</li>
			);
		}
		);
	}

	render () {
		const { teamList, emptyMessage, fetching } = this.props;
		return (
			(!teamList || teamList.length === 0) && !fetching
				? <div className='TeamCardList-empty'>{emptyMessage}</div>
				: <Route path='(/|/groups)/:teamId?' render={(props) => (
					<ul className={this.genClassName(props)}>
						{this.renderList(this.props)}
					</ul>
				)} />
		);
	}

}
