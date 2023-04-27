import React from 'react';
import { shallow } from 'enzyme';
import { groups } from '../GroupsPeopleList/testData';
import GroupPeopleItem from './GroupPeopleItem';

describe('Molecule - GroupPeopleItem', () => {
	it('Should render GroupPeopleItem component', () => {
		const wrapper = shallow(
			<GroupPeopleItem
				name={groups[0]._id}
				counter={4}
				people={groups[0]._users}
				header={groups[0].name}
				onSelectGroup={() => {}}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
