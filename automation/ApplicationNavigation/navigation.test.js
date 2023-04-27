import puppeteer from 'puppeteer';
const URL = 'https://dev-web.mobilepractice.io/';
import { toMatchImageSnapshot } from 'jest-image-snapshot';
expect.extend({ toMatchImageSnapshot });
const PATH = __dirname;

describe('Verification navigation of Application', () => {
	jest.setTimeout(120000);
	let browser = '';
	let page = '';

	beforeEach(async () => {
		browser = await puppeteer.launch({
			headless: true,
			args: ['--disable-dev-shm-usage'],
		});
		page = await browser.newPage();
		page.setViewport({ width: 1920, height: 1080 });
		await page.goto(URL);

		await page.type('[type="email"]', 'z@yopmail.com');
		await page.type('[type="password"]', 'zxczxc11');
		await page.click('button.Button-white');
	});

	afterEach(() => {
		browser.close();
	});

	test('Login and Logout', async () => {
		await page.waitForSelector('button.Button.PrimaryNavigationItem');
		await page.click('button.Button.PrimaryNavigationItem');
		await page.waitForSelector('div.Form-header');
		const b = await page.$eval('div.Form-header', ((el) => el.innerHTML));

		expect(b).toEqual('Hello!');
	});

	test('Verify left navigation menu', async () => {
		await page.waitForSelector('nav.PrimaryNavigation-nav');
		const navLinks = await page.$$('nav.PrimaryNavigation-nav a');
		expect(navLinks.length).toEqual(5);

		const navBar = await page.$('div.PrimaryNavigation');
		const image = await navBar.screenshot({ path: `${PATH}/navBar.png` });
		expect(image).toMatchImageSnapshot();
	});

	test('Verify Inbox messages page', async () => {
		const expectTitle = 'Inbox messages';
		await page.waitForSelector('div.SecondaryNavigation-header');
		const inboxTitle = await page.$eval('div.SecondaryNavigation-header h3', ((el) => el.innerHTML));
		expect(inboxTitle).toEqual(expectTitle);

		await page.waitForSelector('div.Inbox-search-wrapper');
		const searchBox = await page.$eval('div.Inbox-search-wrapper', (el) => {
			return window.getComputedStyle(el).getPropertyValue('display') !== 'none';
		});
		expect(searchBox).toEqual(true);
	});

	test('Verify New Message Flow', async () => {
		const expectTitleNewMessage = 'New message';
		const expectTitle = 'Inbox messages';

		await page.waitForSelector('a.Button');
		await page.$$eval('a.Button', (el) => {
			el.map((selector) => {
				if (selector.textContent === 'New') {
					selector.click();
				} else {
					console.log('Element is not found');
				}
			});
		});
		const inboxNewTitle = await page.$eval('div.SecondaryNavigation-header h3', ((el) => el.innerHTML));
		expect(inboxNewTitle).toEqual(expectTitleNewMessage);

		await page.waitForSelector('ul.UserCardList');
		const usersList = await page.$$('li.UserCardList-item');
		expect(usersList.length).toBeGreaterThan(0);

		await page.waitForSelector('a.Button');
		await page.$$eval('a.Button', (el) => {
			el.map((selector) => {
				if (selector.textContent === 'Cancel') {
					selector.click();
				} else {
					console.log('Element is not found');
				}
			});
		});
		const inboxTitle = await page.$eval('div.SecondaryNavigation-header h3', ((el) => el.innerHTML));
		expect(inboxTitle).toEqual(expectTitle);

	});

	test('Verify Evaluate Dialog window', async () => {
		await page.waitForSelector('div.UserCard-person');
		await page.$$eval('div.UserCard-person', (elements) => {
			elements.map((el) => {
				if (el.innerHTML === 'Jon Doe') {
					el.click();
				} else {
					console.log('element is not found');
				}
			});
		});
		await page.waitForSelector('div.ConversationHeader.Conversation-header');

		await page.$$eval('button', ((elements) => {
			elements.map((el) => {
				if (el.innerHTML === 'Evaluate') {
					el.click();
				} else {
					console.log('There is no element');
				}
			});
		}));
		const evaluateTitle = await page.$eval('div.EvaluateDialog-paragraph', ((el) => el.innerHTML));
		expect(evaluateTitle).toEqual('1- not at all, 5- absolutely');

		const dialog = await page.$('div.EvaluateDialog');
		const image = await dialog.screenshot({ path: `${PATH}/evaluateDialog.png` });
		expect(image).toMatchImageSnapshot();
	});

	test('Verify chat window', async () => {
		await page.waitForSelector('li.UserCardList-item');
		await page.click('li.UserCardList-item');

		await page.waitForSelector('div.ConversationHeader.Conversation-header');
		const userTitle = await page.$eval('div.ConversationHeader.Conversation-header span', ((el) => el.innerHTML));
		expect(userTitle.length).toBeGreaterThan(2);

		const messageBox = await page.$('div.MessageBox.Conversation-messageBox');
		const messageBoxImage = await messageBox.screenshot({ path: `${PATH}/messageBox.png` });
		expect(messageBoxImage).toMatchImageSnapshot();
	});
});
