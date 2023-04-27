import React from 'react';
import reactStringReplace from 'react-string-replace';
import { MessageLink } from '../components/atoms';
import { REGEX_PATTERNS } from '../constants/regex-patterns';
import constants from '../constants';

const { UNREAD } = constants.common.inboxStatuses;

const isPracticeChatAndUnread = ({ status, _inbox, _scenario }) => {
	return _scenario && _inbox && (status === UNREAD || _inbox.status === UNREAD);
};

const isGroupChatAndUnread = ({ users, status, _scenario }) => {
	return _scenario && users && status === UNREAD;
};

export const isScenarioInboxUnread = (inbox) => {
	return isPracticeChatAndUnread(inbox) || isGroupChatAndUnread(inbox);
};

export const isMessageMatchId = (id) => (message) => {
	return message.messageId === id;
};

export function replaceUrlWithLink (inputString) {
	return reactStringReplace(inputString, REGEX_PATTERNS.URL, (match) => {
		if (!match) return '';

		return <MessageLink url={match} />;
	});
}

export const hasState = (stateName) => (practice) => practice.state === stateName;
