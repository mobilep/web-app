import React, { Component, Fragment } from 'react';
import { VideoUploadRecordDialog } from '../components';
import WithUpload from './WithUpload';
import { recordingFeatures, browserInfo } from '../utils';

const getDisplayName = (comp = {}) =>
	comp.displayName || comp.name || 'Component';

const WithUploadRecordVideo = (WrappedComponent) => {
	if (!recordingFeatures.isRecorderSupported() || browserInfo.isIos) return WithUpload(WrappedComponent);
	class WithUploadRecordVideo extends Component {
		dialogRef = React.createRef();

		handleShowDialog = () =>
			this.dialogRef.current.showModal();

		render () {
			return (
				<Fragment>
					<VideoUploadRecordDialog {...this.props} ref={this.dialogRef} />
					<WrappedComponent
						{...this.props}
						onClick={this.handleShowDialog}
					/>
				</Fragment>
			);
		}
	}
	WithUploadRecordVideo.displayName = `WithUploadRecordVideo(${getDisplayName(WrappedComponent)})`;
	return WithUploadRecordVideo;
};

export default WithUploadRecordVideo;
