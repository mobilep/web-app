import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';
import { Spinner, AudioPlayer } from '../../atoms';
import { mediaLoadingStates } from '../../../constants/common';

export default class AudioMessage extends Component {
	static propTypes = {
		audioSrc: PropTypes.string,
		className: PropTypes.string,
		loadingState: PropTypes.string,
	}

	getClassName (...className) {
		return classNames('AudioMessage', className);
	}

	getLoadingSpinner () {
		return (
			<div className={this.getClassName(this.props.className, 'AudioMessage--spinnerWrapper')} >
				<Spinner className='AudioMessage-spinnerIcon' />
			</div>
		);
	}

	render () {
		const { audioSrc, loadingState } = this.props;

		if (loadingState !== mediaLoadingStates.COMPLETED) {
			return this.getLoadingSpinner();
		}

		return (
			<div className={this.getClassName(this.props.className)}>
				<AudioPlayer src={audioSrc} />
			</div>
		);
	}
}
