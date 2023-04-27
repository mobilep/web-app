import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Plyr from 'plyr';

import './styles.css';

const DEFAULT_OPTIONS = {
	controls: ['play-large', 'play', 'progress', 'current-time'],
	settings: [],
};

export default class AudioPlayer extends Component {
	player = null;
	playerRef = React.createRef();

	static propTypes = {
		options: PropTypes.object,
		src: PropTypes.string,
	}

	static defaultProps = {}

	componentDidMount () {
		this.loadPlayer();
	}

	loadPlayer () {
		this.player = new Plyr(this.playerRef.current, { ...DEFAULT_OPTIONS, ...this.props.options });
	}

	render () {
		// eslint-disable-next-line no-unused-vars
		const { src, options, ...rest } = this.props;

		if (!src) return null;

		return (
			<div className='AudioPlayer'>
				<audio
					src={src}
					{...rest}
					ref={this.playerRef}
					controls
				/>
			</div>
		);
	}
}
