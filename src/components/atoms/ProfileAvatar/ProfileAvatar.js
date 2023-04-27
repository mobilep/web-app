import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Spinner from '../Spinner';
import { Button } from '../../atoms';
import { PlusIcon } from '../../../icons';
import WithUpload from '../../../HOC/WithUpload';

import './styles.css';

const UploadPhotoButton = (WithUpload && WithUpload((props) => <Button {...props} />)) ||
	((props) => <Button {...props} />);

export default class ProfileAvatar extends Component {

	static propTypes = {
		color: PropTypes.string,
		imgUrl: PropTypes.string,
		initials: PropTypes.string,
		onAvatarChange: PropTypes.func,
		text: PropTypes.string,
		userAvatarStatus: PropTypes.string,
	}

	render () {
		const {
			color,
			imgUrl,
			initials,
			onAvatarChange,
			/* text,*/
			userAvatarStatus,
		} = this.props;

		const { matches } = window.matchMedia('(max-width: 768px)');
		const shouldRenderSpinner = ['PROCESSING', 'CHECKING'].includes(userAvatarStatus);

		return (
			<div className='ProfileAvatar'>
				{shouldRenderSpinner ? <Spinner className='ProfileAvatar-spinnerIcon' color='white' /> : <Avatar
					size={!matches ? Avatar.AVATAR_SIZES.AVATAR_100 : Avatar.AVATAR_SIZES.AVATAR_70}
					initials={initials}
					img={imgUrl}
					color={color}
				/>}
				{!matches && !shouldRenderSpinner
					? <UploadPhotoButton
						onSend={onAvatarChange}
						className='ProfileAvatar-icon'
						fileType='photo'
					>
						<PlusIcon />
					</UploadPhotoButton>
					: <UploadPhotoButton
						onSend={onAvatarChange}
						className='ProfileAvatar-icon' // ProfileAvatar-text before changes
						fileType='photo'
					>
						{/* {text}*/}
						<PlusIcon />
					</UploadPhotoButton>}
			</div>
		);
	}

}
