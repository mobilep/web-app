import React from 'react';
import { storiesOf } from '@storybook/react';

import AddBestPracticeButton from './AddBestPracticeButton';

storiesOf('2. Molecules / AddBestPracticeButton', module)
	.add('AddBestPracticeButton button', () => <AddBestPracticeButton label='Add Item' />);
