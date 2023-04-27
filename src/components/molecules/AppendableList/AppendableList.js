import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AddItem } from '../../atoms';

import AppendableListItem, { constants } from '../../atoms/AppendableListItem';

import './styles.css';

import { LIST_TYPES } from './constants';
const { TYPES } = constants;

const TYPE_MAP = {
	[LIST_TYPES.CHECK]: TYPES.CHECK,
	[LIST_TYPES.STEP]: TYPES.STEP,
};

const CLASSNAME = 'AppendableList-listItem';

export default class AppendableList extends Component {

	static propTypes = {
		editable: PropTypes.bool,
		items: PropTypes.array,
		onAddItem: PropTypes.func,
		onChangeItem: PropTypes.func,
		onRemoveItem: PropTypes.func,
		placeholder: PropTypes.string,
		type: PropTypes.oneOf(Object.values(LIST_TYPES)),
		withInput: PropTypes.bool,
	};

	state = {
		inputValue: '',
	}
	generateAddButton = ({ items, onAddItem }) => (
		<AppendableListItem
			className={CLASSNAME}
			index={items.length + 1}
			uid='add-button'
			type={TYPES.ADD}
			onClick={onAddItem}
		>
			Add a few steps...
		</AppendableListItem>
	);

	generateListItem = (content, index) => (
		<AppendableListItem {...{
			editable: this.props.editable,
			onRemoveItem: this.handleRemoveItem(index),
			className: CLASSNAME,
			key: index,
			index,
			type: TYPE_MAP[this.props.type],
		}}>
			{content}
		</AppendableListItem>
	);

	handleRemoveItem = (index) =>
		() => this.props.onRemoveItem(index);

	handleAddItem = (itemValue) => {
		this.props.onAddItem(itemValue);
	}

	render () {
		const { editable, withInput = true, items = [], placeholder = 'Add item', onChangeItem } = this.props;
		return (
			<ul className='AppendableList'>
				{items.map(this.generateListItem)}
				{editable && withInput
					? <AddItem
						maxLength={128}
						placeholder={placeholder}
						onNewItem={this.handleAddItem}
						onChange={onChangeItem}
					/>
					: null
				}
			</ul>
		);
	}

}
