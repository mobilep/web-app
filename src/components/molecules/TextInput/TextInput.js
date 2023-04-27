import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button } from '../../atoms';
import { InputError } from '..';
import { EyeIcon, EyeFillIcon } from '../../../icons';
import './styles.css';

// eslint-disable-next-line max-len
const EMAIL_PATTERN = '^[a-zA-ZÀ-ž0-9!#$%&\'*+/=?^_`{|}~.-]+@[a-zA-ZÀ-ž0-9]([a-zA-ZÀ-ž0-9-]*[a-z0-9])?(.[a-zA-ZÀ-ž0-9]([a-zA-ZÀ-ž0-9-]*[a-zA-ZÀ-ž0-9])?)*';
const PASSWORD_PATTERN = '^.{8,}$';

export default class TextInput extends Component {

	state = {
		inFocus: false,
		isShowingPassword: false,
		showError: false,
		isValid: false,
	}

	static getDerivedStateFromProps (nextProps) {
		const { showError } = nextProps;
		return { showError };
	}

	componentDidUpdate (prevProps) {
		if (prevProps.pattern !== this.props.pattern) {
			this.checkValidity();
		}
	}
	componentDidMount () {
		this.checkValidity();
	}

	getClassName ({ inputClassName, type }) {
		const { isValid, inFocus } = this.state;

		return classNames({
			TextInput: true,
			'TextInput-invalid': !isValid,
			'TextInput-focus': inFocus,
			'TextInput-passwordType': type === 'password',
		}, inputClassName);
	}

	checkValidity (event = {}) {
		const el = event.currentTarget || event.target || this.el;
		const isValid = el.checkValidity() && el.value.trim();
		this.setState({ isValid });
		return isValid;
	}

	getRef = (el) => {
		this.el = el;
	}

	getPattern () {
		if (this.props.pattern) return this.props.pattern;
		switch (this.props.type) {
			case 'email': return EMAIL_PATTERN;
			case 'password': return PASSWORD_PATTERN;
			default: return null;
		}
	}

	handleBlur = (event) => {
		event.currentTarget.value = event.currentTarget.value.trim();
		this.showError();
		this.checkValidity(event);
		this.setState({ inFocus: false });
		this.props.onBlur(event);
	}

	handleChange = (event) => {
		const input = event.currentTarget;
		if (input.maxLength !== -1 && input.value.length > input.maxLength) {
			input.value = input.value.substring(0, input.maxLength);
		}

		this.showError(false);
		const isValid = this.checkValidity(event);
		this.props.onChange(event, isValid);
	}

	handleFocus = (event) => {
		this.setState({ inFocus: true });
		return this.props.onFocus(event);
	}

	handleKeyPress = (event) => {
		if (!isFinite(event.key)) {
			event.preventDefault();
		}
	}

	handlePasswordMaskToggle = () => {
		this.setState(({ isShowingPassword }) =>
			({ isShowingPassword: !isShowingPassword }));
	}

	passwordIcon = () => {
		const { isShowingPassword } = this.state;

		return isShowingPassword
			? <EyeFillIcon />
			: <EyeIcon />;
	}

	showError (showError = true) {
		this.setState((state) => {
			if (state.showError === showError) return null;
			return { showError };
		});
	}

	getInputTypeToRender = () => {
		const { scenarioInput } = this.props;
		this.mql = window.matchMedia('(max-width: 768px)');
		return this.mql.matches && scenarioInput;
	}

	shouldShowError ({ showError, isValid } = this.state) {
		return showError && !isValid;
	}

	render () {
		const inputClassName = this.getClassName(this.props);
		const isMobileInput = this.getInputTypeToRender();
		const {
			autocomplete,
			ariaLabel,
			autoFocus,
			className,
			defaultValue,
			disabled,
			errorText,
			max,
			maxLength,
			min,
			minLength,
			name,
			placeholder,
			popUpPosition,
			required,
			type,
			value,
			errorColor,
			errorClassName,
		} = this.props;
		return (

			<div className={`TextInput-wrapper ${className}`}>
				{
					type === 'password' &&
					<Button className='TextInput-toggleBtn' onClick={this.handlePasswordMaskToggle} >
						{this.passwordIcon()}
					</Button>
				}
				{isMobileInput
					? <textarea
						className='TextInput-scenario-textarea'
						required
						maxLength={maxLength}
						onBlur={this.handleBlur}
						onChange={this.handleChange}
						onFocus={this.handleFocus}
						ref={this.getRef}
						value={value}
						placeholder={placeholder} />
					: <input
						autoComplete={autocomplete}
						aria-label={ariaLabel}
						autoFocus={autoFocus}
						className={inputClassName}
						defaultValue={defaultValue}
						disabled={disabled}
						onKeyPress={type === 'number' ? this.handleKeyPress : null}
						max={max}
						maxLength={maxLength}
						min={min}
						name={name}
						onBlur={this.handleBlur}
						onChange={this.handleChange}
						onFocus={this.handleFocus}
						pattern={this.getPattern()}
						minLength={minLength}
						placeholder={placeholder}
						ref={this.getRef}
						required={required}
						type={this.state.isShowingPassword ? 'text' : type}
						value={value}
					/>
				}

				{this.shouldShowError()
					? <div className={'TextInput-errorText'}>
						<InputError
							color={errorColor}
							className={`TextInput-desktopError ${errorClassName}`}
							popUpPosition={!popUpPosition ? 'topLeftPopUp' : popUpPosition}
							messageText={errorText}
						/>
						<span className={`TextInput-mobileError ${errorClassName}`}>{errorText}</span>
					</div>
					: ''}
			</div>
		);
	}
}

TextInput.defaultProps = {
	type: 'text',
	onBlur: () => { },
	onFocus: () => { },
	onChange: () => { },
};

TextInput.propTypes = {
	ariaLabel: PropTypes.string,
	autoFocus: PropTypes.bool,
	autocomplete: PropTypes.string,
	browserInfo: PropTypes.object,
	className: PropTypes.string,
	defaultValue: PropTypes.string,
	disabled: PropTypes.bool,
	errorClassName: PropTypes.string,
	errorColor: PropTypes.string,
	errorText: PropTypes.string,
	initialValue: PropTypes.string,
	inputClassName: PropTypes.string,
	max: PropTypes.number,
	maxLength: PropTypes.number,
	min: PropTypes.number,
	minLength: PropTypes.number,
	name: PropTypes.string.isRequired,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	pattern: PropTypes.string,
	placeholder: PropTypes.string,
	popUpPosition: PropTypes.string,
	required: PropTypes.bool,
	scenarioInput: PropTypes.bool,
	showError: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string,
};
