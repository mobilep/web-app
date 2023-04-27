import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';
import { mediaLoadingStates } from '../../../constants/common';
import { Button, Spinner, Dialog } from '../../atoms';

export default class ImageMessage extends Component {
	static propTypes = {
		className: PropTypes.string,
		imgSrc: PropTypes.string,
		loadingState: PropTypes.string,
	}

	imagePreviewPopup = React.createRef();

	getClassName (className) {
		return classNames('ImageMessage', className);
	}

	getLoadingSpinner () {
		return (
			<Button className={this.getClassName(this.props.className)} >
				<Spinner className='ImageMessage-spinnerIcon' />
			</Button>
		);
	}

	handleImageClick = () => {
		this.imagePreviewPopup.current.showModal();
	}

	getImg () {
		const { imgSrc, className } = this.props;

		return (
			<img
				src={imgSrc}
				alt=''
				className={this.getClassName(className)}
				onClick={this.handleImageClick}
			/>
		);
	}

	getDialog () {
		return (
			<Dialog className='ImageMessage-previewDialog' ref={this.imagePreviewPopup}>
				<img
					src={this.props.imgSrc}
					alt=''
					className='ImageMessage-previewImg'
				/>
			</Dialog>
		);
	}

	render () {
		const { loadingState } = this.props;

		if (loadingState !== mediaLoadingStates.COMPLETED) {
			return this.getLoadingSpinner();
		}

		return (
			<Fragment>
				{this.getDialog()}
				{this.getImg()}
			</Fragment>
		);
	}

}
