import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { OverlayButton } from '../..';
import { RecordSendIcon, ReplayIcon, RerecordIcon } from '../../../icons';
import './styles.css';

export default class RecordStopOverlay extends Component {

	handleRecordAgain = () => {
		this.props.onRecordAgain();
	}

	handleReplay = () => {
		this.props.onReplay();
	}

	handleSend = () => {
		this.props.onSend();
	}

	render () {
		const { image, texts } = this.props;
		return (
			<div className='RecordStopOverlay' style={{ backgroundImage: `url(${image})` }}>
				<div className='RecordStopOverlay-panel'>
					<OverlayButton
						onClick={this.handleReplay}
						icon={<ReplayIcon />}
						label={texts.replay}
					/>
					<OverlayButton
						onClick={this.handleRecordAgain}
						icon={<RerecordIcon />}
						label={texts.recordAgain}
					/>
					<OverlayButton
						onClick={this.handleSend}
						icon={<RecordSendIcon />}
						label={texts.send}
					/>
				</div>
			</div>
		);
	}

}

RecordStopOverlay.defaultProps = {
	image: '',
	onRecordAgain: () => {},
	onReplay: () => {},
	onSend: () => {},
	texts: {},
};

RecordStopOverlay.propTypes = {
	image: PropTypes.string,
	onRecordAgain: PropTypes.func,
	onReplay: PropTypes.func,
	onSend: PropTypes.func,
	texts: PropTypes.object,
};
