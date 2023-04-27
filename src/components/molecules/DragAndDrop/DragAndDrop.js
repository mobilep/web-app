import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { ErrorIcon } from '../../../icons';
import { browserInfo } from '../../../utils/';

import {
	DragAndDropBrowse,
	DropArea,
	SubmitResult,
	DragAndDropFileInfo,
	DragAndDropFileItem,
	Button,
	ScenarioTextInput,
} from '../..';
import { DRAG_START_EVENTS,	DRAG_END_EVENTS } from './constants';
import { ALLOWED_FILE_FORMATS, FILE_TYPE, MAX_FILE_SIZE_MB } from '../../../constants/files';
import {
	convertBytesToMB,
	isSizeValid,
	isTypeValid,
	securelyReadFile,
} from '../../../utils/fileService';
import './styles.css';

const defaultState = {
	dragging: false,
	file: null,
	error: false,
	errorTitle: '',
	progress: 0,
	description: '',
};

export default class DragAndDrop extends Component {

	state = defaultState;

	fileInputRef = createRef();

	static FILE_TYPE = FILE_TYPE;

	componentDidMount () {
		DRAG_START_EVENTS.forEach((event) => window.addEventListener(event, this.isDragingTrue));
		DRAG_END_EVENTS.forEach((event) => window.addEventListener(event, this.isDragingFalse));
	}

	componentWillUnmount () {
		DRAG_START_EVENTS.forEach((event) => window.removeEventListener(event, this.isDragingTrue));
		DRAG_END_EVENTS.forEach((event) => window.removeEventListener(event, this.isDragingFalse));
	}

	isDragging = (dragging) => (event) => {
		event.preventDefault();
		event.stopPropagation();
		this.setState({ dragging });
	}

	isDragingTrue = this.isDragging(true);
	isDragingFalse = this.isDragging(false);

	handleAddFile (type) {
		const {
			permissionErrorText,
		} = this.props.texts.dragAndDrop;

		return (event) => {
			const { files } = type === 'drop'
				? event.dataTransfer
				: event.target;
			if (!this.isFileValid(files)) return;

			if (type === 'drop') {
				this.uploadFile(files[0]);
			} else {
				// API post fails - net::ERR_UPLOAD_FILE_CHANGED
				securelyReadFile(this.fileInputRef.current.files[0])
					.then((file) => this.uploadFile(file))
					// name: NotReadableError
					// message: The requested file could not be read, typically due to permission
					// problems that have occurred after a reference to a file was acquired.
					.catch((error) => {
						console.log(error);
						this.setState({ error: true, errorTitle: permissionErrorText });
					});
			}
		};
	}

	handleClickFile = ({ target }) => {
		target.value = null;
	}

	uploadFile (file) {
		const { onFileUpload } = this.props;

		this.setState({ file });
		onFileUpload(file);
	}

	handleTryAgainClick = () => {
		this.setState({ error: false });
	}

	getFileFormatNames () {
		const { fileType } = this.props;

		switch (fileType) {
			case FILE_TYPE.PHOTO:
				return Object.keys(ALLOWED_FILE_FORMATS.photo);
			case FILE_TYPE.VIDEO:
				return Object.keys(ALLOWED_FILE_FORMATS.video);
			default:
				throw new Error('fileType is required');
		}
	}

	handleBrowseClick = () => this.fileInputRef.current.click();

	isFileValid (files) {
		const {
			multipleFiles,
			wrongFormat,
			wrongSize,
		} = this.props.texts.dragAndDrop;

		if (files.length > 1) {
			this.setState({ error: true, errorTitle: multipleFiles });
			return false;
		}

		const { type, size } = files[0];

		if (!isTypeValid(type, this.props.fileType)) {
			this.setState({ error: true, errorTitle: wrongFormat });
			return false;
		}

		if (!isSizeValid(size, this.props.fileType)) {
			this.setState({ error: true, errorTitle: wrongSize });
			return false;
		}

		return true;
	}

	setError () {
		const {
			serverError,
		} = this.props.texts.dragAndDrop;
		this.setState({ error: true, errorTitle: serverError });
		return false;
	}

	setProgress = (progress) => {
		this.setState({ ...this.state, progress });
	}

	handleDescriptionChange = ({ target }) => {
		this.setState({
			description: target.value,
		});
	}

	handleFileCancel = () => {
		const { onFileCancel } = this.props;

		this.setState({ ...this.state, file: null, progress: 0 });
		onFileCancel();
	}

	getFileInfo ({ fileCount, formats, maxFileSize }, fileType) {
		return (
			<DragAndDropFileInfo
				maxFileSize={MAX_FILE_SIZE_MB[fileType]}
				formatNamesArray={this.getFileFormatNames()}
				fileCountText={fileCount}
				formatsText={formats}
				maxFileSizeText={maxFileSize}
			/>
		);
	}

	getBrowseText () {
		const { fileType } = this.props;
		const { file } = this.state;
		const { selectFile, selectImageFile, selectAnotherFile } = this.props.texts.dragAndDrop;
		// eslint-disable-next-line
		return file
			? selectAnotherFile
			: fileType === FILE_TYPE.PHOTO
				? selectImageFile
				: selectFile;
	}

	getBrowseButtonLabel () {
		const { matches } = window.matchMedia('(max-width: 768px)');
		const { file } = this.state;
		const { fileType } = this.props;
		const {
			dragAndDrop: { selectAnotherFileMobile, change, add },
			common: { browse },
		} = this.props.texts;
		const isVideo = fileType === 'video';

		if (isVideo && matches) {
			return file ? change : add;
		}

		return (matches && file)
			? selectAnotherFileMobile
			: browse;
	}

	resetStore = () => {
		this.setState(defaultState);
	}

	clamWithoutError () {
		const { dragging, error } = this.state;
		return !dragging && !error;
	}

	handleSend = () => {
		this.props.onSend(this.state.description);
	}

	generateAcceptAttribute () {
		const { name } = browserInfo.os;
		const { fileType } = this.props;
		// NOTE: Safai on iOS only supports the HTML4-style accept attribute.
		const typePrefix = fileType === 'video' ? 'video/' : 'image/';
		const prefix = name === 'iOS' ? typePrefix : '.';
		return this.getFileFormatNames()
			.reduce((types, type, index) => index === 0 ? `${prefix}${type}` : `${types},${prefix}${type}`, '');
	}

	render () {
		const {
			onCancel,
			texts: { common, dragAndDrop },
			withDescription,
			uploading,
			fileType,
		} = this.props;
		const { error, dragging, file, errorTitle, progress, description } = this.state;
		const isButtonDisabled = uploading || (withDescription ? !description.trim() || !file : !file);

		return (
			<div className='DragAndDrop' onDrop={this.handleAddFile('drop')}>

				{
					!error &&
						<div className='DragAndDrop-main'>
							{dragging && <DropArea text={dragAndDrop.dropHeading} />}

							{
								!dragging &&
								<DragAndDropBrowse
									onClick={this.handleBrowseClick}
									text={this.getBrowseText()}
									buttonLabel={this.getBrowseButtonLabel()}
								/>
							}

							<input
								accept={this.generateAcceptAttribute()}
								onChange={this.handleAddFile()}
								ref={this.fileInputRef}
								className='DragAndDrop-input'
								type='file'
								onClick={this.handleClickFile}
							/>
						</div>
				}

				{
					error &&
					<SubmitResult
						buttonLabel={common.tryAgain}
						title={errorTitle}
						message={this.getFileInfo(dragAndDrop, fileType)}
						onButtonClick={this.handleTryAgainClick}
						icon={<ErrorIcon />}
						className='DragAndDrop-error'
					/>
				}

				{
					this.clamWithoutError() &&
						this.getFileInfo(dragAndDrop, fileType)
				}

				{
					file && this.clamWithoutError() &&
						<div className='DragAndDrop-fileArea'>
							<DragAndDropFileItem
								name={file.name}
								progress={progress}
								size={convertBytesToMB(file.size)}
								onCancel={this.handleFileCancel}
							/>
						</div>
				}
				{
					withDescription && (
						<div className='DragAndDropDescriptionInfo'>
							<span className='DragAndDrop-bestPracticeNote'>
								{dragAndDrop.bestPracticeNote}
							</span>
							<ScenarioTextInput
								maxLength={32}
								name='bestpractice'
								showError
								required
								value={description}
								onChange={this.handleDescriptionChange}
								errorText={dragAndDrop.errorText}
								className='DragAndDrop-inputWrapper'
								inputClassName='DragAndDrop-textInput'
								placeholder={dragAndDrop.bestPractice} />
						</div>
					)
				}
				{
					this.clamWithoutError() &&
						<div className='DragAndDrop-btnRow'>
							<Button
								color='grey'
								onClick={onCancel}
								primary
							>
								{common.cancel}
							</Button>

							<Button
								onClick={this.handleSend}
								disabled={isButtonDisabled}
								primary
							>
								{withDescription ? common.save : common.send}
							</Button>
						</div>
				}
			</div>
		);
	}
}

DragAndDrop.propTypes = {
	fileType: PropTypes.string,
	onCancel: PropTypes.func,
	onFileCancel: PropTypes.func,
	onFileUpload: PropTypes.func,
	onSend: PropTypes.func,
	osName: PropTypes.string,
	texts: PropTypes.object,
	uploading: PropTypes.bool,
	withDescription: PropTypes.bool,
};
