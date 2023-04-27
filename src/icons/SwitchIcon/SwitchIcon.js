import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<path fill='none' fillRule='evenodd' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M11 16l4-3 4 3' />
);

export default class SwitchIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={30} height={30}>
				{paths()}
			</SVGWrapper>
		);
	}

}
