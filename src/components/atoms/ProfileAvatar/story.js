import React from 'react';
import { storiesOf } from '@storybook/react';
import ProfileAvatar from './ProfileAvatar';

storiesOf('1. Atoms / ProfileAvatar', module)
	.add('default', () =>
		(<ProfileAvatar
			initials='JD'
			imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlUvtjoDyRYSmS6hoSVke1HcE-3ZeLGHLR7RnTIBp3jAYv39B'
			color='#87d4ee'
			text='Edit' />));
