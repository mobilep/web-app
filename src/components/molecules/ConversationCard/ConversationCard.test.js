import React from 'react';
import { shallow } from 'enzyme';

import ConversationCard from './ConversationCard';

describe('Molecule - ConversationCard', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<ConversationCard
				date={1530602808384}
				message='Message'
				person='Mr. Person'
				personInitials='MP'
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
