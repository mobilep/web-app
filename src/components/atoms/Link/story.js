import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import StoryRouter from 'storybook-react-router';

import Link from './Link';

const props = (({
	defaultHref = 'someLink',
} = {}) => ({
	to: text('to', defaultHref),
}));

storiesOf('1. Atoms / Link', module)
	.addDecorator(StoryRouter())
	.add('Link', () => <Link {...props()}>{text('text', 'someText')}</Link>);
