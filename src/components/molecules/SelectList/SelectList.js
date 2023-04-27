import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

export default class SelectList extends Component {

	static propTypes = {
		className: PropTypes.string,
		itemIdKey: PropTypes.string,
		itemValueKey: PropTypes.string,
		items: PropTypes.array.isRequired,
		onMouseOver: PropTypes.func,
		onSelect: PropTypes.func,
		selectedItem: PropTypes.number,
	}

	static defaultProps = {
		itemIdKey: 'id',
		itemValueKey: 'value',
		onMouseOver: () => {},
		onSelect: () => {},
	}

	getClassName (className) {
		return classNames('SelectList', className);
	}

	getItemClassName (isActive) {
		return classNames({
			'SelectList-item': true,
			'SelectList-item-active': isActive,
		});
	}

	handleClick = (id) =>
		() => this.props.onSelect(id)

	handleMouseOver = (index) =>
		() => this.props.onMouseOver(index);

	getItem (element, isCustom) {
		return isCustom
			? (
				<div className='SelectList-item-customItemWrapper' key={'isCustom'}>
					{element}
				</div>
			)
			: element;
	}

	getItems ({ items, selectedItem, itemIdKey, itemValueKey } = this.props) {
		return items.map((item, index) => {
			const id = item[itemIdKey];
			const value = item[itemValueKey];
			let { description = '' } = item;
			const { isCustom } = item;
			description = description && ` ${description}`;
			const key = `selectItem${index}`;
			const isActive = selectedItem === index;
			const className = this.getItemClassName(isActive);
			return this.getItem(
				<button
					className={className}
					key={key}
					onMouseOver={this.handleMouseOver(index)}
					onMouseLeave={this.handleMouseOver(null)}
					onClick={this.handleClick(id)}
				>
					{value}{description}
				</button>,
				isCustom
			);
		});
	}

	render () {
		const { className } = this.props;
		return (
			<div className={this.getClassName(className)}>
				{this.getItems()}
			</div>
		);
	}

}
