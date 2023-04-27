import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { format, isToday, isYesterday } from 'date-fns';

const getClassName = (className) => classNames('LineOnSides', className);

const getDateString = (timestamp, languageCode, yesterday, today) => {
	let relativeDayString = '';
	if (isToday(timestamp)) {
		relativeDayString = `${today} `;
	} else if (isYesterday(timestamp)) {
		relativeDayString = `${yesterday} `;
	}

	return `${relativeDayString}${format(timestamp, 'd MMMM', { locale: languageCode })}`;
};

const MessageListDate = ({ className, languageCode, timestamp, yesterdayTextLabel, todayTextLabel }) => {
	return (
		<div className={getClassName(className)}>
			{getDateString(timestamp, languageCode, yesterdayTextLabel, todayTextLabel)}
		</div>
	);
};

MessageListDate.propTypes = {
	className: PropTypes.string,
	languageCode: PropTypes.object,
	timestamp: PropTypes.number,
	todayTextLabel: PropTypes.string,
	yesterdayTextLabel: PropTypes.string,
};

export default MessageListDate;
