import React from 'react';
import PropTypes from 'prop-types';
import AddItemButton from '../../atoms/AddItemButton';
import './styles.css';

const AddBestPracticeButton = ({ onClick, label }) =>
	<AddItemButton onClick={onClick} className='AddBestPracticeButton' label={label} />;

AddBestPracticeButton.propTypes = {
	label: PropTypes.string,
	onClick: PropTypes.func,
};

export default AddBestPracticeButton;
