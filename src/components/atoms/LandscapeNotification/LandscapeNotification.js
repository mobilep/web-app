import React, { PureComponent } from 'react';
import RotateDevice from '../../../icons/RotateDevice';
import PropTypes from 'prop-types';
import { withLanguageContext } from '../../../utils/LanguageContext';
import './styles.css';

class LandscapeNotification extends PureComponent {

	static propTypes = {
		content: PropTypes.object,
	}

	render () {
		const { home: { landscape: { title, message } } } = this.props.content;

		return (
			<div className='LandscapeNotification-wrapper'>
				<div>
					<RotateDevice className='LandscapeNotification-image' />
					<div className='LandscapeNotification-title'>{title}</div>
					<div className='LandscapeNotification-message'>{message}</div>
				</div>
			</div>
		);
	}

}

export default withLanguageContext(LandscapeNotification);
