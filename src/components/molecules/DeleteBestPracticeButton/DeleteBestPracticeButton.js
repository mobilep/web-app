import React from 'react';
import PropTypes from 'prop-types';
import RemoveItemButton from '../../atoms/RemoveItemButton';
import { withLanguageContext } from '../../../utils/LanguageContext';
import './styles.css';

const DeleteBestPracticeButton = ({ content: { scenarios }, onClick }) =>
	<RemoveItemButton onClick={onClick} className='DeleteBestPracticeButton' label={scenarios.deleteBestPractice} />;

DeleteBestPracticeButton.propTypes = {
	content: PropTypes.object,
	onClick: PropTypes.func,
};

export default withLanguageContext(DeleteBestPracticeButton);

