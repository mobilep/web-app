import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd' strokeWidth='1.5' transform='translate(1 6)' stroke='currentColor'>
		<circle cx='9.5' cy='2.5' r='3.25' />
		<circle cx='20.5' cy='6.5' r='2.25' />
		<path strokeLinecap='round' d='M28 19a7 7 0 0 0-7-7M14 11.77A8.59 8.59 0 0 0 8.773 10C3.928 10 0 14.03 0 19M17.861 19A9.632 9.632 0 0 0 17 15' />
	</g>
);

export default class TeamIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper>
				{paths()}
			</SVGWrapper>
		);
	}

}
