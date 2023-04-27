import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { differenceInSeconds } from 'date-fns';

import { WelcomeTour, LearnerTour, CoachTour, ScenarioCreationTour } from '..';
import { EventEmitter } from '../../../utils/eventEmitter';
import { TourEvents, Tours } from './TourEvents';
import './styles.css';

export default function Tour ({ firstLogIn }) {
	const [tourToShow, setTour] = useState(null);
	const handleTourOpen = ({ detail }) => setTour(detail);
	const handleTourClose = () => setTour(null);
	const shouldViewOnboarding = () => {
		const diff = differenceInSeconds(new Date(), new Date(firstLogIn));
		return diff < 10;
	};

	useEffect(() => {
		EventEmitter.subscribe(TourEvents.open, handleTourOpen);
		EventEmitter.subscribe(TourEvents.close, handleTourClose);

		return () => {
			EventEmitter.unsubscribe(TourEvents.open, handleTourOpen);
			EventEmitter.unsubscribe(TourEvents.close, handleTourClose);
		};
	}, []);

	useEffect(() => {
		if (shouldViewOnboarding()) {
			EventEmitter.dispatch(TourEvents.open, Tours.welcome);
		}
	}, [firstLogIn]);

	if (!tourToShow) return null;

	return (
		<div className='tour-wrapper'>
			{tourToShow === Tours.welcome && <WelcomeTour />}
			{tourToShow === Tours.learner && <LearnerTour />}
			{tourToShow === Tours.coach && <CoachTour />}
			{tourToShow === Tours.scenarioCreation && <ScenarioCreationTour />}
		</div>
	);
}

Tour.propTypes = {
	firstLogIn: PropTypes.string,
};
