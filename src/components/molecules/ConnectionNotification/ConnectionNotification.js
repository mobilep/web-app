import React, { useContext, useEffect, useState } from 'react';

import './styles.css';
import { LanguageContext } from '../../../utils';
import { CONNECTION_STATUSES } from '../../../constants/connectionStatuses';
import { Dialog, Button } from '../../atoms';
import { SuccessIcon, ErrorIcon } from '../../../icons';

export default function ConnectionNotification () {
	const { home: { connection } } = useContext(LanguageContext);
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [buttonText, setButtonText] = useState('');
	const [connectionStatus, setConnectionStatus] = useState(CONNECTION_STATUSES.ONLINE);

	const handleOnline = () => setConnectionStatus(CONNECTION_STATUSES.ONLINE);
	const handleReconnect = () => setConnectionStatus(CONNECTION_STATUSES.RECONNECTED);
	const handleOffline = () => setConnectionStatus(CONNECTION_STATUSES.OFFLINE);

	useEffect(() => {
		window.addEventListener('online', handleReconnect);
		window.addEventListener('offline', handleOffline);

		return () => {
			window.removeEventListener('online', handleReconnect);
			window.removeEventListener('offline', handleOffline);
		};
	}, []);

	useEffect(() => {
		if (connectionStatus === CONNECTION_STATUSES.OFFLINE) {
			setTitle(connection.titleError);
			setText(connection.message);
			setButtonText(null);
		} else if (connectionStatus === CONNECTION_STATUSES.RECONNECTED) {
			setTitle(connection.titleSuccess);
			setText(null);
			setButtonText(connection.button);
		}
	}, [connectionStatus]);

	if (connectionStatus === CONNECTION_STATUSES.ONLINE) return null;

	return (
		<Dialog
			visible
			className='ConnectionNotification'
			closeButton={false}
		>
			<div className='ConnectionNotification-wrapper'>
				{connectionStatus === CONNECTION_STATUSES.RECONNECTED
					? <div className='successIcon'><SuccessIcon /></div>
					: <div className='errorIcon'><ErrorIcon /></div>
				}
				<div className='ConnectionNotification-title'>{title}</div>
				<div>{text}</div>
				{buttonText && <Button	onClick={handleOnline}>{buttonText}</Button>}
			</div>
		</Dialog>
	);
}
