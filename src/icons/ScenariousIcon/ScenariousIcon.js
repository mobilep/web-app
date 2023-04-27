import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd'>
		<path stroke='currentColor' strokeLinecap='round' strokeWidth='1.5' d='M16.745 22.22c-1.516-.674-3.978-.672-5.494.002l-2.502 1.556C7.231 24.453 6 23.658 6 22.008V7.992A3 3 0 0 1 8.993 5h11.014A2.993 2.993 0 0 1 23 7.991V22.01c0 1.652-1.22 2.45-2.746 1.77' />
		<path fill='currentColor' d='M16.763 12.898c.934.591.937 1.547 0 2.14l-2.573 1.629c-.933.59-1.69.175-1.69-.93V12.2c0-1.105.754-1.523 1.69-.93l2.573 1.628z' />
	</g>
);

export default class ScenariousIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper>
				{paths()}
			</SVGWrapper>
		);
	}

}
