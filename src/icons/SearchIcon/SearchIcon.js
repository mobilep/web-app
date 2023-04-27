import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<path fill='currentColor' fillRule='evenodd' d='M19.607 16.518a4.13 4.13 0 0 0-4.125-4.125 4.13 4.13 0 0 0-4.125 4.125 4.13 4.13 0 0 0 4.125 4.125 4.13 4.13 0 0 0 4.125-4.125zm4.714 7.66c0 .645-.534 1.18-1.178 1.18-.313 0-.617-.13-.829-.35l-3.158-3.15A6.48 6.48 0 0 1 9 16.518a6.48 6.48 0 0 1 6.482-6.482 6.48 6.48 0 0 1 5.34 10.156l3.159 3.158c.212.212.34.516.34.829z' />
);

export default class SearchIcon extends PureComponent {

	render () {
		return (
			<SVGWrapper width={34} height={34}>
				{paths()}
			</SVGWrapper>
		);
	}

}
