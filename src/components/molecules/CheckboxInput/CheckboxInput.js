import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputError } from '..';
import './styles.css';

export default class CheckboxInput extends Component {

	static propTypes = {
		checkboxClassName: PropTypes.string,
		checked: PropTypes.bool,
		className: PropTypes.string,
		disabled: PropTypes.bool,
		errorClassName: PropTypes.string,
		errorColor: PropTypes.string,
		errorText: PropTypes.string,
		labelContent: PropTypes.any,
		name: PropTypes.string,
		onChange: PropTypes.func,
		required: PropTypes.bool,
		showError: PropTypes.bool,
	}

	state = {
		checked: false,
		showError: false,
		isValid: false,
	}

	static defaultProps = {}

	static getDerivedStateFromProps (nextProps) {
		const { showError } = nextProps;
		return { showError };
	}

	handleChange = (event) => {
		const { onChange = () => {} } = this.props;
		const el = event.currentTarget;
		const isValid = el.checkValidity();
		this.setState({ isValid, checked: event.currentTarget.checked }, () => onChange(el));
	}

	shouldShowError ({ showError, isValid } = this.state) {
		return showError && !isValid;
	}

	render () {
		const {
			checkboxClassName,
			className,
			disabled,
			errorClassName,
			errorColor,
			errorText,
			labelContent,
			name,
			required,
		} = this.props;
		return (
			<div className={`CheckboxInput-wrapper ${className}`}>
				<input
					type='checkbox'
					className={checkboxClassName}
					onChange={this.handleChange}
					name={name}
					id={name}
					value={this.state.checked}
					checked={this.state.checked}
					disabled={disabled}
					required={required}
				/>
				<label className='CheckboxInput-label' htmlFor={name}>
					{labelContent}
				</label>
				{this.shouldShowError()
					? <div className={'TextInput-errorText'}>
						<InputError
							color={errorColor}
							className={`TextInput-desktopError ${errorClassName}`}
							messageText={errorText}
						/>
						<span className={`TextInput-mobileError ${errorClassName}`}>{errorText}</span>
					</div>
					: null}
			</div>
		);
	}

}
