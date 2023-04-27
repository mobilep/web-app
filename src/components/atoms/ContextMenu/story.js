import React from 'react';
import { storiesOf } from '@storybook/react';
import ContextMenu from './ContextMenu';

const position = { top: 0, left: 0 };
const buttonProps = [
	{ label: 'Copy', onClick: () => null },
	{ label: 'Delete', onClick: () => null },
];

storiesOf('1. Atoms / ContextMenu', module)
	.add('ContextMenu', () => {
		return (
			<div>
				<ContextMenu position={position} buttonProps={buttonProps} />
			</div>
		);
	});
