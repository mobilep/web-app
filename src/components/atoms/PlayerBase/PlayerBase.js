import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shaka from 'shaka-player';
import './styles.css';

export default class PlayerBase extends Component {

	static propTypes = {
		autoPlay: PropTypes.bool,
		className: PropTypes.string,
		fallBackStreamUrl: PropTypes.string.isRequired,
		onStreamError: PropTypes.func,
		onStreamLoad: PropTypes.func,
		streamUrl: PropTypes.string.isRequired,
	}

	static defaultProps = {
		autoPlay: true,
		onStreamLoad: () => {},
		onStreamError: () => {},
	}

	el = React.createRef();

	componentDidMount () {
		this.setupPlayer();
	}

	isSupportedByPlayer (src) {
		return src.includes('m3u8') || src.includes('mpd');
	}

	setupPlayer () {
		const { streamUrl, fallBackStreamUrl } = this.props;
		const videoEl = this.el.current || {};

		if (!this.isSupportedByPlayer(streamUrl)) {
			videoEl.src = streamUrl;
			return;
		}

		if (window.MediaSource) {
			shaka.polyfill.installAll();
			this.player = new shaka.Player(videoEl);
			this.player
				.load(streamUrl)
				.then(this.onStreamLoad)
				.catch(this.onStreamError);
		} else {
			videoEl.src = fallBackStreamUrl;
		}
	}

	onStreamLoad = () => {
		this.props.onStreamLoad();
	}

	onStreamError = (error) => {
		// eslint-disable-next-line
		console.error('Error code', error.code, 'object', error);
		this.props.onStreamError();
	}

	getClassName ({ className } = this.props) {
		return classNames('PlayerBase', className);
	}

	render () {
		const { autoPlay } = this.props;
		return <video autoPlay={autoPlay} className={this.getClassName()} controls ref={this.el} />;
	}

}
