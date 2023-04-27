import React, { useContext, Fragment } from 'react';

import { LanguageContext } from '../../../utils';
import { EventEmitter } from '../../../utils/eventEmitter';
import { TourEvents, Tours } from '../Tour/TourEvents';
import { Button } from '../..';
import './styles.css';

export default function Tutorials () {
	const { onboarding } = useContext(LanguageContext);

	const openWelcomeTour = () => EventEmitter.dispatch(TourEvents.open, Tours.welcome);
	const openCoachTour = () => EventEmitter.dispatch(TourEvents.open, Tours.coach);
	const openScenarioCreationTour = () => EventEmitter.dispatch(TourEvents.open, Tours.scenarioCreation);
	const openLearnerTour = () => EventEmitter.dispatch(TourEvents.open, Tours.learner);

	return (
		<Fragment>
			<Button className='Button-text Tutorials-item p-a-0' onClick={openWelcomeTour}>
				{onboarding.tutorials.welcome}
			</Button>
			<Button className='Button-text Tutorials-item p-a-0' onClick={openCoachTour}>
				{onboarding.tutorials.coach}
			</Button>
			<Button className='Button-text Tutorials-item p-a-0' onClick={openScenarioCreationTour}>
				{onboarding.tutorials.scenarioCreation}
			</Button>
			<Button className='Button-text Tutorials-item p-a-0' onClick={openLearnerTour}>
				{onboarding.tutorials.learner}
			</Button>
		</Fragment>
	);
}
