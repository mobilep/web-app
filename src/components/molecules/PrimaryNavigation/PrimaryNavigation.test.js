import React from 'react';
import { shallow } from 'enzyme';

import PrimaryNavigation from './PrimaryNavigation';
import constants from '../../../constants/content';

const { common, primaryNav } = constants.en;

describe('Molecule - PrimaryNavigation', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<PrimaryNavigation
				content={{ common, primaryNav }}
				onSignOut={() => {}}
				unreadInboxCount={4}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
