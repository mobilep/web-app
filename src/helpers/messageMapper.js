import { messageTypes } from '../constants/common';

const isTypeOfMessage = (type) => (message) => {
	return message.type === type;
};

const getNewMessagesContent = (inboxes, type) => {
	return inboxes
		.map((item) => item.messages.filter(isTypeOfMessage(type)))
		.flat()
		.map(({ content }) => content);
};

const mapMessagesSnapshot = (snapshot) => {
	if (!snapshot) return [];
	return Object.keys(snapshot)
		.reduce((acc, current) => {
			const msg = {
				messageId: current,
				...snapshot[current],
			};
			acc.push(msg);
			return acc;
		}, []);
};

const mapAndGroupNewMediaMessages = (inboxes, store) => {
	const myVideoMessages = getNewMessagesContent(inboxes, messageTypes.VIDEO)
		.filter(({ videoId }) => !store.value.videosInfo[videoId]);

	const myImageMessages = getNewMessagesContent(inboxes, messageTypes.IMAGE)
		.filter(({ imageId }) => !store.value.imagesInfo[imageId]);

	const myAudioMessages = getNewMessagesContent(inboxes, messageTypes.AUDIO)
		.filter(({ audioId }) => !store.value.mediaInfo[audioId])
		.map((audioMsg) => ({ ...audioMsg, id: audioMsg.audioId }));

	return { myVideoMessages, myImageMessages, myAudioMessages };
};

export default {
	mapMessagesSnapshot,
	isTypeOfMessage,
	mapAndGroupNewMediaMessages,
};
