import React from 'react';
import { ErrorBox } from '..';
import { WarningIcon } from '../../../icons';

const FormErrorBox = (props) => {
	return (
		<ErrorBox {...props} icon={<WarningIcon />} />
	);
};

export default FormErrorBox;
