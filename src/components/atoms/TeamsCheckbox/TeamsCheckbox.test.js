import React from 'react';
import { shallow } from 'enzyme';
import mockMatchMedia from '../../../helpers/test/matchMedia';

import TeamsCheckbox from './TeamsCheckbox';

describe('Atom - TeamsCheckbox', () => {

	beforeAll(() => mockMatchMedia());

	it('Should render default mode', () => {
		const wrapper = shallow(
			<TeamsCheckbox
				avatarInitials='NN'
				avatar='https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'
				avatarBgColor='#F3423C'
				name='Myra Holt'
			/>);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render edit mode', () => {
		const wrapper = shallow(
			<TeamsCheckbox
				avatarInitials='NN'
				avatar='https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'
				avatarBgColor='#F3423C'
				name='Myra Holt'
				editMode
			/>);
		expect(wrapper).toMatchSnapshot();
	});
});
