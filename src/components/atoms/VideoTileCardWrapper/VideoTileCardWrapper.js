import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { formatDuration } from '../../../utils/time';

export default class VideoTileCardWrapper extends Component {

	static propTypes = {
		children: PropTypes.element,
		description: PropTypes.string,
		duration: PropTypes.number,
	}

	getDurationSecondsText (nOfSeconds) {
		if (!nOfSeconds) return null;
		return formatDuration(Math.floor(nOfSeconds));
	}

	render () {
		const { description, duration, children } = this.props;
		const durationSecondsText = this.getDurationSecondsText(duration);

		return (
			<div className='VideoTileCardWrapper'>
				{children}
				<div className='VideoTileCardWrapper-meta'>
					<div>{description}</div>
					<div className='VideoTileCardWrapper-duration'>{durationSecondsText}</div>
				</div>
			</div>
		);
	}
}
