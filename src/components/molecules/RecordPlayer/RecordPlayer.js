import React, { Component, createRef } from 'react';
import { Button } from '../..';
import PropTypes from 'prop-types';

import './styles.css';

export default class RecordPlayer extends Component {

	videoRef = createRef();

	componentDidMount () {
		this.videoRef.current.src = this.props.file ? URL.createObjectURL(this.props.file) : null;
	}

	handleBack = () => {
		this.props.onBack();
	}

	render () {
		const { buttonText } = this.props;
		return (
			<div className='RecordPlayer-container'>
				<video ref={this.videoRef} controls autoPlay />
				<div className='RecordPlayer-panel'>
					<Button primary onClick={this.handleBack}>{buttonText}</Button>
				</div>
			</div>
		);
	}

}

RecordPlayer.defaultProps = {
	buttonText: 'Send',
	file: null,
	onBack: () => {},
};

RecordPlayer.propTypes = {
	buttonText: PropTypes.string,
	file: PropTypes.any,
	onBack: PropTypes.func,
};
