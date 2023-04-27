import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageMessage from './ImageMessage';
import { dropboxIcon } from '../../../images';

storiesOf('1. Atoms / ImageMessage', module)
	.add('ImageMessage', () =>	(
		<ImageMessage imgSrc={dropboxIcon} loadingState='COMPLETED' />
	))
	.add('ImageMessage with loading state', () =>	(
		<ImageMessage imgSrc='' loadingState='CHECKING' />
	));
