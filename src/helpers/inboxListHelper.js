import { messageMediaTypes } from '../constants/common';
import { getGroupChatName } from './getGroupChatName';
import { groupIcon } from '../images';
import { matchId } from './arrayHelpers';

export default function (
	{
		listData,
		chatPlaceholder,
		groupChatPlaceholder,
		deletedUser: deletedUserI18n,
	}
) {
	return listData.map((item) => {
		const newItem = {
			_id: item._id,
			updatedAt: item.updatedAt,
			createdAt: item.createdAt,
			state: item.state,
			status: item.status,
			users: item.users,
		};
		let recipient;
		let message;
		const isGroupChat = !!item.users;

		if (isGroupChat && !item._scenario) {
			newItem.groupChatName = getGroupChatName(item);
			newItem.groupAvatar = groupIcon;
			message = { ...item.message };
		}

		if (item._recipient && item.message) {
			recipient = { ...item._recipient };
			message = { ...item.message };
		} else if (item._scenario) {
			if (item._coach._id === item.currentUserId) {
				recipient = { ...item._user };
			} else {
				recipient = { ...item._coach };
			}
			message = { ...(item.message || item._inbox.message) };
			newItem.status = item.status || item._inbox.status;
			newItem._scenario = { ...item._scenario };
			newItem._inbox = { ...item._inbox };
			newItem.coachEvaluatedAt = item.coachEvaluatedAt;
			newItem.userEvaluatedAt = item.userEvaluatedAt;
			newItem.coachMark = item.coachMark;
			newItem.userMark = item.userMark;
		}

		message = message || {};
		recipient = recipient || {};

		newItem._recipient = recipient;
		newItem.message = message;

		const isLastMessageIncoming = message._user !== item.currentUserId;

		if (!isGroupChat && messageMediaTypes.includes(message.type)) {
			newItem.message.content = replaceNameInPlaceholder({
				incomingPlaceholder: chatPlaceholder[message.type].incoming,
				outcomingPlaceholder: chatPlaceholder[message.type].outcoming,
				incoming: isLastMessageIncoming,
				recipientName: newItem._recipient.name,
			});
		}

		if (isGroupChat && messageMediaTypes.includes(message.type)) {
			const recipient = item.users.find(matchId(message._user));
			const recipientName = recipient ? recipient.name : deletedUserI18n;
			newItem.message.content = replaceNameInPlaceholder({
				incomingPlaceholder: groupChatPlaceholder[message.type].incoming,
				outcomingPlaceholder: groupChatPlaceholder[message.type].outcoming,
				incoming: isLastMessageIncoming,
				recipientName,
			});
		}

		return newItem;
	});
}

function replaceNameInPlaceholder ({ incomingPlaceholder, outcomingPlaceholder, incoming, recipientName }) {
	if (incoming) {
		return incomingPlaceholder.replace('{name}', recipientName);
	}

	return outcomingPlaceholder.replace('{name}', recipientName);
}

export const isChatType = (type) => (chat) => {
	return chat.type === type || (chat.inbox && chat._inbox.type === type);
};
