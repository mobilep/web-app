import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const OverlayButton = ({ label, icon, ...rest }) => {
	return (
		<button { ...rest } className='OverlayButton'>
			{icon}
			<div className='OverlayButton-label'>
				{label}
			</div>
		</button>
	);
};

OverlayButton.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.element]),
	className: PropTypes.string,
	icon: PropTypes.object,
	label: PropTypes.string,
};

export default OverlayButton;
