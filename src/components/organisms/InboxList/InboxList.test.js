import React from 'react';
import { shallow } from 'enzyme';

import InboxList from './InboxList';

describe('Organism - InboxList', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<InboxList match={{ params: { view: 'chat' } }} />
		);
		expect(wrapper).toMatchSnapshot();
	});

});

