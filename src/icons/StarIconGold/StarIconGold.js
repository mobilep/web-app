import React, { PureComponent } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable max-len */
export const paths = () => (
	<g fill='none' fillRule='evenodd'>
		<defs>
			<linearGradient id='prefix__a' x1='212.532%' x2='5.623%' y1='-18.967%' y2='95.558%'>
				<stop offset='0%' stopColor='#FFF57F' />
				<stop offset='100%' stopColor='#FFCF00' />
			</linearGradient>
		</defs>
		<path fill='url(#prefix__a)' fillRule='evenodd' d='M21.523 12.517c.433-.42.585-1.038.399-1.611a1.567 1.567 0 00-1.274-1.07l-5.327-.772a.696.696 0 01-.524-.38l-2.382-4.808A1.569 1.569 0 0011 3c-.604 0-1.147.336-1.414.876l-2.382 4.81a.696.696 0 01-.525.379l-5.327.771a1.567 1.567 0 00-1.274 1.07 1.558 1.558 0 00.4 1.611l3.854 3.743c.164.16.24.39.2.615l-.909 5.285c-.08.465.042.918.344 1.275.47.556 1.29.725 1.945.382l4.764-2.496c.2-.104.45-.103.648 0l4.765 2.496c.231.122.479.183.734.183.465 0 .907-.206 1.21-.565.303-.357.425-.81.344-1.275l-.91-5.285a.693.693 0 01.201-.615l3.855-3.743z' transform='translate(0 -3)' />
	</g>
);

export default class StarIconGold extends PureComponent {

	render () {

		return (
			<SVGWrapper width={22} height={21}>
				{paths()}
			</SVGWrapper>
		);
	}

}
