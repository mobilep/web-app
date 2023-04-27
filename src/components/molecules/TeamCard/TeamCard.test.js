import React from 'react';
import { shallow } from 'enzyme';
import TeamCard from './TeamCard';
import { avatars } from '../AvatarGroup/testData';

describe('Molecule - TeamCard', () => {
	it('Should render', () => {
		const wrapper = shallow(
			<TeamCard
				active={false}
				counter={15}
				header='Techmagic team'
				people={avatars}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
