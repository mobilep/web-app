import React from 'react';
import { shallow } from 'enzyme';

import ConversationHeader from './ConversationHeader';

describe('Atom - ConversationHeader', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<ConversationHeader
				title='Test'
				scenarioCoach='Jon Doe'
				scenarioUser='Test Test'
				user={{ firstName: 'Jon', lastName: 'Doe' }}
				coach={{ firstName: 'Jon', lastName: 'Doe' }}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render with action button', () => {
		const wrapper = shallow(
			<ConversationHeader
				title='Test'
				actionButton
				actionButtonLabel='Label'
				scenarioCoach='Jon Doe'
				scenarioUser='Test Test'
				user={{ firstName: 'Jon', lastName: 'Doe' }}
				coach={{ firstName: 'Jon', lastName: 'Doe' }}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
