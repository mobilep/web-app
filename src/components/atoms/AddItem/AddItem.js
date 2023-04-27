import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AddItemButton } from '..';
import './styles.css';

const getClassName = (className) => classNames('AddItem', className);

export default class AddItem extends PureComponent {

	static propTypes = {
		className: PropTypes.string,
		onChange: PropTypes.func,
		onNewItem: PropTypes.func,
		placeholder: PropTypes.string,
		value: PropTypes.string,
	}

	state = {
		value: '',
	}

	textInputRef = React.createRef();

	getInputValue () {
		const { value } = this.props;
		// eslint-disable-next-line
		return value === undefined ? this.state.value : value;
	}

	handleInputChange = ({ target }) => {
		const { value } = target;
		this.setState({ value });
		const { onChange = () => {} } = this.props;
		onChange(value);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.handleSubmitOrBlur();
		const { onChange = () => {} } = this.props;
		onChange('');
	}

	handleSubmitOrBlur = () => {
		const { onNewItem = () => {} } = this.props;
		const value = this.getInputValue();
		if (!value.trim()) return;
		onNewItem(value || this.state.value);
		this.setState({ value: '' });
	}

	handlePlusIconClick = () => {
		this.textInputRef.current.focus();
	}

	render () {
		// eslint-disable-next-line no-unused-vars
		const { placeholder, className, ...rest } = this.props;
		const value = this.getInputValue();
		delete rest.onNewItem;
		delete rest.notFound;

		return (
			<div className={getClassName(className)}>
				<form onSubmit={this.handleSubmit}>
					<AddItemButton className='AddItem-icon' onClick={this.handlePlusIconClick} />
					<input
						{...rest}
						ref={this.textInputRef}
						value={value}
						onChange={this.handleInputChange}
						className='AddItem-input'
						type='text'
						placeholder={placeholder}
					/>
				</form>
			</div>
		);
	}
}
