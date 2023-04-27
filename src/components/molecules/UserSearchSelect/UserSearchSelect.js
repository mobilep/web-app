import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { AddItem, UserSelectList } from '../../atoms';

import './styles.css';

const ADD_ITEM_CLASS_NAME = 'UserSearchSelect-addItem';
export default class UserSearchSelect extends Component {

	static propTypes = {
		className: PropTypes.string,
		items: PropTypes.array,
		notFound: PropTypes.bool,
		notFoundMessage: PropTypes.string,
		onRemoveValue: PropTypes.func,
		onSearch: PropTypes.func,
		onSelect: PropTypes.func,
		onSelectInput: PropTypes.func,
		placeholder: PropTypes.string,
		userSearchFetching: PropTypes.bool,
	}

	static defaultProps = {
		onSearch: () => {},
		onSelect: () => {},
		placeholder: 'Add a person',
	}

	state = {
		inputValue: '',
		showList: false,
		selectedItemIndex: null,
	}

	handleItemMouseOver = (selectedItemIndex) =>
		this.setState({ selectedItemIndex })

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
		const { length: itemsLength } = this.props.items;
		const { selectedItemIndex: currentItemIndex } = this.state;
		let selectedItemIndex;
		switch (key) {
			case 'enter':
				if (this.state.selectedItemIndex !== null) {
					this.handleSelect(this.props.items[this.state.selectedItemIndex].id);
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

	handleSelect = (userId) => {
		const { onRemoveValue } = this.props;
		this.props.onSelect(
			this.props.items.find(({ id }) => id === userId)
		);
		this.setState({ selectedItemIndex: null, showList: false, inputValue: '' });
		onRemoveValue();
	}

	handleBlur = () => {
		const { notFound } = this.props;
		if (this.state.selectedItemIndex !== null && !notFound) {
			// means user clicks on the item in the list
			this.handleSelect(this.props.items[this.state.selectedItemIndex].id);
		}
		this.setState({ showList: false });
	}

	handleFocus = () => {
		const { notFound, items, onRemoveValue } = this.props;
		if (!notFound && !items) {
			this.setState({ showList: true });
		}
		onRemoveValue();
	}

	handleChange = (inputValue) => {
		const { onRemoveValue, onSearch = () => {} } = this.props;
		this.setState({
			selectedItemIndex: null,
			showList: !!inputValue.trim().length,
			inputValue,
		}, () => {
			if (!inputValue) onRemoveValue();
			onSearch(inputValue);
		});
	}

	shouldRenderList ({ showList } = this.state) {
		return showList;
	}

	getAddItemInputDimensions () {
		const userSearchInput = document.querySelector(`.${ADD_ITEM_CLASS_NAME} input`);
		const userSearchInputWidth = userSearchInput && userSearchInput.getBoundingClientRect();
		return userSearchInputWidth || {};
	}

	render () {
		const { className,
			placeholder,
			userSearchFetching,
			notFound, notFoundMessage,
			items,
			onSelectInput } = this.props;
		const { inputValue, selectedItemIndex } = this.state;
		const inputDimensions = this.getAddItemInputDimensions();
		const addItemInputWidth = inputDimensions.width;
		const domNodeForPortal = document.querySelector('.Scenarios-peopleDropdown');
		const domNodeForPortalDimensions = domNodeForPortal && domNodeForPortal.getBoundingClientRect();
		const topOffsetUserSearchSelectDomNode = (domNodeForPortalDimensions || {}).top - inputDimensions.bottom;
		return (
			<div className={`UserSearchSelect ${className}`}>
				<AddItem
					className={ADD_ITEM_CLASS_NAME}
					placeholder={placeholder}
					onFocus={this.handleFocus}
					onBlur={this.handleBlur}
					notFound={notFound}
					onKeyDown={this.handleKeyDown}
					onChange={this.handleChange}
					value={inputValue}
				/>
				{
					this.shouldRenderList() && domNodeForPortal &&
					ReactDOM.createPortal(
						<UserSelectList
							selectInput={onSelectInput}
							notFoundMessage={notFoundMessage}
							userSearchFetching={userSearchFetching}
							notFound={notFound}
							className='UserSearchSelect-userSearchSelect'
							selectedItem={selectedItemIndex}
							onSelect={this.handleSelect}
							items={items}
							onMouseOver={this.handleItemMouseOver}
							styles={{
								width: addItemInputWidth,
								top: `-${topOffsetUserSearchSelectDomNode}px`,
								position: 'absolute',
							}}
						/>,
						domNodeForPortal)
				}
			</div>
		);
	}

}
