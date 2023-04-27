import React from 'react';
import { shallow } from 'enzyme';
import mockMatchMedia from '../../../helpers/test/matchMedia';
import ProfileAvatar from './ProfileAvatar';

describe('Atom - ProfileAvatar', () => {

	beforeAll(() => mockMatchMedia());

	it('Should render', () => {
		const wrapper = shallow(<ProfileAvatar
			initials='JD'
			imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBlUvtjoDyRYSmS6hoSVke1HcE-3ZeLGHLR7RnTIBp3jAYv39B'
			color='#87d4ee'
			text='Edit'
			onAvatarChange={() => {}} />);
		expect(wrapper).toMatchSnapshot();
	});
});
