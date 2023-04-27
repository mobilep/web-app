import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class DragAndDropFileInfo extends Component {

	renderFormatItem (formatName, index) {
		return (
			<Fragment key={formatName}>
				{ index !== 0 ? ', ' : null }
				<span>{formatName.toUpperCase()}</span>
			</Fragment>
		);
	}

	render () {
		const {
			maxFileSize,
			formatNamesArray,
			maxFileSizeText,
			formatsText,
			fileCountText,
		} = this.props;

		return (
			<div className='DragAndDropFileInfo'>
				{fileCountText} {formatsText} {formatNamesArray.map(this.renderFormatItem)}
				. {maxFileSizeText} <span>{maxFileSize} MB</span>.
			</div>
		);
	}
}

DragAndDropFileInfo.propTypes = {
	fileCountText: PropTypes.string,
	formatNamesArray: PropTypes.arrayOf(PropTypes.string),
	formatsText: PropTypes.string,
	maxFileSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	maxFileSizeText: PropTypes.string,
};
