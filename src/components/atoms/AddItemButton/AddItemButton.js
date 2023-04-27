import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from '..';
import { CirclePlusIcon } from '../../../icons';

const AddItemButton = ({ className, ...rest }) =>
	<ButtonIcon className={className} {...rest} icon={<CirclePlusIcon />} />;

AddItemButton.propTypes = {
	className: PropTypes.string,
};

export default AddItemButton;
