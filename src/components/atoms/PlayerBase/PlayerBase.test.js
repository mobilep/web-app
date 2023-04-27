import React from 'react';
import { shallow } from 'enzyme';

import PlayerBase from './PlayerBase';

describe('Atom - PlayerBase', () => {

	it('Should render', () => {
		const wrapper = shallow(<PlayerBase streamUrl='url' fallBackStreamUrl='url2' />);
		// An error is logged as Shaka Player can't start (because we're rendering in a test environment).
		// eslint-disable-next-line no-console
		console.error = () => {};
		expect(wrapper).toMatchSnapshot();
	});

});
