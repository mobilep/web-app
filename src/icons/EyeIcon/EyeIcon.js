import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<path fill='currentColor' fillRule='evenodd' d='M18.059 14.52c1.041 0 1.927.367 2.656 1.103.729.736 1.094 1.618 1.094 2.647 0 1.041-.365 1.927-1.094 2.656-.73.729-1.615 1.094-2.656 1.094-1.03 0-1.911-.365-2.647-1.094-.736-.73-1.103-1.615-1.103-2.656 0-1.03.367-1.911 1.103-2.647.736-.736 1.618-1.103 2.647-1.103zm0 6.25c.69 0 1.276-.248 1.757-.743a2.458 2.458 0 0 0 .723-1.777c0-.69-.244-1.28-.732-1.768a2.409 2.409 0 0 0-1.768-.732c-.69 0-1.28.244-1.768.732a2.409 2.409 0 0 0-.732 1.768c0 .69.25 1.283.752 1.777.501.495 1.09.743 1.768.743zM28 18.113c0 .026.003.052.01.078.006.026.01.052.01.079a.453.453 0 0 1-.01.087.453.453 0 0 0-.01.088c-.013.013-.02.026-.02.04v.058l-.02.02v.029c0 .006-.006.016-.019.03a10.354 10.354 0 0 1-1.718 2.773 10.79 10.79 0 0 1-2.364 2.04c-.872.554-1.806.977-2.802 1.27-.996.293-2.015.44-3.057.44-1.042 0-2.06-.147-3.057-.44a11.002 11.002 0 0 1-2.802-1.27 10.75 10.75 0 0 1-4.102-4.814v-.058l-.01-.01c-.006-.007-.01-.017-.01-.03v-.039A.15.15 0 0 0 8 18.426a.321.321 0 0 0-.01-.078.321.321 0 0 1-.01-.078c0-.027.004-.056.01-.088a.453.453 0 0 0 .01-.088c.013-.013.02-.026.02-.04v-.058l.02-.02v-.058a10.77 10.77 0 0 1 1.747-2.783c.71-.814 1.5-1.5 2.373-2.06a10.878 10.878 0 0 1 8.936-1.28c.996.293 1.924.72 2.783 1.28a11.1 11.1 0 0 1 2.344 2.06 10.513 10.513 0 0 1 1.718 2.783c.013.013.02.023.02.03v.029l.01.01c.006.006.01.016.01.029v.039a.15.15 0 0 0 .019.058zm-10 5.782c.885 0 1.761-.118 2.627-.352a9.24 9.24 0 0 0 2.441-1.055 9.493 9.493 0 0 0 2.09-1.758 9.306 9.306 0 0 0 1.572-2.46 9.447 9.447 0 0 0-3.642-4.229 9.327 9.327 0 0 0-2.432-1.074 9.653 9.653 0 0 0-2.617-.362c-.885 0-1.761.12-2.627.362a9.452 9.452 0 0 0-2.451 1.074 9.821 9.821 0 0 0-2.11 1.768 9.172 9.172 0 0 0-1.581 2.46 9.172 9.172 0 0 0 1.582 2.461 9.692 9.692 0 0 0 2.1 1.758c.76.469 1.571.82 2.43 1.055.86.234 1.733.352 2.618.352z' />
);

export default class EyeIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={36} height={36}>
				{paths()}
			</SVGWrapper>
		);
	}

}
