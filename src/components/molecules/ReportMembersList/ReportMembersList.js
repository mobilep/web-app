import React from 'react';
import PropTypes from 'prop-types';
import { ReportMemberItem } from '../../atoms';
import { Link } from 'react-router-dom';

import './styles.css';

export default function ReportMembersList ({ users, linkBaseUrl }) {
	const getUserRow = (user, index) => {
		return (
			<Link to={`${linkBaseUrl}/${user._id}`} key={user._id} className='ReportMembersList-item'>
				<ReportMemberItem user={user} rank={index + 1} />
			</Link>
		);
	};

	return (
		<section className='ReportMembersList'>
			{users.map(getUserRow)}
		</section>
	);
}

ReportMembersList.propTypes = {
	linkBaseUrl: PropTypes.string,
	users: PropTypes.array,
};

ReportMembersList.defaultProps = {
	users: [],
};
