import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';

import { Button, SliderDots } from './../../atoms';
import { EventEmitter } from '../../../utils/eventEmitter';
import { TourEvents } from '../Tour/TourEvents';
import { LanguageContext } from '../../../utils';
import './styles.css';

export default function Slider ({ children }) {
	const [currentIndex, setIndex] = useState(0);
	const { onboarding } = useContext(LanguageContext);
	const nOfSlides = React.Children.count(children);
	const sliderStyle = {
		width: `${100 * nOfSlides}%`,
		transform: `translateX(-${(100 / nOfSlides) * currentIndex}%)`,
	};

	const	handleSwipedLeft = () => {
		if (currentIndex === nOfSlides - 1) return;
		setIndex(currentIndex + 1);
	};

	const handleSwipedRight = () => {
		if (currentIndex === 0) return;
		setIndex(currentIndex - 1);
	};

	const handleSliderClose = () => EventEmitter.dispatch(TourEvents.close);

	return (
		<div className='Slider'>
			<Button
				className='Button-text Slider-close p-a-0'
				onClick={handleSliderClose}
			>
				{onboarding.close}
			</Button>
			<Swipeable
				onSwipedLeft={handleSwipedLeft}
				onSwipedRight={handleSwipedRight}
				className='Slider-content'
				style={sliderStyle}
				trackMouse={true}
			>
				{children}
			</Swipeable>
			<SliderDots total={nOfSlides} activeIndex={currentIndex} />
		</div>
	);
}

Slider.propTypes = {
	children: PropTypes.any,
};
