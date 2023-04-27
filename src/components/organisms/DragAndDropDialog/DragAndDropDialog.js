import React, { PureComponent } from 'react';
import { Dialog, DragAndDrop } from '../..';
import { LanguageContext, httpApi } from '../../../utils';
import PropTypes from 'prop-types';
import constants from '../../../constants';

import './styles.css';
import { calculateProgress } from '../../../utils/calculateProgress';
import { getVideoMetadata } from '../../../utils/fileService';

const { Consumer: LanguageConsumer } = LanguageContext;
const { common } = constants;

export class DragAndDropDialog extends PureComponent {

	dialogRef = this.props.forwardedRef || React.createRef();
	dragAndDropRef = React.createRef();
	file = null;

	state = {
		isUploading: false,
	}

	handleCancel = () => {
		this.dialogRef.current.close();
		this.props.onCancel();
	}

	currentDragAndDrop () {
		return this.dragAndDropRef.current;
	}

	handleDialogClose = () => {
		const { onClose = () => {} } = this.props;
		this.setState({
			isUploading: false,
		});
		this.currentDragAndDrop().resetStore();
		onClose();
	};

	handleFileUpload = (file) => {
		this.file = file;
		this.props.onFileUpload(file);
	}

	handleSend = async (description) => {
		const { authorization, onSend, demo } = this.props;
		if (demo) {
			this.handleCancel();
			onSend();
			return;
		}
		if (this.file) {
			const { duration } = await getVideoMetadata(this.file);
			const uploadProgress = (e) => {
				if (e.lengthComputable) {
					this.currentDragAndDrop().setProgress(calculateProgress(e.loaded, e.total));
				}
			};

			const uploadFile = async (response) => {
				if (!response.url) throw new Error('Server error');
				// guys, I've changed line below to make it compatible with slight updates in upload method
				// @TODO: implement fileupload cancellation
				return await httpApi.upload(response.url, this.file, response.fileID, uploadProgress).promise;
			};

			const { USER_ACCESS_TOKEN } = common.localStorageKeys;
			try {
				this.setState({
					isUploading: true,
				});
				const response = await httpApi.post(`${common.api}/upload`, {
					filename: this.file.name,
					ContentType: this.file.type,
				}, { Authorization: authorization || localStorage.getItem(USER_ACCESS_TOKEN) });
				const preSignedURL = await response.json();
				const fileID = await uploadFile(preSignedURL);
				this.handleCancel();
				this.setState({
					isUploading: false,
				}, () => onSend(fileID, description, duration));
			} catch (error) {
				this.setState({
					isUploading: false,
				}, () => this.currentDragAndDrop().setError());
			}
		}
	}

	getHeaderText ({ uploadPhoto, uploadVideo }) {
		const { fileType } = this.props;

		if (fileType === DragAndDrop.FILE_TYPE.PHOTO) return uploadPhoto;
		if (fileType === DragAndDrop.FILE_TYPE.VIDEO) return uploadVideo;

		return '';
	}

	render () {
		const { fileType, onFileCancel } = this.props;
		return (
			<LanguageConsumer>
				{
					({ dragAndDrop, common }) => (
						<Dialog
							className='DragAndDropDialog'
							onClose={this.handleDialogClose}
							ref={this.dialogRef}
						>
							<div className='DragAndDrop-header'>
								{this.getHeaderText(dragAndDrop)}
							</div>
							<DragAndDrop
								{...this.props}
								uploading={this.state.isUploading}
								fileType={fileType}
								onCancel={this.handleCancel}
								onFileCancel={onFileCancel}
								onFileUpload={this.handleFileUpload}
								onSend={this.handleSend}
								ref={this.dragAndDropRef}
								texts={{ dragAndDrop, common }}
							/>
						</Dialog>
					)
				}
			</LanguageConsumer>
		);
	}
}

DragAndDropDialog.defaultProps = {
	onCancel: () => {},
	onFileCancel: () => {},
	onFileUpload: () => {},
	onSend: () => {},
	demo: false,
	authorization: '',
};

DragAndDropDialog.propTypes = {
	authorization: PropTypes.string,
	demo: PropTypes.bool,
	fileType: PropTypes.string,
	forwardedRef: PropTypes.any,
	onCancel: PropTypes.func,
	onClose: PropTypes.func,
	onFileCancel: PropTypes.func,
	onFileUpload: PropTypes.func,
	onSend: PropTypes.func,
};

/* eslint-disable-next-line react/no-multi-comp */
const _DragAndDropDialog = (props, ref) => <DragAndDropDialog {...props} forwardedRef={ref} />;
_DragAndDropDialog.displayName = 'DragAndDropDialog';

export default React.forwardRef(_DragAndDropDialog);
