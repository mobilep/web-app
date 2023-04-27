import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './styles.css';

export default function BreadCrumbs ({ links, className }) {
	const getClassName = () => classNames('BreadCrumbs', className);

	return (
		<div className={getClassName()}>
			{
				links.map(({ text, link }) => {
					return link
						? <NavLink key={link} className='BreadCrumbs-item' to={link}>{text}</NavLink>
						: <span key={text} className='BreadCrumbs-item'>{text}</span>;
				})
			}
		</div>
	);
}

BreadCrumbs.propTypes = {
	className: PropTypes.string,
	links: PropTypes.array,
};

BreadCrumbs.defaultProps = {
	links: [],
};
