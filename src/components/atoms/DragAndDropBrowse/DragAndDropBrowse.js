import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../..';

import './styles.css';

const DragAndDropBrowse = ({ buttonLabel, text, onClick }) => {

	return (
		<div className='DragAndDropBrowse'>
			<span className='DragAndDropBrowse-paragraph'>
				{text}
			</span>

			<Button primary className='DragAndDropBrowse-browseBtn' onClick={onClick}>
				{buttonLabel}
			</Button>
		</div>
	);
};

DragAndDropBrowse.propTypes = {
	buttonLabel: PropTypes.string,
	onClick: PropTypes.func,
	text: PropTypes.string,
};

export default DragAndDropBrowse;
