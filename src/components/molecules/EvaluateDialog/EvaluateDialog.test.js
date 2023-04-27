import React from 'react';
import { shallow } from 'enzyme';

import EvaluateDialog from './EvaluateDialog';
import { evaluationList } from './testData';
import constants from '../../../constants';

const { evaluateDialog, common, inbox } = constants.content.en;

describe('Molecule - EvaluateDialog', () => {

	it('Should render', () => {
		const wrapper = shallow(
			<EvaluateDialog
				fullName='Alvin Lane'
				initials='AL'
				skills='Skills'
				criteriaLists={{ }}
				evaluationList={evaluationList}
				text={{ ...evaluateDialog, ...common }}
				marks={[]}
				scenarioCriterias={inbox.scenarioCriterias}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

});
