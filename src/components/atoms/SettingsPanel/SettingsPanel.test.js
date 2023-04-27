import React from 'react';
import { shallow } from 'enzyme';
import { QuestionIcon } from '../../../icons';

import SettingsPanel from './SettingsPanel';

describe('Atom - SettingsPanel', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<SettingsPanel
				title='Title'
				description='Description'
				icon={<QuestionIcon />}
				action={<a href='#'>Some link</a>}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
