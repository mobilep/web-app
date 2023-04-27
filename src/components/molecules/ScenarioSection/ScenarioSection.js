import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { InputError } from '../../molecules';

import './styles.css';

export default class ScenarioSection extends Component {

	static propTypes = {
		children: PropTypes.any,
		className: PropTypes.string,
		counter: PropTypes.number,
		errorText: PropTypes.string,
		header: PropTypes.string,
		showValidationError: PropTypes.bool,
	}

	getClassName (className) {
		return classNames('ScenarioSection', className);
	}

	render () {
		const {
			className,
			header,
			counter,
			children,
			showValidationError,
			errorText,
		} = this.props;
		const counterText = counter ? `(${counter})` : null;

		return (
			<div className={this.getClassName(className)}>
				<div className='ScenarioSection-header'>
					{header} {counterText}
				</div>
				<div className='ScenarioSection-wrapperContent'>
					<div className='ScenarioSection-content'>
						{children}
					</div>
					{showValidationError &&
						<div className='ScenarioSection-errorContent'>
							<InputError popUpPosition='topRightPopUp' color='red' messageText={errorText} />
						</div>}
				</div>
			</div>
		);
	}

}
