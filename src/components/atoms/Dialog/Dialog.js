import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import constants from '../../../constants';

import { CloseIcon } from '../../../icons';

import './styles.css';

const { common: { landscapeMediaQuery } } = constants;

export class Dialog extends Component {

	constructor (props) {
		super(props);
		if (!this.isDialogSupported) this.loadPolyfill();
	}

	isDialogSupported = window.HTMLDialogElement;
	dialogRef = this.props.forwardedRef || React.createRef();

	state = {
		isModalReady: this.isDialogSupported || false,
	}

	componentDidMount () {
		if (this.isDialogSupported) this.setUpModal();
		this.mql = matchMedia(landscapeMediaQuery);
		this.mql.addListener(this.handleOrientationChange);
		this.handleOrientationChange(this.mql);
	}

	componentWillUnmount () {
		const { onClose } = this.props;
		const currentDialog = this.currentDialog();
		if (currentDialog) currentDialog.removeEventListener('close', onClose);
	}

	currentDialog () {
		return this.dialogRef.current;
	}

	handleOrientationChange = ({ matches }) => {
		if (matches) {
			this.setState({ landscapeMode: true });
		} else {
			this.setState({ landscapeMode: false });
		}
	}

	handleClick = () => {
		this.closeModal();
	};

	closeModal () {
		this.currentDialog().close();
	}

	setUpModal = () => {
		const { visible, onClose } = this.props;
		this.currentDialog().addEventListener('close', onClose);
		if (visible) {
			this.showModal();
		}
	}

	showModal () {
		this.currentDialog().showModal();
	}

	async loadPolyfill () {
		const dialogPolyfill = await import('dialog-polyfill');
		this.setState({ isModalReady: true }, () => {
			const currentDialog = this.currentDialog();
			dialogPolyfill.registerDialog(currentDialog);
			this.setUpModal();
		});
	}

	getDialogClassName ({ className }, { landscapeMode }) {
		return classNames({
			'Dialog-landscapeMode': landscapeMode,
		}, className);
	}

	renderModal ({ children }) {
		const { closeButton } = this.props;

		return (
			<dialog
				className={this.getDialogClassName(this.props, this.state)}
				ref={this.dialogRef}>
				{closeButton &&
					<button
						className='Dialog-close-button'
						onClick={this.handleClick}
					>
						<CloseIcon />
					</button>}
				{children}
			</dialog>
		);
	}

	render () {
		const { isModalReady } = this.state;
		if (!isModalReady) return null;

		return (
			!this.isDialogSupported
				? ReactDOM.createPortal(
					this.renderModal(this.props),
					document.body)
				: this.renderModal(this.props)
		);
	}
}

Dialog.defaultProps = {
	onClose: () => {},
	closeButton: true,
};

Dialog.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	closeButton: PropTypes.bool,
	forwardedRef: PropTypes.any,
	onClose: PropTypes.func,
	visible: PropTypes.bool,
};

/* eslint-disable-next-line react/no-multi-comp */
const _Dialog = (props, ref) => <Dialog {...props} forwardedRef={ref} />;
_Dialog.displayName = 'Dialog';

// NOTE: Resolves an issue where enzyme@^3.3.0 and enzyme-adapter-react-16@^1.1.1 don't support `forwardRef`.
export default process.env.NODE_ENV === 'test' ? Dialog : React.forwardRef(_Dialog);
