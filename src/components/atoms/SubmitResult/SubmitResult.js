import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './styles.css';

const SubmitResult = ({
	buttonLabel,
	className = '',
	icon,
	message,
	onButtonClick = () => {},
	title,
}) => {
	return (
		<div className={`SubmitResult ${className}`}>
			<div className={`SubmitResult-content`}>
				<div>{icon}</div>
				<div>
					<h3 className='SubmitResult-title'>
						{title}
					</h3>
					<div className='SubmitResult-message'>
						{message}
					</div>
				</div>
				<div>
					<Button onClick={onButtonClick}>
						{buttonLabel}
					</Button>
				</div>
			</div>
		</div>
	);
};

SubmitResult.propTypes = {
	buttonLabel: PropTypes.string.isRequired,
	className: PropTypes.string,
	icon: PropTypes.element,
	message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	onButtonClick: PropTypes.func.isRequired,
	onSecondaryButtonClick: PropTypes.func,
	secondaryButton: PropTypes.bool,
	secondaryButtonLabel: PropTypes.string,
	title: PropTypes.string,
};

export default SubmitResult;
