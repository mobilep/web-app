import React from 'react';
import { storiesOf } from '@storybook/react';
import DragAndDrop from './DragAndDrop';
import constants from '../../../constants';

storiesOf('2. Molecules / DragAndDrop', module)
	.add('DragAndDrop', () => <DragAndDrop fileType='photo' texts={constants.content.en} />);
