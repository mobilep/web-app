import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' stroke='currentColor' strokeWidth='2' transform='translate(1 1)'>
		<g strokeLinecap='round'>
			<path d='M31.228 19L20.38 28.816M14.955 23.084l5.4 5.747' />
		</g>
		<circle cx='23' cy='23' r='23' />
	</g>
);

export default class RecordSendIcon extends PureComponent {
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
