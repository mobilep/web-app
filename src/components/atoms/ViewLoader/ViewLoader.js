import React from 'react';
import { Spinner } from '../../atoms';

import './styles.css';

const ViewLoader = () => (
	<div className='ViewLoader'>
		<Spinner className='ViewLoader-spinner' color='rgb(243, 66, 60)' />
	</div>
);

export default ViewLoader;
