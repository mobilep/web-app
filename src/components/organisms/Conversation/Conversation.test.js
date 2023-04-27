// import React from 'react';
// import { mount } from 'enzyme';
// import { database } from 'firebase';
import mockMatchMedia from '../../../helpers/test/matchMedia';

// import Conversation from './Conversation';
// import testData from './testData';

// jest.mock('firebase');

describe('Organism - Conversation', () => {

	beforeAll(() => mockMatchMedia());

	it('Should render', () => {
		/* NOTE: Test temporarily disabled because Enzyme 3.3.0 has a bug where it doesn't handle the Context API
		   correctly - https://github.com/airbnb/enzyme/issues/1620. Fixed, waiting for release. */

		// database.mockImplementation(() => ({}));
		// const wrapper = mount(<Conversation data={testData} />);
		// expect(wrapper).toMatchSnapshot();
	});

});
