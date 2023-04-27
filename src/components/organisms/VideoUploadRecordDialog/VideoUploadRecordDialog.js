import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Button } from '../..';
import { RecordCameraIcon } from '../../../icons';
import { WithUpload, WithRecord } from '../../../HOC';

import { withLanguageContext } from '../../../utils/LanguageContext';

import './styles.css';

const UploadVideoButton = (WithUpload && WithUpload(Button));
const RecordVideoButton = (WithRecord && WithRecord(Button));

class VideoUploadRecordDialog extends Component {

	static propTypes = {
		content: PropTypes.object,
		forwardedRef: PropTypes.object,
	};

	static defaultProps = {};

	dialogRef = this.props.forwardedRef || React.createRef();

	handleDialogClose = () => {
		this.dialogRef.current.close();
	};

	render () {
		const { content } = this.props;
		return (
			<Dialog className='VideoUploadRecordDialog' ref={this.dialogRef}>
				<div className='VideoUploadRecordDialog-options'>
					<div className='VideoUploadRecordDialog-record'>
						<RecordCameraIcon />
						<RecordVideoButton
							{...this.props}
							onClose={this.handleDialogClose}
							className='VideoUploadRecordDialog-button'
							primary
						>
							{content.recording.recordVideo}
						</RecordVideoButton>
					</div>
					<div className='VideoUploadRecordDialog-existing'>
						<UploadVideoButton
							{...this.props}
							onClose={this.handleDialogClose}
							className='Button-text'
							fileType='video'
						>
							{content.recording.uploadExisting}
						</UploadVideoButton>
					</div>
				</div>
			</Dialog>
		);
	}
}

/* eslint-disable-next-line react/no-multi-comp */
const VideoUploadRecordDialogWithLanguage = withLanguageContext(VideoUploadRecordDialog);
/* eslint-disable-next-line react/no-multi-comp */
const _VideoUploadRecordDialog = (props, ref) => <VideoUploadRecordDialogWithLanguage {...props} forwardedRef={ref} />;
_VideoUploadRecordDialog.displayName = 'VideoUploadRecordDialog';

export default React.forwardRef(_VideoUploadRecordDialog);
