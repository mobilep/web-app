import React, { useContext, useState, useEffect } from 'react';

import { LanguageContext } from '../../../utils';
import {
	scenarioCreateNewImg, scenarioCreateFormImg, scenarioCreateDescImg, scenarioCreateVideoImg,
	scenarioCreateStepsImg, scenarioCreateCriteriaImg, scenarioCreateLearnersImg, scenarioCreateSendImg,
	scenarioCreateNewFrImg, scenarioCreateFormFrImg, scenarioCreateDescFrImg, scenarioCreateVideoFrImg,
	scenarioCreateStepsFrImg, scenarioCreateCriteriaFrImg, scenarioCreateLearnersFrImg, scenarioCreateSendFrImg,
} from '../../../images';

import Slider from '../Slider';
import { Slide } from '../../atoms';

export default function ScenarioCreationTour () {
	const [images, setImages] = useState([]);
	const { onboarding, _contextSettings: { currentLanguage } } = useContext(LanguageContext);
	const { scenarioCreation } = onboarding;

	useEffect(() => {
		if (currentLanguage === 'fr') {
			setImages([
				scenarioCreateNewFrImg, scenarioCreateFormFrImg, scenarioCreateDescFrImg, scenarioCreateVideoFrImg,
				scenarioCreateStepsFrImg, scenarioCreateCriteriaFrImg, scenarioCreateLearnersFrImg,
				scenarioCreateSendFrImg,
			]);
		} else {
			setImages([
				scenarioCreateNewImg, scenarioCreateFormImg, scenarioCreateDescImg, scenarioCreateVideoImg,
				scenarioCreateStepsImg, scenarioCreateCriteriaImg, scenarioCreateLearnersImg, scenarioCreateSendImg,
			]);
		}
	}, []);

	return (
		<Slider>
			<Slide title={scenarioCreation.slide1.title} imageSrc={images[0]}>
				<div>{scenarioCreation.slide1.text}</div>
			</Slide>
			<Slide title={scenarioCreation.slide2.title} imageSrc={images[1]}>
				<div>{scenarioCreation.slide2.text}</div>
			</Slide>
			<Slide title={scenarioCreation.slide3.title} imageSrc={images[2]}>
				<div>{scenarioCreation.slide3.text}</div>
			</Slide>
			<Slide title={scenarioCreation.slide4.title} imageSrc={images[3]}>
				<div>{scenarioCreation.slide4.text}</div>
			</Slide>
			<Slide title={scenarioCreation.slide5.title} imageSrc={images[4]}>
				<div>{scenarioCreation.slide5.text}</div>
			</Slide>
			<Slide title={scenarioCreation.slide6.title} imageSrc={images[5]}>
				<div>{scenarioCreation.slide6.text}</div>
			</Slide>
			<Slide title={scenarioCreation.slide7.title} imageSrc={images[6]}>
				<div>{scenarioCreation.slide7.text}</div>
			</Slide>
			<Slide title={scenarioCreation.slide8.title} imageSrc={images[7]}>
				<div>{scenarioCreation.slide8.text}</div>
			</Slide>
		</Slider>
	);
}
