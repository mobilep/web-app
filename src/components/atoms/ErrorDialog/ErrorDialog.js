import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Dialog, Button } from '..';
import { ErrorIcon } from '../../../icons';

import './styles.css';

export class ErrorDialog extends Component {

	static propTypes = {
		buttonLabel: PropTypes.string,
		className: PropTypes.string,
		forwardedRef: PropTypes.any,
		header: PropTypes.string,
		onClose: PropTypes.func,
		textContent: PropTypes.any,
	};

	static defaultProps = {
		onClose: () => {},
	};

	dialogRef = this.props.forwardedRef || React.createRef();

	handleCancelButtonClick = () => {
		this.dialogRef.current.close();
		this.props.onClose();
	};

	render () {
		return (
			<Dialog
				className={classNames('ErrorDialog', this.props.className)}
				ref={this.dialogRef}
			>
				<div className='ErrorDialog-content'>
					<div className='ErrorDialog-icon'><ErrorIcon /></div>
					<div className='ErrorDialog-text-content'>
						<div className='ErrorDialog-header'>
							{this.props.header}
						</div>
						<div className='ErrorDialog-message'>
							{this.props.textContent}
						</div>
					</div>
					<div className='ErrorDialog-button-wrapper'>
						<Button onClick={this.handleCancelButtonClick} className='ErrorDialog-button'>
							{this.props.buttonLabel}
						</Button>
					</div>
				</div>
			</Dialog>
		);
	}

}

/* eslint-disable-next-line react/no-multi-comp */
const _ErrorDialog = (props, ref) => <ErrorDialog {...props} forwardedRef={ref} />;
_ErrorDialog.displayName = 'ErrorDialog';

export default React.forwardRef(_ErrorDialog);
