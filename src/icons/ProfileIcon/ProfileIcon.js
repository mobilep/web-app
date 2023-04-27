import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd' strokeWidth='1.5' transform='translate(6 6)' stroke='currentColor'>
		<circle cx='9.5' cy='2.5' r='3.25' />
		<path strokeLinecap='round' d='M14.362 11.77A9 9 0 0 0 0 19M18 19c0-1.376-.309-2.68-.861-3.847' />
	</g>
);

export default class ProfileIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper>
				{paths()}
			</SVGWrapper>
		);
	}

}
