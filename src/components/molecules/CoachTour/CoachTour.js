import React, { useContext, useState, useEffect } from 'react';

import { LanguageContext } from '../../../utils';
import {
	coachPanelImg, sendReminderImg, coachPracticeImg, coachBestPracticeImg, coachEvaluateImg,
	coachPanelFrImg, sendReminderFrImg, coachPracticeFrImg, coachBestPracticeFrImg, coachEvaluateFrImg,
} from '../../../images';
import Slider from '../Slider';
import { Slide } from '../../atoms';

export default function CoachTour () {
	const [images, setImages] = useState([]);
	const { onboarding, _contextSettings: { currentLanguage } } = useContext(LanguageContext);
	const { coach } = onboarding;

	useEffect(() => {
		if (currentLanguage === 'fr') {
			setImages([
				coachPanelFrImg, sendReminderFrImg, coachPracticeFrImg, coachBestPracticeFrImg, coachEvaluateFrImg,
			]);
		} else {
			setImages([
				coachPanelImg, sendReminderImg, coachPracticeImg, coachBestPracticeImg, coachEvaluateImg,
			]);
		}
	}, []);

	return (
		<Slider>
			<Slide title={coach.slide1.title} imageSrc={images[0]}>
				<div>{coach.slide1.text}</div>
			</Slide>
			<Slide title={coach.slide2.title} imageSrc={images[1]}>
				<div>{coach.slide2.text}</div>
			</Slide>
			<Slide title={coach.slide3.title} imageSrc={images[2]}>
				<div>{coach.slide3.text}</div>
			</Slide>
			<Slide title={coach.slide4.title} imageSrc={images[3]}>
				<div>{coach.slide4.text}</div>
			</Slide>
			<Slide title={coach.slide5.title} imageSrc={images[4]}>
				<div>{coach.slide5.text}</div>
			</Slide>
		</Slider>
	);
}
