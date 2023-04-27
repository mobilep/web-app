import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd' transform='translate(3 3)'>
		<g fill='currentColor'>
			<path d='M9 6h1v7H9z' />
			<path d='M13 9v1H6V9z' />
		</g>
	</g>
);

export default class PlusIcon extends PureComponent {
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
