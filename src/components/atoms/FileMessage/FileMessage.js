import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FileIcon } from '../../';

import './styles.css';

export default class FileMessage extends Component {
	static propTypes = {
		fileLink: PropTypes.string,
		fileName: PropTypes.string,
	}

	render () {
		const { fileName, fileLink } = this.props;

		return (
			<a
				className='FileMessage'
				href={fileLink}
				target='_blank'
				rel='noopener noreferrer'
			>
				<div className='FileMessage-icon'>
					<FileIcon fileName={fileName} />
				</div>
				{fileName}
			</a>
		);
	}
}
