import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd'>
		<g transform='rotate(-90 89.157 88.436)'>
			<path fill='#E0E3E5' fillRule='nonzero' d='M9.856 147.064V11.096c0-.57.457-1.085 1.085-1.085h77.92c.572 0 1.085.457 1.085 1.085v135.968c0 .57-.456 1.085-1.084 1.085H10.884c-.514-.058-1.028-.514-1.028-1.085zm2.112-134.94V145.98h75.866V12.124H11.968z' />
			<rect width='95.552' height='175.686' x='1.751' y='.936' stroke='#E0E3E5' strokeWidth='1.872' rx='7.488' />
			<ellipse cx='49.527' cy='162.447' stroke='#E0E3E5' strokeWidth='1.872' rx='6.558' ry='6.62' />
		</g>
		<g transform='translate(80.132)'>
			<path fill='#93989A' fillRule='nonzero' d='M9.042 147.064V11.096c0-.57.456-1.085 1.084-1.085h77.921c.571 0 1.085.457 1.085 1.085v135.968c0 .57-.457 1.085-1.085 1.085H10.07c-.513-.058-1.027-.514-1.027-1.085zm2.112-134.94V145.98H87.02V12.124H11.154z' />
			<ellipse cx='48.712' cy='162.447' stroke='#93989A' strokeWidth='1.872' rx='6.558' ry='6.62' />
			<rect width='95.552' height='175.686' x='.936' y='.936' stroke='#93989A' strokeWidth='1.872' rx='7.488' />
		</g>
		<g stroke='#979797' strokeWidth='2.059'>
			<path strokeLinecap='round' strokeLinejoin='round' d='M16.432 66.112c0-21.125 17.125-38.25 38.25-38.25h1.398' />
			<path d='M67.693 28.431l-10.583-5.9v10.721l10.583-4.82z' />
		</g>
	</g>
);

class RotateDevice extends PureComponent {
	static propTypes = {
		className: PropTypes.string,
	}

	render () {
		return (
			<SVGWrapper className={this.props.className} width={176} height={178}>
				{paths()}
			</SVGWrapper>
		);
	}

}

export default RotateDevice;
