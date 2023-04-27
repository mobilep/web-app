import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

export default function SliderDots ({ activeIndex, total }) {
	const [dots, setDots] = useState([]);
	const getDotClassName = (index) => classNames(
		'SlideDots-item',
		{ 'SlideDots-itemActive': index === activeIndex },
	);

	useEffect(() => {
		const arr = [];
		for (let index = 0; index < total; index++) {
			const className = getDotClassName(index);
			arr.push(<div key={index} className={className} />);
		}
		setDots(arr);
	}, [activeIndex, total]);

	return (
		<div className='SliderDots'>{ dots }</div>
	);
}

SliderDots.propTypes = {
	activeIndex: PropTypes.number,
	total: PropTypes.number,
};
