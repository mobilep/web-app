import React, { useContext, useState, useEffect } from 'react';

import { LanguageContext } from '../../../utils';
import {
	learnerScenarioImg, learnerPracticeImg, learnerAskImg, learnerRecordImg, learnerEvaluateImg,
	learnerScenarioFrImg, learnerPracticeFrImg, learnerAskFrImg, learnerRecordFrImg, learnerEvaluateFrImg,
} from '../../../images';

import Slider from '../Slider';
import { Slide } from '../../atoms';

export default function LearnerTour () {
	const [images, setImages] = useState([]);
	const { onboarding, _contextSettings: { currentLanguage } } = useContext(LanguageContext);
	const { learner } = onboarding;

	useEffect(() => {
		if (currentLanguage === 'fr') {
			setImages([
				learnerScenarioFrImg, learnerPracticeFrImg, learnerAskFrImg, learnerRecordFrImg, learnerEvaluateFrImg,
			]);
		} else {
			setImages([
				learnerScenarioImg, learnerPracticeImg, learnerAskImg, learnerRecordImg, learnerEvaluateImg,
			]);
		}
	}, []);

	return (
		<Slider>
			<Slide title={learner.slide1.title} imageSrc={images[0]}>
				<div>{learner.slide1.text}</div>
			</Slide>
			<Slide title={learner.slide2.title} imageSrc={images[1]}>
				<div>{learner.slide2.text}</div>
			</Slide>
			<Slide title={learner.slide3.title} imageSrc={images[2]}>
				<div>{learner.slide3.text}</div>
			</Slide>
			<Slide title={learner.slide4.title} imageSrc={images[3]}>
				<div>{learner.slide4.text}</div>
			</Slide>
			<Slide title={learner.slide5.title} imageSrc={images[4]}>
				<div>{learner.slide5.text}</div>
			</Slide>
		</Slider>
	);
}
