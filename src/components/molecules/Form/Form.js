import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ButtonWithArrow } from '../../atoms';
import { TextInput, CheckboxInput } from '..';
import './styles.css';

const getClassName = (baseName, { className }) => (
	classNames(baseName, className)
);
const { Consumer, Provider } = createContext();

export default class Form extends Component {

	state = {
		showError: false,
	}

	getInputValues (formData) {
		return Array.from(formData.entries())
			.reduce((prev, curr) => {
				const [key, value] = curr;
				prev[key] = value;
				return prev;
			}, {});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ showError: true });
		const form = event.target;
		if (!form.checkValidity()) return;
		const formData = new FormData(form);
		const inputValues = this.getInputValues(formData);
		this.props.onSubmit(inputValues);
	}

	render () {
		const { children, className, header, paragraph } = this.props;
		return (
			<div className={`Form ${className}`}>
				{
					header &&
					<div className='Form-header'>{header}</div>
				}
				{
					paragraph &&
					<div className='Form-paragraph'>{paragraph}</div>
				}

				<form
					className='Form-form'
					noValidate
					onSubmit={this.handleSubmit}
				>
					<Provider value={{ ...this.state }}>
						{children}
					</Provider>
				</form>
			</div>
		);
	}
}

Form.TextInput = (props) => (
	<Consumer>
		{({ showError }) => (
			<TextInput
				{...props} {...{ showError }}
				className={getClassName('Form-textInputWrapper', props)}
			/>)}
	</Consumer>
);

Form.Checkbox = (props) => (
	<Consumer>
		{({ showError }) => (
			<CheckboxInput
				{...props} {...{ showError }}
				className={getClassName('Form-textInputWrapper', props)}
			/>)}
	</Consumer>
);

Form.Button = (props) =>
	<ButtonWithArrow {...props} type='submit' className={getClassName('Form-buttonWrapper', props)} />;

Form.defaultProps = {
	onSubmit: () => {},
	className: '',
};

Form.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	header: PropTypes.string,
	onSubmit: PropTypes.func,
	paragraph: PropTypes.string,
	submitting: PropTypes.bool,
};
