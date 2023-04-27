import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g>
		<path fill='currentColor' d='M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z' />
		<path fill='none' d='M0 0h24v24H0z' />
	</g>
);

export default class CalendarIcon extends PureComponent {

	render () {
		return (
			<SVGWrapper width={24} height={24}>
				{paths()}
			</SVGWrapper>
		);
	}
}
