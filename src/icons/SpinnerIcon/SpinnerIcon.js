import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = (color) => (
	<path fill={`${color}`} d='M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z' />
);

export default class PlayIcon extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
		color: PropTypes.string,
	}

	render () {
		const { color = '#fff' } = this.props;
		return (
			<SVGWrapper className={this.props.className} width={50} height={50} >
				{paths(color)}
			</SVGWrapper>
		);
	}

}
