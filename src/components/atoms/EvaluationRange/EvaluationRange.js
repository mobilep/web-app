import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class EvaluationRange extends Component {

	state = {
		value: 0,
	}

	handleChange = (event) => {
		const { onChange } = this.props;
		const { value } = event.target;

		this.setState({ value: +value });
		onChange(event);
	}

	getEvaluationsList = (start, end) => {
		const listLength = Math.abs(end - start) + 1;
		return Array(listLength).fill().map((e, i) => (start < end) ? (start + i) : (start - i));
	}

	render () {
		const { value } = this.state;
		const {
			start,
			end,
			name,
			disabled,
			required,
		} = this.props;

		const propValue = this.props.value;

		return (
			<div className='EvaluationRange'>
				{this.getEvaluationsList(start, end).map((evaluation) => (
					<div className='EvaluationRange-evaluation' key={evaluation}>
						<input
							required={required}
							type='radio'
							name={name}
							id={`${name}-${evaluation}`}
							checked={propValue && disabled
								? propValue === evaluation
								: value === evaluation}
							onChange={this.handleChange}
							value={evaluation}
							disabled={disabled}
						/>
						<label htmlFor={`${name}-${evaluation}`}>{evaluation}</label>
					</div>
				))}
			</div>
		);
	}
}

EvaluationRange.defaultProps = {
	start: 1,
	end: 5,
	onChange: () => {},
	name: 'evaluation',
};

EvaluationRange.propTypes = {
	disabled: PropTypes.bool,
	end: PropTypes.number,
	name: PropTypes.string,
	onChange: PropTypes.func,
	required: PropTypes.bool,
	start: PropTypes.number,
	value: PropTypes.number,
};
