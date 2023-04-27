import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
		<path d='M21.333 21.333l-6.666-6.666L21.333 8' />
		<path d='M8 21.333l6.667-6.666L8 8' />
	</g>
);

export default class CloseIcon extends PureComponent {
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
