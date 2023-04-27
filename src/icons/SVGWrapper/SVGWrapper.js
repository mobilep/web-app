import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './styles.css';

export default class SVGWrapper extends PureComponent {

	getClassName (className) {
		return classNames('svgWrapper', className);
	}

	render () {
		const {
			className,
			height,
			width,
			children,
		} = this.props;

		return (
			<svg
				className={this.getClassName(className)}
				version='1.1'
				viewBox={`0 0 ${width} ${height}`}
				xmlns='http://www.w3.org/2000/svg'
				xmlnsXlink='http://www.w3.org/1999/xlink'
			>
				{children}
			</svg>
		);
	}

}

SVGWrapper.defaultProps = {
	color: 'currentColor',
	height: 30,
	width: 30,
};

SVGWrapper.propTypes = {
	children: PropTypes.element.isRequired,
	className: PropTypes.string,
	height: PropTypes.number,
	width: PropTypes.number,
};
