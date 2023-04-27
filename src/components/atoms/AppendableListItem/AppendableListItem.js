import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { RemoveItemButton } from '..';
import { CheckIcon } from '../../../icons';

import './styles.css';

import { TYPES } from './constants';

export default class AppendableListItem extends Component {

	generateClassName = ({ className, type }) => {
		const isAddType = type === TYPES.ADD;
		const isStepType = type === TYPES.STEP;

		return classNames('AppendableListItem', {
			'AppendableListItem-add': isAddType,
			'AppendableListItem-red': isAddType,
			'AppendableListItem-step': isStepType,
		}, className);
	}

	generateContent = ({ children, index, onClick, onRemoveItem, type }) => {
		const icon = this.generateIcon({ index, type });
		const content = (
			<Fragment>
				<div className='AppendableListItem-icon'>{icon}</div>
				{children}
				{
					this.shouldRenderRemoveButtn() &&
					<RemoveItemButton
						onClick={onRemoveItem}
						className='AppendableListItem-removeButton'
					/>
				}
			</Fragment>
		);

		if (type === TYPES.ADD) {
			return <button {... { onClick }}>{content}</button>;
		}
		return content;
	}

	generateIcon = ({ index, type }) => {
		if (type === TYPES.CHECK) {
			return <CheckIcon className='AppendableListItem-checkicon' />;
		} else if (type === TYPES.ADD) {
			return '+';
		} else if (type === TYPES.STEP) {
			return ++index || 1;
		}
		return null;
	};

	shouldRenderRemoveButtn ({ type, editable } = this.props) {
		return type !== TYPES.ADD && editable;
	}

	render () {
		const className = this.generateClassName(this.props);
		const content = this.generateContent(this.props);

		return (
			<li { ...{ className }}>
				{content}
			</li>
		);
	}

}

AppendableListItem.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	editable: PropTypes.bool,
	index: PropTypes.number,
	onClick: PropTypes.func,
	onRemoveItem: PropTypes.func,
	type: PropTypes.oneOf(Object.values(TYPES)),
	uid: PropTypes.string,
};
