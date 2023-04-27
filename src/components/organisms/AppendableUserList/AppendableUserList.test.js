import React from 'react';
import { shallow } from 'enzyme';

import AppendableUserList from './AppendableUserList';
import { userItems } from './testData';

describe('Organism - AppendableUserList', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<AppendableUserList
				searchUserItems={[]}
				userItems={userItems}
				content={{ scenarios: { peopleSection: {} } }}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
