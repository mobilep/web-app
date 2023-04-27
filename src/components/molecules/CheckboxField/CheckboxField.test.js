import React from 'react';
import { shallow } from 'enzyme';
import CheckboxField from './CheckboxField';

describe('Molecule - CheckboxField', () => {
	it('Should render CheckboxField component', () => {
		const wrapper = shallow(<CheckboxField />);
		expect(wrapper).toMatchSnapshot();
	});
});
