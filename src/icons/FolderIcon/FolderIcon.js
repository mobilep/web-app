import React, { Component } from 'react';

import SVGWrapper from '../SVGWrapper';

/* eslint-disable-next-line*/
const d = 'M36.962 13.25c.82.104 1.474.508 1.961 1.21.487.704.628 1.46.423 2.267l-3.538 14.375a2.789 2.789 0 0 1-.981 1.543 2.65 2.65 0 0 1-1.712.605H2.538l-.038-.04a2.422 2.422 0 0 1-1.23-.429l-.058-.058c-.013-.013-.033-.02-.058-.02v-.039c-.026 0-.045-.006-.058-.02-.013-.012-.025-.019-.038-.019-.013 0-.02-.007-.02-.02 0-.013-.012-.02-.038-.02 0-.025-.006-.045-.02-.058l-.038-.039c-.013-.013-.032-.02-.057-.02a2.464 2.464 0 0 1-.693-1.132c-.025-.026-.038-.065-.038-.117v-.04l-.02-.019c-.012-.013-.019-.026-.019-.039v-.098l-.038-.039v-.117a2.67 2.67 0 0 1-.039-.43V3.563c0-.78.27-1.445.808-1.992A2.65 2.65 0 0 1 2.808.75H15.23a2.69 2.69 0 0 1 1.654.547c.487.364.82.833 1 1.406l.961 3.047h15.346c.77 0 1.423.273 1.962.82.538.547.808 1.211.808 1.992v4.688zM2.808 3.562v15.274l.846-3.477c.154-.625.48-1.132.98-1.523.5-.39 1.071-.586 1.712-.586h27.846V8.562H16.808l-1.577-5H2.808zm30.307 26.875l3.539-14.375H6.346L2.808 30.438h30.307z';

/* eslint-disable max-len */
export const paths = () => <path fill='currentColor' fillRule='evenodd' d={d} />;

export default class FolderIcon extends Component {

	render () {

		return (
			<SVGWrapper width={40} height={34}>
				{paths()}
			</SVGWrapper>
		);
	}

}
