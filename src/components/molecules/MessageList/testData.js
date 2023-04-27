/* eslint-disable max-len */
export default {
	users: [
		{
			_company: '592b3b608cd6291923e74ac2',
			_id: '592b3eef97c0ba1a8ac5213b',
			isCompanyAdmin: true,
			isSysAdmin: false,
			email: 'mike@company.com',
			name: 'Alvin Lane',
			lastName: 'Lane',
			firstName: 'Alvin',
		},
		{
			_company: '592b3b608cd6291923e74ac1',
			_id: '592b3b608cd6291923e74ac2',
			isCompanyAdmin: true,
			isSysAdmin: false,
			email: 'mike@company.com',
			lastName: 'Mike',
			firstName: 'King',
		},
	],

	messages: [
		{
			type: 'text',
			user: '592b3eef97c0ba1a8ac5213b',
			content: 'Here’s my first good attempt. Let me know what you think.Good start. Please re-record, remember to slow down at the beginning and focus on customer needs even more',
			time: '1525653351987',
		},
		{
			type: 'video',
			user: '592b3eef97c0ba1a8ac5213b',
			content: {
				id: '123',
				thumbnailUrl: 'http://via.placeholder.com/350x150/00423b?text=video%20message',
			},
			time: '1525653371987',
		},
		{
			type: 'text',
			user: '592b3eef97c0ba1a8ac5213b',
			content: 'Here’s my first good attempt. Let me know what you think.',
			time: '1525675351987',
		},
		{
			type: 'text',
			user: '592b3b608cd6291923e74ac2',
			content: 'Good start. Please re-record, remember to slow down at the beginning and focus on customer needs even more',
			time: '1525798331987',
		},
		{
			type: 'text',
			user: '592b3eef97c0ba1a8ac5213b',
			content: 'Here’s my first good attempt. Let me know what you think, please !',
			time: '1525853351987',
		},
		{
			type: 'evaluation',
			user: '592b3b608cd6291923e74ac2',
			content: {
				avgMark: '4.3',
				text: 'Here’s my first good attempt. Let me know what you think, please !',
			},
			time: '1525854790993',
		},
	],
};
