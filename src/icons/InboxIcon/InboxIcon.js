import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g id='Page-1' stroke='none' strokeWidth='1' >
		<g id='inbox-emty'>
			<path fill='currentColor' transform='translate(6, 4)' d='M12.287,13 L12.079,13.415 C11.999,13.574 11.783,13.864 11.407,14.165 C10.756,14.685 9.89,15 8.75,15 C7.61,15 6.745,14.685 6.094,14.165 C5.718,13.864 5.501,13.574 5.421,13.415 L5.214,13 L1.5,13 L1.5,2.742 C1.5,2.057 2.058,1.5 2.745,1.5 L14.755,1.5 C15.443,1.5 16,2.057 16,2.742 L16,13 L12.287,13 Z M14.756,7.94131372e-16 L2.745,7.94131372e-16 C1.2299209,-0.000552544928 0.00110418438,1.2269212 0,2.742 L0,17.752 C0.000549969998,19.2682796 1.22872188,20.4977938 2.745,20.5 L14.755,20.5 C16.2717357,20.4988958 17.5005525,19.268736 17.5,17.752 L17.5,2.742 C17.498896,1.22731175 16.2706886,-4.02332586e-07 14.756,7.94131372e-16 Z' id='Shape' />
		</g>
	</g>
);

export default class InboxIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper>
				{paths()}
			</SVGWrapper>
		);
	}

}
