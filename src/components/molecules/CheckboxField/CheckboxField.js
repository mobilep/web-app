import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CheckIcon } from '../../../icons';

import './styles.css';

const CHECKBOX_POSITION = {
	start: 'start',
	end: 'end',
};

export default class CheckboxField extends Component {

	static propTypes = {
		checked: PropTypes.bool,
		children: PropTypes.any,
		className: PropTypes.string,
		contentPosition: PropTypes.oneOf([CHECKBOX_POSITION.start, CHECKBOX_POSITION.end]),
		name: PropTypes.string,
		onInputChange: PropTypes.func,
	}

	static defaultProps = {
		contentPosition: CHECKBOX_POSITION.end,
	}

	getClassName = (className) => {
		return classnames({
			CheckboxField: true,
		}, className);
	}

	render () {
		const { children, className, name, onInputChange, checked, contentPosition } = this.props;

		return (
			<label className={this.getClassName(className)}>
				{contentPosition === CHECKBOX_POSITION.start && children}
				<Fragment>
					<input type='checkbox'
						name={name}
						onChange={onInputChange}
						checked={checked}
					/>
					<span className='CheckboxField-checkmark'>
						<CheckIcon />
					</span>
				</Fragment>
				{contentPosition === CHECKBOX_POSITION.end && children}
			</label>
		);
	}

}
