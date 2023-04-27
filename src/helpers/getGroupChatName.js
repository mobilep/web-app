export const getGroupChatName = (chat) => {
	if (chat._scenario) return chat._scenario.name;
	if (chat.title) return chat.title;

	return chat.users
		.map(({ firstName, lastName }) => `${firstName} ${lastName[0]}`)
		.join(', ');
};
