import React, { useContext, useState, useEffect } from 'react';
import Slider from './../Slider';
import { LanguageContext } from '../../../utils';

import { Slide, Button } from '../../atoms';
import {
	welcomeScenariosImg, welcomeMessagesImg, welcomeTeamsImg,	welcomeProfileImg, welcomeSettingsImg,
	welcomeScenariosFrImg, welcomeMessagesFrImg, welcomeTeamsFrImg,	welcomeProfileFrImg, welcomeSettingsFrImg,
	logoImg, questionsImg,
} from '../../../images';
import { EventEmitter } from '../../../utils/eventEmitter';
import { TourEvents, Tours } from '../Tour/TourEvents';

export default function WelcomeTour () {
	const [images, setImages] = useState([]);
	const { onboarding, _contextSettings: { currentLanguage } } = useContext(LanguageContext);
	const { welcome } = onboarding;

	const openCoachTour = () => EventEmitter.dispatch(TourEvents.open, Tours.coach);
	const openScenarioCreationTour = () => EventEmitter.dispatch(TourEvents.open, Tours.scenarioCreation);
	const openLearnerTour = () => EventEmitter.dispatch(TourEvents.open, Tours.learner);
	const closeTour = () => EventEmitter.dispatch(TourEvents.close);

	useEffect(() => {
		if (currentLanguage === 'fr') {
			setImages([
				logoImg, welcomeScenariosFrImg, welcomeMessagesFrImg,
				welcomeTeamsFrImg, welcomeProfileFrImg, welcomeSettingsFrImg, questionsImg,
			]);
		} else {
			setImages([
				logoImg, welcomeScenariosImg, welcomeMessagesImg,
				welcomeTeamsImg, welcomeProfileImg, welcomeSettingsImg, questionsImg,
			]);
		}
	}, []);

	return (
		<Slider>
			<Slide title={welcome.slide1.title} imageSrc={images[0]}>
				<div>{welcome.slide1.text}</div>
			</Slide>
			<Slide title={welcome.slide2.title} imageSrc={images[1]}>
				<div>{welcome.slide2.text}</div>
			</Slide>
			<Slide title={welcome.slide3.title} imageSrc={images[2]}>
				<div>{welcome.slide3.text}</div>
			</Slide>
			<Slide title={welcome.slide4.title} imageSrc={images[3]}>
				<div>{welcome.slide4.text}</div>
			</Slide>
			<Slide title={welcome.slide5.title} imageSrc={images[4]}>
				<div>{welcome.slide5.text}</div>
			</Slide>
			<Slide title={welcome.slide6.title} imageSrc={images[5]}>
				<div>{welcome.slide6.text}</div>
			</Slide>
			<Slide title={welcome.slide7.title} imageSrc={images[6]}>
				<div>
					<Button className='Button-text w-100' onClick={openCoachTour}>
						{onboarding.tutorials.coach}
					</Button>
					<Button className='Button-text w-100' onClick={openScenarioCreationTour}>
						{onboarding.tutorials.scenarioCreation}
					</Button>
					<Button className='Button-text w-100' onClick={openLearnerTour}>
						{onboarding.tutorials.learner}
					</Button>
					<Button className='Button-text w-100' onClick={closeTour}>
						{onboarding.startExploring}
					</Button>
				</div>
			</Slide>
		</Slider>
	);
}
