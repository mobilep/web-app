import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Dialog, Button } from '../../atoms';

import './styles.css';

class DialogWithButtonGroup extends Component {

	static propTypes = {
		actionButtonDisabled: PropTypes.bool,
		actionButtonLabel: PropTypes.string,
		cancelButtonLabel: PropTypes.string,
		children: PropTypes.any,
		className: PropTypes.string,
		forwardedRef: PropTypes.any,
		onActionButtonClick: PropTypes.func,
		onCancelButtonClick: PropTypes.func,
		onClose: PropTypes.func,
	}

	static defaultProps = {
		onActionButtonClick: () => {},
		onCancelButtonClick: () => {},
	}

	dialogRef = this.props.forwardedRef || React.createRef();

	handleCancelButtonClick = () => {
		this.dialogRef.current.close();
		this.props.onCancelButtonClick();
	};

	render () {
		const {
			actionButtonLabel,
			cancelButtonLabel,
			children,
			className,
			onActionButtonClick,
			actionButtonDisabled,
			onClose,
		} = this.props;
		return (
			<Dialog
				onClose={onClose}
				className={classNames('DialogWithButtonGroup', className)}
				ref={this.dialogRef}
			>
				<div className='DialogWithButtonGroup-content'>{children}</div>
				<div className='DialogWithButtonGroup-buttonGroup'>
					<Button color='grey' onClick={this.handleCancelButtonClick}>{cancelButtonLabel}</Button>
					<Button disabled={actionButtonDisabled} onClick={onActionButtonClick}>{actionButtonLabel}</Button>
				</div>
			</Dialog>
		);
	}

}

/* eslint-disable-next-line react/no-multi-comp */
const _DialogWithButtonGroup = (props, ref) => <DialogWithButtonGroup {...props} forwardedRef={ref} />;
_DialogWithButtonGroup.displayName = 'DialogWithButtonGroup';

// NOTE: Resolves an issue where enzyme@^3.3.0 and enzyme-adapter-react-16@^1.1.1 don't support `forwardRef`.
export default process.env.NODE_ENV === 'test' ? DialogWithButtonGroup : React.forwardRef(_DialogWithButtonGroup);
