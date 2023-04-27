import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from '..';
import { TrashIcon } from '../../../icons';

const RemoveItemButton = ({ className, ...rest }) =>
	<ButtonIcon className={className} {...rest} icon={<TrashIcon />} />;

RemoveItemButton.propTypes = {
	className: PropTypes.string,
};

export default RemoveItemButton;
