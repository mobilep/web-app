import React from 'react';
import { shallow } from 'enzyme';
import constants from '../../../constants';

import Message from './Message';

const { common: { messageTypes } } = constants;

describe('Atom - Message', () => {

	describe(`with type ${messageTypes.TEXT}`, () => {
		it(`should render`, () => {
			const wrapper = shallow(<Message message={{
				content: 'Some content',
				type: messageTypes.TEXT,
			}} />);
			expect(wrapper).toMatchSnapshot();
		});

		it(`should render with linebreaks`, () => {
			const wrapper = shallow(<Message message={{
				content: 'abc\n\nabc',
				type: messageTypes.TEXT,
			}} />);
			expect(wrapper).toMatchSnapshot();
		});
	});

	it(`should render with type ${messageTypes.EVALUATION}`, () => {
		const wrapper = shallow(
			<Message
				message={{
					content: {
						text: 'Text',
						avgMark: '3',
					},
					type: messageTypes.EVALUATION,
				}}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it(`should render with type ${messageTypes.VIDEO}`, () => {
		const wrapper = shallow(
			<Message
				message={{
					content: {
						thumbnailUrl: 'url',
					},
					type: messageTypes.VIDEO,
				}}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});

