import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { googleDriveIcon, defaultLinkIcon, dropboxIcon } from '../../../images';

import './styles.css';

const GOOGLE_DRIVE_PATH = 'docs.google.com';
const DROPBOX_PATH = 'dropbox.com';

export default class MessageLink extends Component {

	static propTypes = {
		url: PropTypes.string,
	}

	getLinkIcon () {
		if (this.props.url.includes(GOOGLE_DRIVE_PATH)) {
			return googleDriveIcon;
		}

		if (this.props.url.includes(DROPBOX_PATH)) {
			return dropboxIcon;
		}

		return defaultLinkIcon;
	}

	render () {
		const { url } = this.props;
		const linkIconSrc = this.getLinkIcon();

		return (
			<a
				className='MessageLink'
				href={url}
				target='_blank'
				rel='noopener noreferrer'
			>
				<span className='MessageLink-icon'>
					<img src={linkIconSrc} alt='' />
				</span>

				<span>
					{ url }
				</span>
			</a>
		);
	}

}
