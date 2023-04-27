import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './styles.css';
import { TextInput } from '../..';

import { inputErrorConstants } from '../InputError';
const { COLOR } = inputErrorConstants;

export default class ScenarioTextInput extends Component {

	static propTypes = {
		inputClassName: PropTypes.string,
	}

	static defaultProps = {}

	getClassName ({ inputClassName } = this.props) {
		return classNames('ScenarioTextInput', inputClassName);
	}

	render () {
		const className = this.getClassName();
		return (
			<TextInput
				required
				scenarioInput
				errorColor={COLOR.RED_ICON}
				{...this.props}
				popUpPosition='bottomRightPopUp'
				inputClassName={className}
				errorClassName='ScenarioTextInput-error'
			/>
		);
	}
}
