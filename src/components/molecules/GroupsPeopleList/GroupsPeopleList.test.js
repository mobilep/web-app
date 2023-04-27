import React from 'react';
import { shallow } from 'enzyme';
import { groups } from '../GroupsPeopleList/testData';
import GroupsPeopleList from './GroupsPeopleList';

describe('Molecule - GroupsPeopleList', () => {
	it('Should render GroupsPeopleList component', () => {
		const wrapper = shallow(
			<GroupsPeopleList groupList={groups} />
		);
		expect(wrapper).toMatchSnapshot();
	});
});
