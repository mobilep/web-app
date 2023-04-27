import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import Button from '../Button';

export default class ContextMenu extends Component {

	static propTypes = {
		buttonProps: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, onClick: PropTypes.func })),
		position: PropTypes.shape({ top: PropTypes.number, left: PropTypes.number }),
	}

	static defaultProps = {
		buttonProps: [],
	}

	/**
	* @param {{ label: string, onClick: function }[]} buttonProps
	* @returns
	*/
	getButtons (buttonProps) {
		return buttonProps.map(({ label, onClick }) => {
			return (<Button className='ContextMenu-button' key={label} onClick={onClick}>
				{label}
			</Button>);
		});
	}

	getContextMenu (buttons, position) {
		return (<div className='ContextMenu' style={position}>
			{buttons}
		</div>);
	}

	render () {
		const { buttonProps, position } = this.props;

		if (!buttonProps.length) return null;

		const { matches } = window.matchMedia('(max-width: 768px)');
		const buttons = this.getButtons(buttonProps);

		if (matches) return <div className='ContextMenuBackdrop'>{ this.getContextMenu(buttons) }</div>;

		return this.getContextMenu(buttons, position);
	}
}
