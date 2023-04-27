import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, InputError } from '../..';
import { FileIcon, CloseIcon } from '../../../icons';

import './styles.css';

const DragAndDropFileItem = ({
	onCancel,
	name,
	size,
	progress,
	error = false,
	errorMessage,
	withCancelOption = true,
}) => {
	const { TOP_LEFT_POP_UP } = InputError.POSITIONS;
	const { RED_ICON } = InputError.COLOR;

	return (
		<div className='DragAndDropFileItem'>
			<div className='DragAndDropFileItem-icon'>
				<FileIcon />
			</div>

			<div className='DragAndDropFileItem-main'>
				<div className='DragAndDropFileItem-info'>
					<div className='DragAndDropFileItem-name'>
						{name}
					</div>
					<div className='DragAndDropFileItem-size'>{size} MB</div>
				</div>
				{!!progress && <ProgressBar value={progress} />}
			</div>
			<div className='DragAndDropFileItem-side'>
				{
					!error && withCancelOption && !progress &&
						<button onClick={onCancel}>
							<CloseIcon />
						</button>
				}
				{
					error &&
						<InputError
							popUpPosition={TOP_LEFT_POP_UP}
							messageText={errorMessage}
							color={RED_ICON}
						/>
				}
			</div>
		</div>
	);
};

DragAndDropFileItem.propTypes = {
	error: PropTypes.bool,
	errorMessage: PropTypes.string,
	name: PropTypes.string,
	onCancel: PropTypes.func,
	progress: PropTypes.number,
	size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	withCancelOption: PropTypes.bool,
};

export default DragAndDropFileItem;
