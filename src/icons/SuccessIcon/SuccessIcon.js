import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<path fill='currentColor' fillRule='evenodd' d='M30 0c4.14 0 8.037.781 11.69 2.344 3.652 1.562 6.835 3.7 9.55 6.416 2.715 2.715 4.854 5.898 6.416 9.55C59.22 21.964 60 25.86 60 30s-.781 8.037-2.344 11.69c-1.562 3.652-3.7 6.835-6.416 9.55-2.715 2.715-5.898 4.854-9.55 6.416C38.036 59.22 34.14 60 30 60s-8.037-.781-11.69-2.344c-3.652-1.562-6.835-3.7-9.55-6.416-2.715-2.715-4.854-5.898-6.416-9.55C.78 38.036 0 34.14 0 30s.781-8.037 2.344-11.69c1.562-3.652 3.7-6.835 6.416-9.55 2.715-2.715 5.898-4.854 9.55-6.416C21.964.78 25.86 0 30 0zm0 57c3.598 0 6.974-.7 10.127-2.098 3.154-1.398 5.9-3.298 8.241-5.701 2.341-2.403 4.198-5.21 5.572-8.42C55.313 37.57 56 34.134 56 30.47c0-3.664-.687-7.1-2.06-10.311-1.374-3.21-3.23-6.007-5.572-8.39-2.34-2.383-5.087-4.274-8.24-5.672C36.973 4.699 33.597 4 30 4s-6.974.7-10.127 2.098c-3.154 1.398-5.9 3.289-8.241 5.672-2.341 2.383-4.198 5.18-5.572 8.39C4.687 23.37 4 26.807 4 30.47c0 3.664.687 7.1 2.06 10.31 1.374 3.211 3.23 6.018 5.572 8.42 2.34 2.404 5.087 4.304 8.24 5.702C23.027 56.301 26.403 57 30 57zm11.77-38.41c.392-.393.842-.59 1.351-.59s.96.197 1.35.59c.353.354.529.796.529 1.327 0 .53-.176.973-.528 1.327l-18.73 18.93-.236.236a1.7 1.7 0 0 1-1.32.59 1.7 1.7 0 0 1-1.322-.59l-9.336-9.318c-.352-.354-.528-.796-.528-1.327 0-.53.176-.973.528-1.327.392-.393.842-.59 1.35-.59.51 0 .96.197 1.351.59l7.927 7.962 17.615-17.81z' />

);

export default class SuccessIcon extends PureComponent {

	render () {

		return (
			<SVGWrapper width={60} height={60}>
				{paths()}
			</SVGWrapper>
		);
	}

}
