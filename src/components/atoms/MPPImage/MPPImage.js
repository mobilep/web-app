import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MPPImage extends Component {

	static propTypes = {
		children: PropTypes.any,
		className: PropTypes.string,
		imageUrl: PropTypes.string,
	}

	state = {
		isImgValid: false,
	};

	checkImg (img) {

		const image = new Image();
		image.onload = () => {
			if (this._isMounted) {
				this.setState({ isImgValid: image.width > 1 });
			}
		};
		image.src = img;
		return image.width > 1;
	}

	componentDidMount () {
		this._isMounted = true;
	}

	componentWillUnmount () {
		this._isMounted = false;
	}

	componentDidUpdate ({ imageUrl }) {
		if (imageUrl !== this.props.imageUrl) {
			this.checkImg(this.props.imageUrl);
		}
	}

	UNSAFE_componentWillMount () {
		this.checkImg(this.props.imageUrl);
	}

	render () {
		const { children, className, imageUrl } = this.props;

		const style = this.state.isImgValid === false || !imageUrl
			? { backgroundColor: `rgba(243,66,60,1)` }
			: {
				background: `url(${imageUrl}) no-repeat center center / cover`,
			};

		return (
			<div
				className={className}
				style={style}>
				{children}
			</div>
		);
	}

}
