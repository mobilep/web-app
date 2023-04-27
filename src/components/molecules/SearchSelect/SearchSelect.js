import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Subject } from 'rxjs';
import { tap, debounceTime, takeWhile, map } from 'rxjs/operators';
import { AddItem } from '../../atoms';
import { SelectList } from '..';
import './styles.css';

export default class SearchSelect extends Component {
	static propTypes = {
		className: PropTypes.string,
		createItemId: PropTypes.symbol,
		itemIdKey: PropTypes.string,
		itemValueKey: PropTypes.string,
		items: PropTypes.array,
		notFoundItemId: PropTypes.symbol,
		onCreateItem: PropTypes.func,
		onSearch: PropTypes.func,
		onSelect: PropTypes.func,
		placeholder: PropTypes.string,
	}

	static defaultProps = {
		onSearch: () => {},
		onSelect: () => {},
	}

	state = {
		inputValue: '',
		showList: false,
		selectedItemIndex: null,
	}

	ref = createRef();

	handleItemMouseOver = (selectedItemIndex) =>
		this.setState({ selectedItemIndex })

	componentDidMount () {
		document.addEventListener('click', this.handleDocumentClick);

		this.inputChangeStream$ = new Subject();
		this.inputChangeStream$
			.pipe(
				tap((inputValue) =>
					this.setState({
						selectedItemIndex: null,
						showList: true,
						inputValue,
					})),
				map((inputValue) => inputValue.trim()),
				debounceTime(150),
				takeWhile(() => !this.inputChangeStream$.isStopped)
			)
			.subscribe(this.props.onSearch);
	}

	componentWillUnmount () {
		document.removeEventListener('click', this.handleDocumentClick);
		this.inputChangeStream$.unsubscribe();
	}

	handleDocumentClick = (event) => {
		const { target } = event;
		const { showList } = this.state;
		if (!this.ref.current) return;
		const isSearchSelectAreaClick = this.ref.current.contains(target);
		if (!showList || isSearchSelectAreaClick) return;
		this.setState({ showList: false });
	}

	getDecreasedIndex (selectedItemIndex = this.state.selectedItemIndex) {
		let nextIndex;
		if (selectedItemIndex === null) {
			nextIndex = this.props.items.length - 1;
		} else {
			nextIndex = selectedItemIndex - 1;
		}
		return nextIndex;
	}

	getIncreasedIndex (selectedItemIndex = this.state.selectedItemIndex) {
		let nextIndex;
		if (selectedItemIndex === null) {
			nextIndex = 0;
		} else {
			nextIndex = selectedItemIndex + 1;
		}
		return nextIndex;
	}

	handleKeyDown = (event) => {
		const key = event.key.toLowerCase();
		if (!['arrowdown', 'arrowup', 'enter'].includes(key)) return;
		const { items, itemIdKey } = this.props;
		const { length: itemsLength } = items;
		const { selectedItemIndex: currentItemIndex } = this.state;
		let selectedItemIndex;
		switch (key) {
			case 'enter':
				if (this.state.selectedItemIndex !== null) {
					this.handleSelect(this.props.items[this.state.selectedItemIndex][itemIdKey]);
				}
				return;
			case 'arrowdown':
				selectedItemIndex = currentItemIndex !== itemsLength - 1
					? this.getIncreasedIndex()
					: null;
				return this.setState({ selectedItemIndex });
			case 'arrowup':
				selectedItemIndex = currentItemIndex !== 0
					? this.getDecreasedIndex()
					: null;
				return this.setState({ selectedItemIndex });
			default:
				break;
		}
	}

	handleSelect = (selectedId) => {
		const { itemIdKey, items, createItemId, notFoundItemId, onCreateItem } = this.props;
		if (selectedId === notFoundItemId) return;
		const selectedCriteria = items.find((item) => item[itemIdKey] === selectedId);
		if (selectedId === createItemId) {
			onCreateItem(selectedCriteria.name);
		} else {
			this.props.onSelect(selectedCriteria);
		}
		this.setState({ selectedItemIndex: null, showList: false, inputValue: '' });
	}

	handleFocus = () =>
		this.setState({ showList: true });

	handleChange = (value) =>
		this.inputChangeStream$.next(value);

	shouldRenderList ({ showList } = this.state, { items } = this.props) {
		return showList && !!items.length;
	}

	render () {
		const { className, placeholder, items, itemIdKey, itemValueKey } = this.props;
		const { inputValue, selectedItemIndex } = this.state;
		return (
			<div ref={this.ref} className={`SearchSelect ${className}`}>
				<AddItem
					maxLength={128}
					placeholder={placeholder}
					onFocus={this.handleFocus}
					onKeyDown={this.handleKeyDown}
					onChange={this.handleChange}
					value={inputValue}
				/>
				{
					this.shouldRenderList() &&
					<SelectList
						itemIdKey={itemIdKey}
						itemValueKey={itemValueKey}
						className='SearchSelect-selectList'
						selectedItem={selectedItemIndex}
						onSelect={this.handleSelect}
						items={items}
						onMouseOver={this.handleItemMouseOver}
					/>
				}
			</div>
		);
	}
}
