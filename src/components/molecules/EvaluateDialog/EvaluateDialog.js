import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
	Avatar,
	EvaluationRange,
	Form,
	Button,
} from '../..';

import './styles.css';

export default class EvaluateDialog extends Component {

	handleFormSubmit = (inputValues) => {
		const { onSubmit } = this.props;
		onSubmit(inputValues);
	}

	handleCancel = (event) => {
		const { onCancel = () => {} } = this.props;

		onCancel(event);
	}

	getEvaluationRanges = () => {
		const {
			disabled,
			marks,
			scenarioCriterias,
			userMark,
			learnerName,
			coachTitle,
			user,
			text: { userEvaluationCriterias: { experience, work, recommend } },
			criteriaLists,
		} = this.props;
		let { evaluationList } = this.props;

		const evaluated = marks.length > 0;
		if (evaluated) {
			evaluationList = marks;
		}

		const { criteriaExperience, criteriaWork, criteriaRecommend } = criteriaLists;

		const scenarioCriteriasArray = Object.values(scenarioCriterias);
		return evaluationList.map((evaluation, index) => {
			let name = evaluated && evaluation._criteria ? evaluation._criteria.name : evaluation.title;
			let key = evaluated && evaluation._criteria ? evaluation._criteria._id : evaluation.id;
			const currentScenarioCriteria = scenarioCriteriasArray[index];
			if (evaluation._criteria) {

				if (evaluation._criteria.name === experience) {
					if (!coachTitle && !user) {
						name = criteriaExperience.replace('{You}', learnerName).replace('{Your}', learnerName);
					} else {
						name = scenarioCriterias[0].title;
					}
				}

				if (evaluation._criteria.name === work) {
					if (!coachTitle && !user) {
						name = criteriaWork.replace('{You}', learnerName).replace('{Your}', learnerName);
					} else {
						name = scenarioCriterias[1].title;
					}
				}

				if (evaluation._criteria.name === recommend) {
					if (!coachTitle && !user) {
						name = criteriaRecommend.replace('{You}', learnerName).replace('{Your}', learnerName);
					} else {
						name = scenarioCriterias[2].title;
					}
				}
			}

			if (evaluated && userMark === marks && user) {
				name = currentScenarioCriteria.title;
			}
			if (!evaluated && user) {
				name = currentScenarioCriteria.title;
			}
			if (evaluated && !evaluation._criteria) {
				key = currentScenarioCriteria.id;
			}

			return (<div className='EvaluateDialog-row' key={key}>
				<div className='EvaluateDialog-rangeTitle'>
					{name}
				</div>
				<EvaluationRange
					start={1}
					end={5}
					value={evaluated ? evaluation.mark : 3}
					name={key}
					disabled={disabled}
					required
				/>
			</div>
			);
		});
	}

	getButtonsClassName = (disabled) => classNames({
		'EvaluateDialog-row': true,
		'EvaluateDialog-row-invisible': disabled,
	});

	getClassName = (className) => classNames({
		EvaluateDialog: true,
	}, className);

	render () {
		const {
			className,
			fullName,
			img,
			initials,
			skills,
			text: {
				cancel,
				send,
				paragraph,
				titleCoach,
				titleUser,
			},
			disabled,
			coachTitle,
			user,
			text,
			learnerName,
			avatarColor,
		} = this.props;

		let title = coachTitle ? titleCoach.replace('{fullName}', fullName)
			.replace('{scenario}', `"${skills}"`) : titleUser;
		if (!coachTitle && !user) {
			title = text.coachViewOfLearnerEvaluat.replace('{scenario}', `"${skills}"`)
				.replace('{fullName}', learnerName);
		} else if (coachTitle && user) {
			title = text.learnerViewOfEvaluat.replace('{scenario}', `"${skills}"`);
		}

		return (
			<div className={this.getClassName(className)}>
				<div className='EvaluateDialog--avatar'>
					<Avatar
						initials={initials}
						img={img}
						color={avatarColor}
						size={Avatar.AVATAR_SIZES.AVATAR_80}
					/>
				</div>
				<div className='EvaluateDialog-header'>
					{title}
				</div>
				<div className='EvaluateDialog-paragraph'>
					{paragraph}
				</div>
				<div className='EvaluateDialog-range'>
					<Form onSubmit={this.handleFormSubmit}>
						{this.getEvaluationRanges()}

						<div className={this.getButtonsClassName(disabled)}>
							{!disabled
								? <Fragment><Button onClick={this.handleCancel} primary color='grey'>{cancel}</Button>
									<Form.Button color='red'>{send}</Form.Button>
								</Fragment>
								: null}
						</div>

					</Form>
				</div>
			</div>
		);
	}
}

EvaluateDialog.defaultProps = {
	onSubmit: () => {},
	onCancel: () => {},
};

EvaluateDialog.propTypes = {
	avatarColor: PropTypes.string,
	className: PropTypes.string,
	coachTitle: PropTypes.bool,
	criteriaLists: PropTypes.object,
	disabled: PropTypes.bool,
	evaluationList: PropTypes.array,
	fullName: PropTypes.string,
	img: PropTypes.string,
	initials: PropTypes.string.isRequired,
	learnerName: PropTypes.string,
	marks: PropTypes.array,
	onCancel: PropTypes.func,
	onSubmit: PropTypes.func,
	scenarioCriterias: PropTypes.array,
	skills: PropTypes.string,
	text: PropTypes.object,
	user: PropTypes.bool,
	userMark: PropTypes.array,
};
