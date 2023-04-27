import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { UserLabel, Spinner } from '..';

import './styles.css';

const getClassName = (className) => classNames('UserSelectList', className);

const UserSelectList = ({
	items = [],
	onSelect,
	className,
	selectedItem,
	onMouseOver,
	styles = {},
	notFound,
	userSearchFetching,
	notFoundMessage,
	selectInput,
}) => {
	const handleClick = (id) => () => onSelect(id);
	const handleMouseOver = (index) => () => onMouseOver(index);

	const getItems = () => {
		if (userSearchFetching) {
			return (
				<div className='UserSelectList-spinnerWrapper'>
					<Spinner color='rgb(243, 66, 60)' />
				</div>
			);
		}
		if (notFound) {
			return (
				<div className='UserSelectList-notFound'>
					{notFoundMessage}
				</div>
			);
		} else {
			selectInput();
			return items.map(({ id, fullName, ...rest }, index) => {
				const key = `selectItem${index}`;
				const className = selectedItem === index
					? 'UserSelectList-item UserSelectList-item-active'
					: 'UserSelectList-item';
				return (
					<button
						className={className}
						key={key}
						onMouseOver={handleMouseOver(index)}
						onMouseLeave={handleMouseOver(null)}
						onClick={handleClick(id)}
					>
						<UserLabel className='UserSelectList-userLabel'
							fullName={fullName.split(' ').reverse().join(' ')}
							{...rest} />
					</button>
				);
			});
		}
	};
	return (
		<div className={getClassName(className)} style={styles}>
			{getItems()}
		</div>
	);
};

export default UserSelectList;

UserSelectList.defaultProps = {
	onMouseOver: () => {},
	onSelect: () => {},
};

UserSelectList.propTypes = {
	className: PropTypes.string,
	items: PropTypes.array,
	notFound: PropTypes.bool,
	notFoundMessage: PropTypes.string,
	onMouseOver: PropTypes.func,
	onSelect: PropTypes.func,
	selectInput: PropTypes.func,
	selectedItem: PropTypes.number,
	styles: PropTypes.object,
	userSearchFetching: PropTypes.bool,
};
