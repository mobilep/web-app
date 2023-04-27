import React from 'react';
import { storiesOf } from '@storybook/react';

import BeforeSendPreview from './BeforeSendPreview';

storiesOf('1. Atoms / BeforeSendPreview', module)
	.add('BeforeSendPreview', () => (
		<div style={{ width: '400px' }}>
			<BeforeSendPreview>
				Content
			</BeforeSendPreview>
		</div>
	));
