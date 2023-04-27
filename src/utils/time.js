import {
	format, differenceInMinutes, formatDistanceStrict,
	isPast, isValid, differenceInDays, endOfDay, subMonths,
} from 'date-fns';

import { TIME } from '../constants/time';

export function getTimeString ({ time, last, justSentText, author = 'Mobile Practice' }) {
	const now = new Date().getTime();
	const timeLimitPassed = differenceInMinutes(now, time) < TIME.JUST_SEND_LIMIT_MIN;
	const timeString = (last && timeLimitPassed) ? justSentText : `${format(time, 'HH:mm')}`;

	return `${author}, ${timeString}`;
}

/**
 * @param {number} seconds
 */
export function getMinutesFromSeconds (seconds) {
	const m = parseInt((seconds / 60), 10);
	return (m < 10) ? `0${m}` : m;
}

/**
 * @param {number} seconds
 */
export function getRemainderSeconds (seconds) {
	const s = seconds % 60;
	return (s < 10) ? `0${s}` : s;
}

/**
 * @param {number} seconds
 */
export function formatDuration (seconds) {
	const hours = getHoursFromSeconds(seconds);
	const hoursString = hours ? `${hours}:` : '';
	return `${hoursString}${formatSecondsWithMinutes(seconds % TIME.SEC_IN_HOURS)}`;
}

/**
 * @param {number} seconds
 */
export function formatSecondsWithMinutes (seconds) {
	return `${getMinutesFromSeconds(seconds)}:${getRemainderSeconds(seconds)}`;
}

/**
 * @param {number} seconds
 */
function getHoursFromSeconds (seconds) {
	const h = parseInt((seconds / TIME.SEC_IN_HOURS), 10);

	if (!h) return null;

	return (h < 10) ? `0${h}` : h;
}

function getDaysLeft ({ date, locale, suffix, pastDueText }) {
	if (!date || !isValid(date)) {
		return { daysLeftText: null, daysLeft: null };
	}

	const dateValue = endOfDay(date);
	if (isPast(dateValue)) {
		return { daysLeftText: pastDueText, daysLeft: null };
	}

	const relativeDateOptions = { locale, roundingMethod: 'floor' };
	return {
		daysLeftText: `${formatDistanceStrict(dateValue, new Date(), relativeDateOptions)} ${suffix}`, // 20 days left
		daysLeft: differenceInDays(dateValue, new Date()),
	};
}

const getDaysAgoText = ({ date, locale, prefix }) => {
	const relativeDateOptions = {
		roundingMethod: 'floor',
		addSuffix: true,
		locale,
	};

	// E.g. ${prefix} 20 days ago
	return `${prefix} ${formatDistanceStrict(date, new Date(), relativeDateOptions)}`;
};

/**
 * @param {number} ms
 * @returns {number}
 */
const getRoundedDaysFromMs = (ms) => {
	return Math.ceil(ms / TIME.MS_IN_DAY);
};

/**
 * @param {'lastMonth' | 'last3Month' | 'lastYear'} periodStr
 */
const getPeriodDatesRange = (periodStr) => {
	const now = +new Date();
	const fromDatesMap = {
		lastMonth: subMonths(now, 1).getTime(),
		last3Month: subMonths(now, 3).getTime(),
		lastYear: subMonths(now, 12).getTime(),
	};

	return { from: fromDatesMap[periodStr], to: now };
};

const TIME_UTILS = {
	getTimeString,
	getDaysLeft,
	getDaysAgoText,
	getRoundedDaysFromMs,
	getPeriodDatesRange,
};

export default TIME_UTILS;
