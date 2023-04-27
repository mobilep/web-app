import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button } from '../..';
import './styles.css';
import { LanguageContext } from '../../../utils';

const getClassName = (className) => classNames('SendButton', { [className]: className });

const SendButton = ({ className, ...rest }) => {
	const { common } = React.useContext(LanguageContext);

	return (
		<Button { ...rest } className={getClassName(className)}>
			{ common.send }
		</Button>
	);
};

SendButton.propTypes = {
	className: PropTypes.string,
};

export default SendButton;
