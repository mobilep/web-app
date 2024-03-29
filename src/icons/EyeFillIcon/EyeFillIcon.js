import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd'>
		<path transform='translate(9, 12)' fill='currentColor' d='M9.18 3.76c.44 0 .853.113 1.24.34.387.227.693.533.92.92.227.387.34.8.34 1.24 0 .44-.113.853-.34 1.24a2.536 2.536 0 0 1-.92.92c-.387.227-.8.34-1.24.34-.44 0-.853-.113-1.24-.34a2.536 2.536 0 0 1-.92-.92c-.227-.387-.34-.8-.34-1.24 0-.44.113-.853.34-1.24.227-.387.533-.693.92-.92.387-.227.8-.34 1.24-.34zm0 6.68c.76 0 1.46-.187 2.1-.56a4.155 4.155 0 0 0 1.52-1.52c.373-.64.56-1.34.56-2.1s-.187-1.46-.56-2.1a4.155 4.155 0 0 0-1.52-1.52 4.094 4.094 0 0 0-2.1-.56c-.76 0-1.46.187-2.1.56-.64.373-1.147.88-1.52 1.52S5 5.5 5 6.26s.187 1.46.56 2.1c.373.64.88 1.147 1.52 1.52s1.34.56 2.1.56zM9.18 0a9.752 9.752 0 0 1 7.09 3 9.785 9.785 0 0 1 2.09 3.26 9.677 9.677 0 0 1-2.09 3.25 9.817 9.817 0 0 1-7.09 2.99A9.817 9.817 0 0 1 0 6.26 9.785 9.785 0 0 1 2.09 3a9.752 9.752 0 0 1 7.09-3z' />
		<path d='M-9-12h36v36H-9z' />
	</g>
);

export default class EyeFillIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={36} height={36}>
				{paths()}
			</SVGWrapper>
		);
	}

}
