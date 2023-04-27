import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<path fill='#F3423C' d='M13.1785859,19.7143044 C15.1305972,19.7143044 16.7143044,18.1305972 16.7143044,16.1785859 L16.7143044,14.1406371 L21.661855,19.0881876 C21.8091766,19.247786 22.0056054,19.3214468 22.214311,19.3214468 C22.3125254,19.3214468 22.4230166,19.2968932 22.521231,19.2600628 C22.8035974,19.1372948 23.0000262,18.8549284 23.0000262,18.5357316 L23.0000262,5.17857283 C23.0000262,4.85937602 22.8035974,4.57700962 22.521231,4.45424161 C22.4230166,4.41741121 22.3125254,4.39285761 22.214311,4.39285761 C22.0056054,4.39285761 21.8091766,4.46651841 21.661855,4.62611682 L16.7143044,9.56139056 L16.7143044,7.5357185 C16.7143044,5.58370725 15.1305972,4 13.1785859,4 L4.5357185,4 C2.58370725,4 1,5.58370725 1,7.5357185 L1,16.1785859 C1,18.1305972 2.58370725,19.7143044 4.5357185,19.7143044 L13.1785859,19.7143044 Z' />
);

export default class VideoCameraIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={24} height={24}>
				{paths()}
			</SVGWrapper>
		);
	}

}
