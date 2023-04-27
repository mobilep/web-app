import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { MessageBoxBaseButton } from '../..';
import { VideoCameraIcon } from '../../../icons';

import './styles.css';

const getClassName = (className) => classNames('AddVideoButton', { [className]: className });

const AddVideoButton = ({ className, ...rest }) => (
	<MessageBoxBaseButton { ...rest } className={getClassName(className)} >
		<VideoCameraIcon />
	</MessageBoxBaseButton>
);

AddVideoButton.propTypes = {
	className: PropTypes.string,
};

export default AddVideoButton;
