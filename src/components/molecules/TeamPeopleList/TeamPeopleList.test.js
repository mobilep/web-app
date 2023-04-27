import React from 'react';
import { shallow } from 'enzyme';
import TeamPeopleList from './TeamPeopleList';
import { teamData } from './testData';

describe('Molecule - TeamPeopleList', () => {
	it('Should render default', () => {
		const wrapper = shallow(<TeamPeopleList list={teamData._users} />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Should render edit mode', () => {
		const wrapper = shallow(<TeamPeopleList list={teamData._users} />);
		expect(wrapper).toMatchSnapshot();
	});
});
