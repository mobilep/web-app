import { messageMediaTypes } from '../constants/common';

const getMessageBody = (content, type) => {
	return messageMediaTypes.includes(type) ? { type, content	} : { content };
};

export default getMessageBody;
