import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd' stroke='#FFF' strokeWidth='2' transform='translate(2 2)'>
		<circle cx='25' cy='25' r='25' fill='#FFF' fillOpacity='.32' />
		<path strokeLinecap='round' strokeLinejoin='round' d='M31.831 22.58c1.546.988 1.537 2.854-.008 3.841l-9.602 6.138C20.625 33.579 19 32.688 19 30.79V18.205c0-1.894 1.626-2.788 3.222-1.768l9.61 6.143z' />
	</g>
);

export default class PlayIcon extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
	}

	render () {
		return (
			<SVGWrapper className={this.props.className} width={54} height={54}>
				{paths()}
			</SVGWrapper>
		);
	}

}
