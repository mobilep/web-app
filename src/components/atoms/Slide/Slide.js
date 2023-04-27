import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function Slide ({ title, imageSrc, children }) {
	return (
		<div className='Slide'>
			<div className='Slide-content'>
				{imageSrc && <img src={imageSrc} className='Slide-img' alt='' />}
				<h1 className='Slide-title'>{title}</h1>
				{children}
			</div>
		</div>
	);
}

Slide.propTypes = {
	children: PropTypes.any,
	imageSrc: PropTypes.string,
	title: PropTypes.string,
};
