import React from 'react';
import PropTypes from 'prop-types';
import { EmptyInboxIcon } from '../../../icons';

import './styles.css';

const EmptyInboxArea = ({ text }) => {
	return (
		<div className='EmptyInboxArea-empty-area-wrapper'>
			<EmptyInboxIcon className='EmptyInboxArea-empty-wrapper' />
			<div className='EmptyInboxArea-empty-chat-area'>{text}</div>
		</div>
	);
};

EmptyInboxArea.propTypes = {
	text: PropTypes.string,
};

export default EmptyInboxArea;
