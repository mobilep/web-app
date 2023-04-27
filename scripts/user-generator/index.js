const request = require('request');
const faker = require('faker');

const firstNameNew = faker.name.firstName();
const lastNameNew = faker.name.lastName();
const generateUserEmail = (emailDomain = '@yopmail.com') => `${firstNameNew}${lastNameNew}${emailDomain}`;

const userData = {
	email: generateUserEmail(),
	firstName: firstNameNew,
	lastName: lastNameNew,
	password: '123123qq',
	isCompanyAdmin: true,
	isSysAdmin: false,
};

const headers = {
	'Content-Type': 'application/json',
	authorization: '714a2d5a-1fbb-4cb5-86ec-a540c26da42d',
};

request.post(
	'https://dev-api.mobilepractice.io/api/v1/spec/user',
	{
		json: [userData],
		headers,
	},
	(error, response, body) => {
		if (error) throw new Error('Failed to create a user');
		if (response.statusCode === 200) {
			console.log(`Email is ${userData.email} and password is ${userData.password}`);
		}
	}
);
