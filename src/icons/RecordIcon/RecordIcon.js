import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd' transform='translate(-16 -16)'>
		<path d='M0 0h50v50H0z' />
		<circle cx='25' cy='25' r='9' fill='currentColor' />
	</g>
);

export default class RecordIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper height={18} width={18}>
				{paths()}
			</SVGWrapper>
		);
	}

}
