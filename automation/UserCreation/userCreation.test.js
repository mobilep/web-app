import puppeteer from 'puppeteer';
import faker from 'faker';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });
const ADMIN_URL = 'http://dev.mobilepractice.io/';
const ADMIN_CRED = { username: 'anton.prokofiev@techmagic.co', password: 'Password1' };

let emailForUser = '';

describe('Flow as first time user', () => {
	jest.setTimeout(120000);
	test('Create user and verify first time sign in for creates user', async () => {
		let browser = '';
		let page = '';

		browser = await puppeteer.launch({
			headless: true,
			args: ['--disable-dev-shm-usage'],
		});
		page = await browser.newPage();
		page.setViewport({ width: 1920, height: 1080 });

		await page.goto(ADMIN_URL);

		const email = await page.$('#email');
		const password = await page.$('#password');
		const button = await page.$('input.btn');

		await email.type(ADMIN_CRED.username);
		await password.type(ADMIN_CRED.password);
		await button.click();

		await page.waitForNavigation({ waitUntil: 'networkidle0' });
		await page.click('span.link-header');

		const firstName = await page.$('[ng-reflect-name="firstName"]');
		const lastName = await page.$('[ng-reflect-name="lastName"]');
		const emailUser = await page.$('[ng-reflect-name="email"]');
		const post = await page.$('[ng-reflect-name="postcode"]');

		const user = {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
		};
		emailForUser = `${user.firstName + user.lastName }@yopmail.com`;

		await firstName.type(user.firstName);
		await lastName.type(user.lastName);
		await emailUser.type(emailForUser);
		await page.select('[ng-reflect-name="country"]', 'US');
		await post.type('90230');
		await page.select('[ng-reflect-name="lang"]', 'en');
		await page.click('[type="Submit"]');

		const yopmailPage = await browser.newPage();
		await yopmailPage.goto('http://www.yopmail.com');
		await yopmailPage.type('input#login', emailForUser);
		await yopmailPage.click('input.sbut');
		await yopmailPage.waitFor(10000);
		const a = await yopmailPage.frames().find((f) => f.name() === 'ifinbox');
		await a.$$eval('span.lmf', (span) => {
			span.map((sp) => {
				if (sp.textContent === 'Mobile Practice') {
					sp.click();
				} else {
					console.log("Can't find element with appropriate text");
				}
			});
		});
		await yopmailPage.waitFor(10000);
		const c = await yopmailPage.frames().find((f1) => f1.name() === 'ifmail');
		await c.$$eval('a', (anchor) => {
			anchor.map((a) => {
				if (a.textContent === 'Reset your password') {
					a.click();
				} else {
					console.log("Can't find element with appropriate text");
				}
			});
		});
		await yopmailPage.waitFor(5000);

		const pages = await browser.pages();
		const newPage = pages[3];

		const firstPassword = await newPage.$('[name="password"]');
		const secondPassword = await newPage.$('[placeholder="Confirm password"]');
		const subBtn = await newPage.$('[type="submit"]');
		await firstPassword.type('qqqqqqqq');
		await secondPassword.type('qqqqqqqq');
		await subBtn.click();

		const signIn = await newPage.$('button.Button');
		await signIn.click();

		await yopmailPage.waitFor(5000);

		await browser.close();
	});
});
