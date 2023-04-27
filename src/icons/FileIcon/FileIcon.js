import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd'>
		<path fill='currentColor' d='M34.406 8.79c.867.857 1.594 2.568 1.594 3.794v26.65c0 1.226-1.008 2.22-2.25 2.22H2.25c-1.242 0-2.25-.994-2.25-2.22V2.22C0 .995 1.008 0 2.25 0h21c1.242 0 2.977.717 3.844 1.573l7.312 7.218zM24 3.147v8.698h8.813c-.141-.393-.352-.786-.516-.948L24.96 3.655c-.164-.162-.563-.37-.961-.509zm9 35.348V14.805h-9.75c-1.242 0-2.25-.995-2.25-2.22V2.96H3v35.533h30zM30 28.13v7.402H6v-4.441l4.5-4.442 3 2.961 9-8.883L30 28.13zm-19.5-4.442c-2.484 0-4.5-1.99-4.5-4.441 0-2.452 2.016-4.442 4.5-4.442s4.5 1.99 4.5 4.442-2.016 4.441-4.5 4.441z' />
		<path d='M-3 0h42v42H-3z' />
	</g>
);

export default class FileIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={36} height={42}>
				{paths()}
			</SVGWrapper>
		);
	}

}
