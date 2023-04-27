import React from 'react';
import PropTypes from 'prop-types';
import { FileIcon } from '../../../icons';

import './styles.css';

const DropArea = ({ text }) => (
	<div className='DropArea'>
		<span className='DropArea-paragraph'>
			<FileIcon />
			{text}
		</span>
	</div>
);

DropArea.propTypes = {
	text: PropTypes.string,
};

export default DropArea;
