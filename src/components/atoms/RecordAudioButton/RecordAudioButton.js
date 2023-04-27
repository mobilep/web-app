import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { MessageBoxBaseButton } from '../../atoms';
import { MicIcon } from '../../../icons';

export default class RecordAudioButton extends Component {

	static propTypes = {
		onClick: PropTypes.func,
	}

	static defaultProps = {}

	render () {
		const { onClick, ...rest } = this.props;
		if (!window.MediaRecorder) return null;

		return (
			<MessageBoxBaseButton {...rest} onClick={onClick}>
				<MicIcon />
			</MessageBoxBaseButton>
		);
	}

}
