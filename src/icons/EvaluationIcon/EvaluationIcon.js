import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd'>
		<path d='M0 0h20v20H0z' />
		<g fill='currentColor'>
			<path d='M3 0h2.1a1 1 0 0 1 .87.506L11.931 11H8.114a1 1 0 0 1-.87-.506l-5.113-9A1 1 0 0 1 3 0z' />
			<circle cx='10' cy='16' r='4' />
			<path fillOpacity='.8' d='M12.759 9.992L11 6.897 14.547.74l.078-.165A1 1 0 0 1 15.53 0h1.646a1 1 0 0 1 .87 1.494l-4.547 8a1 1 0 0 1-.74.498z' />
		</g>
	</g>
);

export default class EvaluationIcon extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
	}

	render () {

		return (
			<SVGWrapper className={this.props.className} width={20} height={20}>
				{paths()}
			</SVGWrapper>
		);
	}

}
