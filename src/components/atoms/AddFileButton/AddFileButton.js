import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MessageBoxBaseButton } from '../..';
import { ErrorDialog } from '..';
import { LanguageContext } from '../../../utils';

import './styles.css';
import {
	isTypeValid,
	isSizeValid,
	getComaSeparatedFileFormats,
	securelyReadFile,
} from '../../../utils/fileService';
import { FILE_ERROR_TYPE, ACCEPT_BY_TYPE, MAX_FILE_SIZE_MB } from '../../../constants/files';

const getClassName = (className) => classNames('AddFileButton', { [className]: className });

export default class AddFileButton extends Component {
	state = {
		validationErrorType: null,
	}

	static contextType = LanguageContext;

	static propTypes = {
		className: PropTypes.string,
		icon: PropTypes.object,
		onFileSelected: PropTypes.func,
		type: PropTypes.string,
	}

	dialogRef = React.createRef();

	handleAddFile = (event) => {
		const file = event.target.files[0];
		const validationErrorType = this.validateFile(file);

		if (file && !validationErrorType) {
			this.setState({ validationErrorType: null });

			// API post fails - net::ERR_UPLOAD_FILE_CHANGED
			securelyReadFile(file)
				.then((file) => this.props.onFileSelected(file))
				// name: NotReadableError
				// message: The requested file could not be read, typically due to permission
				// problems that have occurred after a reference to a file was acquired.
				.catch((error) => {
					console.log(error);
					this.setState({ validationErrorType: FILE_ERROR_TYPE.permission });
					this.dialogRef.current.showModal();
				});
		} else {
			this.setState({ validationErrorType });
			this.dialogRef.current.showModal();
		}

		event.target.value = null;
	}

	validateFile (file) {
		if (!isTypeValid(file.type, this.props.type)) return FILE_ERROR_TYPE.fileType;
		if (!isSizeValid(file.size, this.props.type)) return FILE_ERROR_TYPE.size;

		return null;
	}

	getValidationDialog () {
		const { validationErrorType } = this.state;
		const { type } = this.props;
		const {
			mediaUpload: {
				maxFileSize,
				wrongSize,
				wrongFormat,
				tryAgain,
				formats,
				permissionErrorText,
				uploadFailed,
			},
		} = this.context;
		const allowedFileFormats = getComaSeparatedFileFormats(type).toUpperCase();

		const dialogProps = { header: '', textContent: '', buttonLabel: tryAgain };

		if (validationErrorType === FILE_ERROR_TYPE.size) {
			dialogProps.textContent = <span>{maxFileSize} {MAX_FILE_SIZE_MB[type]}MB.</span>;
			dialogProps.header = wrongSize;
		}

		if (validationErrorType === FILE_ERROR_TYPE.fileType) {
			const supportedFormats = <span className='text-danger'>{allowedFileFormats}</span>;
			dialogProps.textContent = (<span>
				{formats} {supportedFormats}. {maxFileSize} {MAX_FILE_SIZE_MB[type]}MB.
			</span>);
			dialogProps.header = wrongFormat;
		}

		if (validationErrorType === FILE_ERROR_TYPE.permission) {
			dialogProps.textContent = <span>{permissionErrorText}</span>;
			dialogProps.header = uploadFailed;
		}

		return (
			<ErrorDialog ref={this.dialogRef}	{...dialogProps}	/>
		);
	}

	render () {
		const { className, type, icon, ...rest } = this.props;

		return (
			<Fragment>
				{ this.getValidationDialog() }
				<MessageBoxBaseButton { ...rest } className={getClassName(className)}>
					<input
						type='file'
						name='fileInput'
						className='AddFileButton-fileInput'
						accept={ACCEPT_BY_TYPE[type]}
						onChange={this.handleAddFile}
					/>
					<div className='AddFileButton-iconWrapper'>
						{icon}
					</div>
				</MessageBoxBaseButton>
			</Fragment>
		);
	}

}
