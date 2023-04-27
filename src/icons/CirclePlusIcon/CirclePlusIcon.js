import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd' transform='translate(3 3)'>
		<circle cx='9.5' cy='9.5' r='9' stroke='currentColor' />
		<g fill='currentColor'>
			<path d='M9 6h1v7H9z' />
			<path d='M13 9v1H6V9z' />
		</g>
	</g>
);

export default class CirclePlusIcon extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
	}

	render () {

		return (
			<SVGWrapper className={this.props.className} width={24} height={24}>
				{paths()}
			</SVGWrapper>
		);
	}

}
