import React from 'react';
import { shallow } from 'enzyme';

import NewMessageCard from './NewMessageCard';

const PROPS = {
	personInitials: 'AL',
	avatar: 'https://i.ytimg.com/vi/tESeU278FpU/maxresdefault.jpg',
	person: 'Alvin Lane',
};

describe('Molecule - NewMessageCard', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<NewMessageCard
				{...PROPS}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render in active state', () => {
		const wrapper = shallow(
			<NewMessageCard
				{...PROPS}
				active
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
