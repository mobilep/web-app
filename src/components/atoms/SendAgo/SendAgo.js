import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext, timeUtils } from '../../../utils';
import { differenceInDays } from 'date-fns';

import './styles.css';

const MIN_NUMBER_OF_DAYS_TO_SHOW = 1;

export default class SendAgo extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		date: PropTypes.oneOf([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	}

	getSendAgoReminder () {
		const { date } = this.props;
		const locale = this.context._contextSettings.dateFnsLanguageCode;
		const today = new Date();
		const sendDate = new Date(date);

		if (differenceInDays(today, sendDate) < MIN_NUMBER_OF_DAYS_TO_SHOW) {
			return null;
		}

		return timeUtils.getDaysAgoText({ date: sendDate, locale, prefix: this.context.reminder.sent });
	}

	render () {
		const sendAgoText = this.getSendAgoReminder();

		return <div className='SendAgo'>{ sendAgoText }</div>;
	}
}
