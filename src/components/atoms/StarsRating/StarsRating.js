import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { StarIcon, StarIconGold } from '../../../icons';

const NUMBER_OF_STARS = 5;

export default function StarsRating ({ value }) {
	const [rateWidth, setRateWidth] = useState(0);

	useEffect(() => {
		setRateWidth(value / NUMBER_OF_STARS * 100);
	}, [value]);

	return (
		<div className='StarsRating'>
			<div className='StarsRating-bottom'>
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
				<StarIcon />
			</div>
			<div className='StarsRating-top' style={{ width: `${rateWidth}%` }}>
				<StarIconGold />
				<StarIconGold />
				<StarIconGold />
				<StarIconGold />
				<StarIconGold />
			</div>
		</div>
	);
}

StarsRating.propTypes = {
	value: PropTypes.number,
};
