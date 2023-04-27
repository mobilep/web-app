import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const getClassName = (className) => classNames('UploadingProgressRing', className);

const UploadingProgressRing = ({
	children,
	className,
	radius = 50,
	stroke = 3,
	progress = 0,
}) => {
	const normalizedRadius = radius - stroke * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset = circumference - progress / 100 * circumference;
	const size = radius * 2;
	const style = {
		width: size,
		height: size,
	};

	return (
		<div className={getClassName(className)} style={style}>
			{children}
			<svg height={size} width={size}>
				<circle
					stroke='currentColor'
					fill='transparent'
					strokeWidth={stroke}
					strokeDasharray={`${circumference} ${circumference}`}
					style={{ strokeDashoffset }}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
			</svg>
		</div>
	);
};

UploadingProgressRing.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	progress: PropTypes.number,
	radius: PropTypes.number,
	stroke: PropTypes.number,
};

export default UploadingProgressRing;
