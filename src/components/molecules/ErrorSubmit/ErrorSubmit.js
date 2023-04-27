import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SubmitResult } from '../../atoms';
import { ErrorIcon } from '../../../icons';
import './styles.css';

const ErrorSubmit = (props) => {
	const className = classNames('ErrorSubmit', props.className);
	return (
		<SubmitResult {...props} className={className} icon={<ErrorIcon />} />
	);
};

ErrorSubmit.propTypes = {
	className: PropTypes.string,
};

export default ErrorSubmit;
