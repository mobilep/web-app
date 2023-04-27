import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd'>
		<path d='M-1-11h30v30H-1z' />
		<path fill='currentColor' d='M4 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm10 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8z' />
	</g>
);

export default class DotsIcon extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
	}

	render () {

		return (
			<SVGWrapper className={this.props.className} width={31} height={31}>
				{paths()}
			</SVGWrapper>
		);
	}

}
