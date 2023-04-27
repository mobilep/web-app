import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class SettingsPanel extends Component {

	static propTypes = {
		action: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.arrayOf(PropTypes.element),
		]),
		description: PropTypes.string,
		icon: PropTypes.element.isRequired,
		title: PropTypes.string.isRequired,
	}

	render () {
		const { action, description, icon, title } = this.props;
		const desc = description ? (<p>{description}</p>) : null;

		return (
			<section className='SettingsPanel'>
				{icon}
				<hr />
				<div className='SettingsPanel-content'>
					<h1>{title}</h1>
					{desc}
					{action}
				</div>
			</section>
		);
	}

}
