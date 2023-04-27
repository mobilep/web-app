import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { debounceTime, takeWhile } from 'rxjs/operators';

import { SearchIcon } from '../../../icons';
import { TextInput } from '../../molecules';

import './styles.css';

export default class SearchBox extends Component {

	static propTypes = {
		category: PropTypes.string,
		className: PropTypes.string,
		onChange: PropTypes.func,
		placeholder: PropTypes.string,
		view: PropTypes.string,
	};

	constructor (props) {
		super(props);
		this.createRxSubscription();

		this.state = {
			placeholder: props.placeholder,
			value: '',
			inFocus: false,
		};
	}

	createRxSubscription () {
		this.searchBoxChangeStream$ = new Subject();
		this.searchBoxChangeStream$
			.pipe(
				debounceTime(500),
				takeWhile(() => !this.searchBoxChangeStream$.isStopped)
			)
			.subscribe((value) => {
				this.props.onChange(value);
			});
	}

	componentWillUnmount () {
		this.searchBoxChangeStream$.unsubscribe();
	}

	componentDidUpdate (prevProps) {
		if (prevProps.view !== this.props.view) {
			// eslint-disable-next-line react/no-did-update-set-state
			this.setState({ value: '' });
		}
	}

	getClassName = (className) => classNames('SearchBox', className);

	handleChange = ({ target: { value } }) => {
		this.setState({ value });
		this.searchBoxChangeStream$.next(value);
	};

	handleBlur = () => {
		this.setState({ placeholder: this.props.placeholder, inFocus: false });
	};

	handleFocus = () => {
		this.setState({ placeholder: '', inFocus: true });
	};

	isCategory = () => {
		const { inFocus, value } = this.state;
		const { category } = this.props;

		return category && (inFocus || value);
	};

	render () {
		const { category, className, ...rest } = this.props;
		const { placeholder } = this.state;

		return (
			<div className={this.getClassName(className)}>
				<SearchIcon />
				{
					this.isCategory() &&
					<div className='SearchBox-category'>{category}</div>
				}
				<TextInput
					{ ...rest }
					value={this.state.value}
					className='SearchBox-inputBox'
					inputClassName='SearchBox-input'
					type='text'
					placeholder={placeholder}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
