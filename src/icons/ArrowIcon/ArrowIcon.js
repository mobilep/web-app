import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd'>
		<path d='M-2-3h20v20H-2z' />
		<path fill='currentColor' fillRule='nonzero' d='M11.865 8H1a1 1 0 0 1 0-2h10.865L8.232 1.64A1 1 0 1 1 9.768.36l4.998 5.998a.996.996 0 0 1 0 1.284L9.768 13.64a1 1 0 0 1-1.536-1.28L11.865 8z' />
	</g>
);

export default class ArrowIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={15} height={14}>
				{paths()}
			</SVGWrapper>
		);
	}

}
