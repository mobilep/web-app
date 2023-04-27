import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' stroke='currentColor' strokeWidth='2'>
		<path strokeLinecap='round' strokeLinejoin='round' d='M2.757 32.831C6.219 41.151 14.427 47 24 47c12.703 0 23-10.297 23-23S36.703 1 24 1C14.512 1 6.366 6.745 2.85 14.946' />
		<path d='M31.172 23.437c.938.577.944 1.51 0 2.091l-9.601 5.909c-.939.577-1.7.15-1.7-.949V18.476c0-1.1.755-1.529 1.7-.948l9.6 5.909z' />
		<path strokeLinecap='round' strokeLinejoin='round' d='M3 15l5.5-2.5M3 15L1.5 9' />
	</g>
);

export default class ReplayIcon extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
	}

	render () {
		return (
			<SVGWrapper className={this.props.className} width={48} height={48}>
				{paths()}
			</SVGWrapper>
		);
	}

}
