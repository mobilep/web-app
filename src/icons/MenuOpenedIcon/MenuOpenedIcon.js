import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='currentColor' fillRule='evenodd'>
		<path fill='none' d='M0 0h24v24H0V0z' />
		<path d='M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z' />
	</g>
);

export default class MenuOpenedIcon extends PureComponent {
	render () {
		return (
			<SVGWrapper {...this.props} width={24} height={24}>
				{paths()}
			</SVGWrapper>
		);
	}
}
