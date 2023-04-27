import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd'>
		<path fill='currentColor' d='M11.25 1.914V2.5h-.781L9.53 13.867c0 .313-.11.58-.332.801a1.091 1.091 0 0 1-.8.332H2.89c-.313 0-.58-.11-.801-.332a1.091 1.091 0 0 1-.332-.8L.82 2.5H0v-.586h3.125v-.781c0-.313.11-.58.332-.801.221-.221.488-.332.8-.332h2.735c.313 0 .58.11.801.332.221.221.332.488.332.8v.782h3.125zm-7.54-.781v.781h3.83v-.781c0-.365-.183-.547-.548-.547H4.258c-.365 0-.547.182-.547.547zm5.274 12.695L9.883 2.5H1.406l.899 11.328v.04c0 .364.195.546.586.546h5.507c.391 0 .586-.182.586-.547v-.039zm-3.632-.664V3.75h.546v9.414h-.546zM8.125 3.75l-.43 9.414h-.547L7.54 3.75h.586zm-4.453 0l.43 9.414h-.547l-.43-9.414h.547z' />
		<path d='M-6-5h24v24H-6z' />
	</g>
);

export default class TrashIcon extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
	}

	render () {

		return (
			<SVGWrapper className={this.props.className} width={12} height={15}>
				{paths()}
			</SVGWrapper>
		);
	}

}
