import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

const PROPS = {
	header: 'Header',
	paragraph: 'Paragraph',
};

describe('Molecule - Form', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<Form {...PROPS}>
				Content
			</Form>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render in submitting state', () => {
		const wrapper = shallow(
			<Form {...PROPS} submitting>
				Content
			</Form>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
