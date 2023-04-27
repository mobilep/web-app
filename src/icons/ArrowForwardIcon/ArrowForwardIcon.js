import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='currentColor' fillRule='evenodd'>
		<path d='M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z' />
		<path d='M0 0h24v24H0z' fill='none' />
	</g>
);

export default class ArrowForwardIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={24} height={24}>
				{paths()}
			</SVGWrapper>
		);
	}

}
