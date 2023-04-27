import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AddItem, UserLabel, UserSelectList } from '../../atoms';
import { TrashIcon } from '../../../icons';
import { keyMap } from './constants';

import './styles.css';

const defaultState = {
	isAutoCompleteOpen: false,
	addUserValue: '',
	currentItem: null,
	selectedAutoCompleteItem: -1,
	currentAutoCompleteItems: [],
};

export default class AddList extends Component {

	state = defaultState;

	handleRemoveClick = (id) => () => this.props.onItemRemove(id);

	handleInputBlur = () => this.setState({ isAutoCompleteOpen: false });

	handleAddItemChange = ({ target: { value } }) => {
		this.setState({
			addUserValue: value,
			isAutoCompleteOpen: true,
			currentItem: null,
			selectedAutoCompleteItem: -1,
			currentAutoCompleteItems: this.getAutoCompleteItems(value),
		});
	}

	handleKeyDown = (event) => {
		if (!this.state.currentAutoCompleteItems) return false;

		switch (event.keyCode) {
			case keyMap.DOWN_ARROW:
				this.handleDownArrow();
				event.preventDefault();
				break;
			case keyMap.UP_ARROW:
				this.handleUpArrow();
				event.preventDefault();
				break;
			case keyMap.ENTER:
				this.handleEnter();
				event.preventDefault();
				break;
			default:
				return false;
		}
	}

	handleDownArrow () {
		const { selectedAutoCompleteItem, currentAutoCompleteItems } = this.state;

		if (selectedAutoCompleteItem < currentAutoCompleteItems.length - 1) {
			this.setState({ selectedAutoCompleteItem: selectedAutoCompleteItem + 1 });
		}
	}

	handleUpArrow () {
		const { selectedAutoCompleteItem } = this.state;

		if (selectedAutoCompleteItem >= -1) this.setState({ selectedAutoCompleteItem: selectedAutoCompleteItem - 1 });
	}

	handleEnter () {
		const { selectedAutoCompleteItem, currentAutoCompleteItems } = this.state;

		if (selectedAutoCompleteItem >= 0) {
			this.handleItemSelect(currentAutoCompleteItems[selectedAutoCompleteItem].id);
		} else {
			this.handleUserAdd();
		}
	}

	handleUserAdd () {
		const { onItemAdd, allItems } = this.props;
		const { currentItem, addUserValue } = this.state;

		if (currentItem) {
			onItemAdd(currentItem.id);
			this.setState(defaultState);
		} else {
			const item = allItems.find((item) => {
				return item.fullName.toLowerCase() === addUserValue.trim().toLowerCase();
			});

			if (item) {
				onItemAdd(item.id);
				this.setState(defaultState);
			}
		}

		return false;
	}

	getItems (items) {

		return items.map((item, index) => {
			const { id, fullName, initials } = item;
			const key = `item-${index}`;

			return (
				<div key={key} className='AddList-item'>
					<UserLabel
						fullName={fullName}
						initials={initials}
					/>

					<button onClick={this.handleRemoveClick(id)} className='AddList-removeButton'>
						<TrashIcon className='AddList-trashIcon' />
					</button>
				</div>
			);
		});
	}

	getAutoCompleteItems = (addUserValue) => {
		const { allItems } = this.props;

		if (!addUserValue) return [];
		else return allItems.filter((item) => item.fullName.toLowerCase().includes(addUserValue.toLowerCase()));
	}

	handleItemSelect = (id) => {
		const { currentAutoCompleteItems } = this.state;
		const currentItem = currentAutoCompleteItems.find((item) => item.id === id);

		this.setState({
			...defaultState,
			currentItem,
			addUserValue: currentItem.fullName,
		});
	}

	getClassName (className, isAutoCompleteOpen) {
		return classNames('AddList', {
			'AddList-activeHint': isAutoCompleteOpen,
		}, className);
	}

	render () {
		const { items, className } = this.props;
		const { isAutoCompleteOpen, selectedAutoCompleteItem, addUserValue, currentAutoCompleteItems } = this.state;

		return (
			<div className={this.getClassName(className, isAutoCompleteOpen)}>
				{this.getItems(items)}
				<AddItem
					className='AddList-addItem'
					placeholder='Add a few criteria…'
					onBlur={this.handleInputBlur}
					onChange={this.handleAddItemChange}
					onKeyDown={this.handleKeyDown}
					value={addUserValue}
				/>

				<div className='AddList-autoComplete'>
					<UserSelectList
						className='AddList-selectList'
						items={currentAutoCompleteItems}
						selectedItem={selectedAutoCompleteItem}
						onSelect={this.handleItemSelect}
					/>
				</div>

			</div>
		);
	}
}

AddList.propTypes = {
	onItemAdd: () => {},
	onItemRemove: () => {},
};

AddList.propTypes = {
	allItems: PropTypes.array,
	className: PropTypes.string,
	items: PropTypes.array,
	onItemAdd: PropTypes.func,
	onItemRemove: PropTypes.func,
};
