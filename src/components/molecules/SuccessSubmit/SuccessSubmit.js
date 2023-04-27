import React from 'react';
import { SubmitResult } from '../../atoms';
import { SuccessIcon } from '../../../icons';
import './styles.css';

const SuccessSubmit = (props) => {
	return (
		<SubmitResult {...props} className='SuccessSubmit' icon={<SuccessIcon />} />
	);
};

export default SuccessSubmit;
