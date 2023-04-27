import React from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon } from '..';
import { DotsIcon } from '../../../icons';

import './styles.css';

const DotsButton = ({ className, ...rest }) =>
	<ButtonIcon className={className} {...rest} icon={<DotsIcon className='DotsButton-icon' />} />;

DotsButton.propTypes = {
	className: PropTypes.string,
};

export default DotsButton;

