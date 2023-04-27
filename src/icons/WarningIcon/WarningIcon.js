import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<path fill='currentColor' fillRule='evenodd' d='M15.699 17.676v-7.54a.749.749 0 1 0-1.498 0v7.54a.749.749 0 1 0 1.498 0zm.284 3.34v-.053a.983.983 0 1 0-1.965 0v.053a.983.983 0 0 0 1.965 0zM4 24L15 5l11 19H4z' />

);

export default class WarningIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper>
				{paths()}
			</SVGWrapper>
		);
	}

}
