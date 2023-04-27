import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MessageBoxBaseButton } from '../..';
import { RecordIcon } from '../../../icons';
import './styles.css';

const getClassName = (className) => classNames('RecordButton', { [className]: className });

const RecordButton = ({ className, ...rest }) => (
	<MessageBoxBaseButton { ...rest } className={getClassName(className)}>
		<RecordIcon />
	</MessageBoxBaseButton>
);

RecordButton.propTypes = {
	className: PropTypes.string,
};

export default RecordButton;
