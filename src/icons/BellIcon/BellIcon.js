import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<path fill='none' fillRule='evenodd' stroke='currentColor' strokeWidth='.7' d='M10.54 3.597c.168.122.283.28.317.45l.343-.068.037-.348a6.106 6.106 0 0 0-.646-.034h-.052zm-1.682 0h-.182a6.12 6.12 0 0 0-.505.02l.029.35.342.073a.76.76 0 0 1 .316-.443zM10.55 16.37h.65l-.336-.447a.894.894 0 0 1-.314.447zm-1.7 0a.894.894 0 0 1-.314-.447l-.336.447h.65zm-4.5-2.295c0 .232.188.42.42.42h10.46a.42.42 0 0 0 .42-.42v-.6a.348.348 0 0 0-.348-.349c-.579 0-1.048-.469-1.048-1.048V8.53c0-1.718-1.481-3.123-3.31-3.123H9.056c-1.829 0-3.31 1.405-3.31 3.122v3.551c0 .58-.47 1.048-1.048 1.048a.348.348 0 0 0-.348.348v.601z' />
);

export default class BellIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={20} height={20}>
				{paths()}
			</SVGWrapper>
		);
	}

}
