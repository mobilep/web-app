import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { getFileExtensionFromName } from '../../../utils/fileService';
import { filePdfImg } from '../../../images';

const DEFAULT_FILE_IMAGES = {
	pdf: filePdfImg,
};

export default class FileIcon extends Component {
	static propTypes = {
		className: PropTypes.string,
		fileName: PropTypes.string,
	}

	getClassName () {
		return classNames(this.props.className);
	}

	render () {
		const { fileName } = this.props;
		const fileExtension = getFileExtensionFromName(fileName);
		const iconSrc = DEFAULT_FILE_IMAGES[fileExtension] || null;

		return (
			<img src={iconSrc} alt='' className={this.getClassName()} />
		);
	}
}
