import React from 'react';
import { shallow } from 'enzyme';

import MessageBubble from './MessageBubble';

describe('Atom - MessageBubble', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<MessageBubble>
				Text
			</MessageBubble>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render as incoming', () => {
		const wrapper = shallow(
			<MessageBubble incoming>
				Text
			</MessageBubble>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render as single or last', () => {
		const wrapper = shallow(
			<MessageBubble singleOrLast>
				Text
			</MessageBubble>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render as incoming single or last', () => {
		const wrapper = shallow(
			<MessageBubble incoming singleOrLast>
				Text
			</MessageBubble>
		);
		expect(wrapper).toMatchSnapshot();
	});

});

