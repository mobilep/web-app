import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextInput } from '../../molecules';

import './styles.css';

export default class TextInputWithIcon extends Component {
	static propTypes = {
		className: PropTypes.string,
		icon: PropTypes.element,
		onChange: PropTypes.func,
		textInputProps: PropTypes.object,
		value: PropTypes.string,
	}

	getClassName = () => classNames('TextInputWithIcon', this.props.className);

	handleNameChange = ({ target: { value } }) => {
		this.props.onChange(value);
	}

	render () {
		const { value, textInputProps, icon } = this.props;

		return (
			<div className={this.getClassName()}>
				{icon}
				<TextInput
					type='text'
					value={value}
					onChange={this.handleNameChange}
					{...textInputProps}
				/>
			</div>
		);
	}
}
