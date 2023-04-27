import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import BreadCrumbs from './BreadCrumbs';

const links = [
	{ text: 'Home', link: '#' },
	{ text: 'Users', link: '#' },
	{ text: 'User 1', link: '#' },
];

storiesOf('1. Atoms / BreadCrumbs', module)
	.add('BreadCrumbs', () => (
		<Router>
			<BreadCrumbs links={links} />
		</Router>
	));
